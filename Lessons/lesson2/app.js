const express = require('express');

const hbs = require('express-handlebars');
const {engine} = require("express-handlebars");
const path = require("path");

// app.get('/users', (req, res) => {
//     res.send('Hello from server!!!');
// })

// const users = [
//     {
//         name: "Vasya",
//         age: 25,
//         status: true,
//         sex: 'male'
//     },
//     {
//         name: "kolya",
//         age: 20,
//         status: false,
//         sex: 'male'
//     },
//     {
//         name: "Ira",
//         age: 25,
//         status: true,
//         sex: 'female'
//     },
//     {
//         name: "olya",
//         age: 18,
//         status: false,
//         sex: 'female'
//     },
//     {
//         name: "Banan",
//         age: 65,
//         status: true,
//         sex: 'male'
//     },
//     {
//         name: "Ananas",
//         age: 69,
//         status: false,
//         sex: 'male'
//     }
// ]
//
// app.get('/users', (req, res) => {
//     res.json(users);
// })

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req,res) => {
    res.render('login');
})

app.get('/users', ((req, res) => {
    res.render('users', {users})
}))

app.get('/users/:id', (req,res) => {
    console.log(req.params);
    const {id} = req.params;
    console.log(req.query);
    res.json(users[id]);
})

app.post('/login', (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.redirect('/users');
})

const users =[
    {
        login: "banan",
        password: 123456
    },
    {
        login: "kokos",
        password: 987456
    },
    {
        login: "ananas",
        password: 101010
    }
]


app.use((req,res) => {
    res.render('notFound');
})

app.listen(4321, () => {
    console.log('Server has started on host : 4321');
})
