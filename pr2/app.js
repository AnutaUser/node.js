const express = require('express');

const hbs = require('express-handlebars');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

let users = [];
let error = '';

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', ({body}, res) => {
    const emailExist = users.some(user => user.email === body.email);
    if (emailExist) {
        error = 'Email already exists, please create a new one ...'
        res.redirect('/error');
        return;
    }
    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1});
    res.redirect('/users');
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

app.get('/users/:userId', ({params}, res) => {
    const user = users.find(user => user.id === +params.userId);
    if (!user) {
        error = `User with id: ${params.userId} not exist!!!`;
        res.redirect('/error');
        return;
    }
    res.render('user', {user})
});

app.post('/users/:userId', ({ params }, res) => {
    users = users.filter(user => user.id !== +params.userId);
    res.redirect('/users' );
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', ({body}, res) => {
    const user = users.find(user => user.email === body.email && user.password === body.password);
    if (!user) {
        error = 'Error, entered password or login is incorrect!';
        res.redirect('/error');
        return;
    }
    res.redirect(`/users/${user.id}`);
});

app.get('/error', (req, res) => {
    res.render('error', {error});
});

app.use((req, res) => {
    res.render('notFound');
});

app.listen(9999, () => {
    console.log('Server 9999 is working!!!!!!!');
});


