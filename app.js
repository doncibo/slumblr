const cors = require('cors');
const createError = require('http-errors');
const cookieParser = require('cookie-parser')
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');
const csurf = require('csurf');
const routes = require('./routes');
const { ValidationError } = require("sequelize");
const { AuthenticationError } = require('./routes/util/auth');

const app = express();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())


// Security Middleware
app.use(cors({ origin: true }));
app.use(helmet({ hsts: false }));
app.use(
  csurf({
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

app.use(routes);

// Serve React Application
// This should come after routes, but before 404 and error handling.
if (process.env.NODE_ENV === "production") {
  app.get('/', (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.use(express.static("client/build"));
  app.get(/\/(?!api)*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.use(function(_req, _res, next) {
  next(createError(404));
});

app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
    console.log(err)
  }
  // err.status = 422;
  console.log(err)
  next(err);
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  if (err instanceof AuthenticationError) {
    res.clearCookie('token');
  }
  if (process.env.NODE_ENV === 'production') {
    res.json({
      message: err.message,
      error: { errors: err.errors },
    });
  } else {
    res.json({
      message: err.message,
      stack: err.stack,
      error: JSON.parse(JSON.stringify(err)),
    });
  }
});

module.exports = app;
