const { users } = require('../db');

module.exports = {
    getFormUser: (req, res) => {
        res.render('login');
    },

    postNewUser: ({body}, res) => {
        // const {body} = req;
        users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
        res.redirect('/users');
    }
};