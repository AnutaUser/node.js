const { Router } = require('express');

const { loginController } = require('../controllers');
const { userMiddleware } = require('../middleware');

const loginRouter = Router();

loginRouter.get('/',
    loginController.getFormUser
);
loginRouter.post('/',
    userMiddleware.dataUserValid,
    loginController.postNewUser
);

module.exports = loginRouter;