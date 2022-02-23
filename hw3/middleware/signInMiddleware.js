const { users } = require('../db');

module.exports = {
    checkUser: (req, res, next) => {
        try {
            const {email, password} = req.body;

            const user = users.find(user => user.email === email && user.password === password);
            if (!user) throw new Error('Error,wrong email or password!');

            req.user = user;
            console.log(user);
            next();
        } catch ({ message }) {
            res.redirect(`/error?error=${message}`);
        }
    }
}