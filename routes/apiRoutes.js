const express = require('express');
const router = express.Router();

const { listFollowed } = require('../controllers/followedController');
const { listFollowers } = require('../controllers/followersController');
const { listTweets } = require('../controllers/publicationTweetsController');
const { listRegister } = require('../controllers/registerController');
const { listUsersSingin } = require('../controllers/signinController');




router.get("/followed", listFollowed );
router.get("/followers", listFollowers );
router.get("/tweets", listTweets );
router.get("/register", listRegister );
router.get("/signinUser", listUsersSingin );




module.exports = router;