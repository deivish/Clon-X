const express = require('express');
const validateRegister = require('../validators/registerValidator'); 
const { registerUser } = require('../controllers/registerController');

const registerRouter = express.Router();

registerRouter.post('/register', validateRegister(), registerUser);

module.exports = registerRouter;
