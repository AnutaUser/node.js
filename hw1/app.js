// ДЗ:
//
//     Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'main'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'online'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.appendFile(path.join(__dirname, 'app.js'),
//     '\n const onlineUsers = [\n{name: "Anna", age: 22, city: "Lviv"}, \n{name: "Vova", age: 25, city: "Rivne"}\n] ' +
//     '\n const inPersonUsers = [\n{name: "Eva", age: 18, city: "Kyiv"}, \n{name: "Ivan", age: 10, city: "Odessa"}\n]'
//     , (err) =>{
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

const onlineUsers = [
    {name: "Anna", age: 22, city: "Lviv"},
    {name: "Vova", age: 25, city: "Rivne"}
]
const inPersonUsers = [
    {name: "Eva", age: 18, city: "Kyiv"},
    {name: "Ivan", age: 10, city: "Odessa"}
]
//
// fs.writeFile(path.join(__dirname, 'main', 'inPerson','inPerson.txt'),
//     '\nname: "Anna", \nage: 22, \ncity: "Lviv"' +
//     '\n\nname: "Vova", \nage: 25, \ncity: "Rivne"',
//     (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
//
// fs.writeFile(path.join(__dirname, 'main', 'online','online.txt'),
//     '\nname: "Eva", \nage: 18, \ncity: "Kyiv"' +
//     '\n\nname: "Ivan", \nage: 10, \ncity: "Odessa"',
//     (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })

fs.appendFile(path.join(__dirname, 'main', 'inPerson','inPerson.txt'),
    '\nname: "Eva", \nage: 18, \ncity: "Kyiv"' +
    '\n\nname: "Ivan", \nage: 10, \ncity: "Odessa"',
    {flag: 'w'},
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
//
fs.appendFile(path.join(__dirname, 'main', 'online','online.txt'),
    '\nname: "Anna", \nage: 22, \ncity: "Lviv"' +
    '\n\nname: "Vova", \nage: 25, \ncity: "Rivne"',
    {flag: 'w'},
    (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })


