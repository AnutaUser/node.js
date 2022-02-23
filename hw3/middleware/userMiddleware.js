const { users } = require('../db');

module.exports = {
    idUserValid: (req, res, next) => {
        try {
            const {userId} = req.params;

            if (!Number.isInteger(+userId) || Number.isNaN(+userId)) {
                throw new Error('Not valid id');
            }

            const user = users.find(user => user.id === +userId);
            if (!user) throw new Error (`User with id: ${userId} not exist!!!`);

            req.user = user;
            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    },

    dataUserValid: (req, res, next) => {
        try {
            const { firstName, lastName, city, age, email, password } = req.body;

            if (firstName.length < 2 || lastName.length < 2) {
                throw new Error('FirstName or lastName is too shot!');
            }

            if (!email.includes('@')) {
                throw new Error('Email is not valid!');
            }

            if (password.length < 6) {
                throw new Error('Not a strong password!')
            }

            if (age < 15) {
                throw new Error('You are too young!')
            }

            if (!city) {
                throw new Error('Please, enter your city!')
            }

            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    },

    userExist: (req, res, next) => {
        try {
            const {body} = req;

            const emailExist = users.some(user => user.email === body.email);
            if (emailExist) throw new Error('Email already exists, please create a new one ...');

            next();
        } catch ({message}) {
            res.redirect(`/error?error=${message}`);
        }
    }
};