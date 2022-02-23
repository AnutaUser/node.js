let { users } = require('../db');

module.exports = {
    getUsers: (req, res) => {
        const {query} = req;

        if (Object.keys(query).length) {
            let usersFilter = [...users];

            if (query.city) {
                usersFilter = usersFilter.filter(user => user.city === query.city);
            }

            if (query.age) {
                usersFilter = usersFilter.filter(user => user.age === query.age);
            }

            res.render('users', {users: usersFilter});
            return;
        }

        res.render('users', { users });
    },

    getUserById: (req, res) => {
        const { user } = req;
        res.render('user', { user });
    },

    deleteUserById: (req, res) => {
        const {userId} = req.params;
        users = users.filter(user => user.id !== +userId);

        res.redirect('/users');
    }
};
