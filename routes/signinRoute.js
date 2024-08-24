const express = require('express');
const validateSignin = require('../validators/signinValidator');
const { signinUser } = require('../controllers/signinController');

const signinRouter = express.Router();

signinRouter.post('/signin', validateSignin(), signinUser );

module.exports = signinRouter;