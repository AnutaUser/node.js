const express = require('express');

const hbs = require('express-handlebars');
const {engine} = require('express-handlebars');
const path = require('path');
const {request} = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', ({query}, res) => {
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
    res.render('users', {users});
});

let error = '';

app.post('/login', ({body}, res) => {
    const emailExist = users.some(user => user.email === body.email);
    if (emailExist) {
        error = 'Email already exists, please create a new one ...'
        res.redirect('/error');
        return;
    }
    // res.render('users')
    users.push({...body, id: users.lenght ? users[users.lenght - 1].id + 1 : 1});
    res.redirect('/users');
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.get('/users/:userId', ({params}, res) => {
    console.log(params)
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with id: ${params.userId} not exist!!!`;
        res.redirect('/error');
        return;
    }
    res.render('user', {user})
    // res.render('user[userid]')
});

// const users = [
//     {
//         firstName: 'Olya',
//         lastName: 'Pupkina',
//         city: 'Stryy',
//         age: 22,
//         email: 'Pupkina@.com',
//         password: 'Olya123456',
//     },
//     {
//         firstName: 'Petro',
//         lastName: 'Petriv',
//         city: 'Kyiv',
//         age: 25,
//         email: 'Petriv@.com',
//         password: '123456Petro',
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Ivanenko',
//         city: 'Lviv',
//         age: 18,
//         email: 'Ivanenko@.com',
//         password: '123Ivan456',
//     },
//     {
//         firstName: 'Ira',
//         lastName: 'Lopushok',
//         city: 'Odessa',
//         age: 35,
//         email: 'Lopushok@.com',
//         password: '11111Ira',
//     },
//     {
//         firstName: 'Stepan',
//         lastName: 'Stepanenko',
//         city: 'Rivne',
//         age: 29,
//         email: 'Stepanenko@.com',
//         password: '987654Stepan',
//     },
//     {
//         firstName: 'Olya',
//         lastName: 'Pupkina',
//         city: 'Stryy',
//         age: 22,
//         email: 'Pupkina@.com',
//         password: 'Olya123456',
//     },
//     {
//         firstName: 'Petro',
//         lastName: 'Petriv',
//         city: 'Kyiv',
//         age: 25,
//         email: 'Petriv@.com',
//         password: '123456Petro',
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Ivanenko',
//         city: 'Lviv',
//         age: 18,
//         email: 'Ivanenko@.com',
//         password: '123Ivan456',
//     },
//     {
//         firstName: 'Ira',
//         lastName: 'Lopushok',
//         city: 'Odessa',
//         age: 35,
//         email: 'Lopushok@.com',
//         password: '11111Ira',
//     },
//     {
//         firstName: 'Stepan',
//         lastName: 'Stepanenko',
//         city: 'Rivne',
//         age: 29,
//         email: 'Stepanenko@.com',
//         password: '987654Stepan',
//     },
//     {
//         firstName: 'Olya',
//         lastName: 'Pupkina',
//         city: 'Stryy',
//         age: 22,
//         email: 'Pupkina@.com',
//         password: 'Olya123456',
//     },
//     {
//         firstName: 'Petro',
//         lastName: 'Petriv',
//         city: 'Kyiv',
//         age: 25,
//         email: 'Petriv@.com',
//         password: '123456Petro',
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Ivanenko',
//         city: 'Lviv',
//         age: 18,
//         email: 'Ivanenko@.com',
//         password: '123Ivan456',
//     },
//     {
//         firstName: 'Ira',
//         lastName: 'Lopushok',
//         city: 'Odessa',
//         age: 35,
//         email: 'Lopushok@.com',
//         password: '11111Ira',
//     },
//     {
//         firstName: 'Stepan',
//         lastName: 'Stepanenko',
//         city: 'Rivne',
//         age: 29,
//         email: 'Stepanenko@.com',
//         password: '987654Stepan',
//     },
//     {
//         firstName: 'Olya',
//         lastName: 'Pupkina',
//         city: 'Stryy',
//         age: 22,
//         email: 'Pupkina@.com',
//         password: 'Olya123456',
//     },
//     {
//         firstName: 'Petro',
//         lastName: 'Petriv',
//         city: 'Kyiv',
//         age: 25,
//         email: 'Petriv@.com',
//         password: '123456Petro',
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Ivanenko',
//         city: 'Lviv',
//         age: 18,
//         email: 'Ivanenko@.com',
//         password: '123Ivan456',
//     },
//     {
//         firstName: 'Ira',
//         lastName: 'Lopushok',
//         city: 'Odessa',
//         age: 35,
//         email: 'Lopushok@.com',
//         password: '11111Ira',
//     },
//     {
//         firstName: 'Stepan',
//         lastName: 'Stepanenko',
//         city: 'Rivne',
//         age: 29,
//         email: 'Stepanenko@.com',
//         password: '987654Stepan',
//     }
// ];
const users = [];

app.use((req, res) => {
    res.render('notFound');
});

app.listen(6660, () => {
    console.log('Server has started on port: 6660');
})



