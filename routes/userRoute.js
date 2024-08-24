const express = require('express');
const { listFollowed, listFollowers, listUsers } = require('../controllers/userController');
const { validateUser } = require('../validators/userValidator');

const userRouter = express.Router();

userRouter.get('/:user/followed', validateUser, listFollowed);

userRouter.get('/:user/followers', validateUser, listFollowers);

userRouter.delete('/:user/followed', validateUser, listFollowed);

userRouter.delete('/:user/followers', validateUser, listFollowers);

userRouter.get('/users', listUsers);

module.exports = userRouter;
