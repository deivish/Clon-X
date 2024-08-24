const express = require('express');
const { tweetValidator } = require('../validators/tweetsValidator');
const { listTweets, postTweet } = require('../controllers/tweetsController');
const { validationResult } = require('express-validator');

const tweetsRouter = express.Router();

tweetsRouter.get('/tweets', listTweets);

tweetsRouter.post('/tweets', tweetValidator, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}, postTweet);

module.exports = tweetsRouter;
