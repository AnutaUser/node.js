const { Router } = require('express');

const { signInController } = require('../controllers');
const { signInMiddleware } = require('../middleware');

const signInRouter = Router();

signInRouter.get('/',
    signInController.getFormSignIn
);
signInRouter.post('/',
    signInMiddleware.checkUser,
    signInController.signIn
);

module.exports = signInRouter;