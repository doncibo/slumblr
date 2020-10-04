const express = require('express');
const asyncHandler = require('express-async-handler');
const { Post, User, Like } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (_req, res) => {
		const posts = await Post.findAll({
            include: [{ model: User }],
        });
// console.log("----------------------------")
// console.log(posts)
// console.log("----------------------------")
        res.json(posts)
	})
);

router.post(
	'/',
	asyncHandler(async (req, res, next) => {
		// let { url, description, userId } = req.body;
		const post = await Post.create(req.body);
        
        return res.json({
            post,
        });
	})
);

module.exports = router;



