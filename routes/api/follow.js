const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require("../util/validation");
const { Post, User, Like, Follow } = require('../../db/models');

const router = express.Router();

router.get('/', 
	handleValidationErrors,
	asyncHandler(async (_req, res) => {
		const follows = await Follow.findAll({
			include: [{ model: User }],
        });
    	res.json(follows)
	})
);

router.post(
	'/',
	handleValidationErrors,
	asyncHandler(async (req, res, next) => {
		// let { url, description, userId } = req.body;
		const follow = await Follow.create(req.body);
        
        return res.json({
            follow,
        });
	})
);

module.exports = router;



