const { Router } = require('express');

const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

const userRouter = Router();

userRouter.get('/',
    userController.getUsers
);

userRouter.get('/:userId',
    userMiddleware.idUserValid,
    userMiddleware.userExist,
    userController.getUserById
);
userRouter.post('/:userId',
    userMiddleware.idUserValid,
    userController.deleteUserById
);

module.exports = userRouter;
