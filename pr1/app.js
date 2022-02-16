// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,
// в вас вийде невеликий callback hell, пізніше я вам покажу як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після
// того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли
// (в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const path = require('path');
const fs = require('fs');

// // 1.
fs.writeFile(path.join(__dirname, 'file.txt'), 'Some information', (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    fs.writeFile(path.join(__dirname, 'anotherFile.txt'), 'Another information', (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
        fs.readFile(path.join(__dirname, 'file.txt'), 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(data);
            fs.appendFile(path.join(__dirname, 'anotherFile.txt'), `\n${data}`, (err1) =>{
                if (err1) {
                    console.log(err1);
                    throw err1;
                }
            })
        })
    });

})

// // 2.
// fs.mkdir(path.join(__dirname, 'task2'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.writeFile(path.join(__dirname, 'task2', 'task2.txt'),
//         'const  users = [' +
//         '\n{\nname: "Kolya", \nage: 20, \nstatus: true\n}, ' +
//         '\n\n{\nname: "Katya", \nage: 18, \nstatus: true\n}, ' +
//         '\n\n{\nname: "Olya", \nage: 25, \nstatus: false\n}, ' +
//         '\n\n{\nname: "Tolya", \nage: 30, \nstatus: true\n}]', (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             fs.mkdir(path.join(__dirname, 'task2', 'task_2'), (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//                 fs.writeFile(path.join(__dirname, 'task2', 'task_2', 'task_2.txt'), 'NEW FILE', (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }
//                     fs.readFile(path.join(__dirname, 'task2', 'task2.txt'), (err, data) => {
//                         if (err) {
//                             console.log(err);
//                             throw err;
//                         }
//                         console.log(data.toString());
//                         fs.appendFile(path.join(__dirname, 'task2', 'task_2', 'task_2.txt'), `\n${data}`, (err) => {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                             fs.unlink(path.join(__dirname, 'task2', 'task2.txt'), (err) => {
//                                 if (err) {
//                                     console.log(err);
//                                     throw err;
//                                 }
//                             })
//                         })
//                     })
//                 });
//             });
//         })
// })

// 3.
 fs.mkdir(path.join(__dirname, 'task3'), (err) => {
     if (err) {
         console.log(err);
         throw err;
     }
     fs.mkdir(path.join(__dirname, 'task3', 'task3.1'), (err) => {
         if (err) {
             console.log(err);
             throw err;
         }
         fs.writeFile(path.join(__dirname, 'task3', 'task3.1', 'task3.1.txt'),
             'const  users = [' +
             '\n{\nname: "Kolya", \nage: 20, \nstatus: true\n}, ' +
             '\n{\nname: "Katya", \nage: 18, \nstatus: true\n}, ' +
             '\n{\nname: "Olya", \nage: 25, \nstatus: false\n}, ' +
             '\n{\nname: "Tolya", \nage: 30, \nstatus: true\n}]',
             (err) => {
                 if (err) {
                     console.log(err);
                     throw err;
                 }
                 fs.mkdir(path.join(__dirname, 'task3', 'public', 'file', 'test'), {recursive: true}, (err) => {
                     if (err) {
                         console.log(err);
                         throw err;
                     }
                     fs.writeFile(path.join(__dirname, 'task3', 'public', 'file', 'test', 'task3.2.txt'),
                         'Завдання на практику\n' +
                         '\n' +
                         '1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл,\n' +
                         'в вас вийде невеликий callback hell, пізніше я вам покажу як можна це обійти, але поки зробіть так\n' +
                         '\n' +
                         '2. Створіть файл ( можете вручну ) заповніть його якимись даними\n' +
                         'Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після\n' +
                         'того як все завершиться. Також вийде callback hell\n' +
                         '\n' +
                         '3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) ) \n' +
                         'і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new',
                         (err) => {
                             if (err) {
                                 console.log(err);
                                 throw err;
                             }
                             fs.mkdir(path.join(__dirname, 'task3', 'privat', 'files', 'info', 'details'), {recursive: true}, (err) => {
                                 if (err) {
                                     throw err;
                                 }
                                 fs.writeFile(path.join(__dirname, 'task3', 'privat', 'files', 'info', 'details', 'task3.3.txt'),
                                     'Some Data', (err) => {
                                         if (err) {
                                             console.log(err);
                                             throw err;
                                         }
                                         fs.writeFile(path.join(__dirname, 'task3', 'file1.txt'), 'Some interesting information 1', (err) => {
                                             if (err) {
                                                 console.log(err);
                                                 throw err;
                                             }
                                             fs.writeFile(path.join(__dirname, 'task3', 'file2.txt'), 'Some interesting information 2', (err) => {
                                                 if (err) {
                                                     console.log(err);
                                                     throw err;
                                                 }
                                                 fs.writeFile(path.join(__dirname, 'task3', 'file3.txt'), 'Some interesting information 3', (err) => {
                                                     if (err) {
                                                         console.log(err);
                                                         throw err;
                                                     }
                                                     fs.readdir(path.join(__dirname, 'task3'), (err, data) => {
                                                         if (err) {
                                                             console.log(err);
                                                             throw err;
                                                         }
                                                         console.log(data);
                                                         data.map(value => {
                                                             fs.stat(path.join(__dirname, 'task3', `${value}`), (err, stats) => {
                                                                 if (err) {
                                                                     console.log(err);
                                                                     throw err;
                                                                 }
                                                                 console.log(stats.isFile());
                                                                 if (stats.isFile() === true) {
                                                                     fs.truncate(path.join(__dirname, 'task3', `${value}`), (err) => {
                                                                         if (err) {
                                                                             console.log(err);
                                                                             throw err;
                                                                         }
                                                                     })
                                                                 }
                                                                 if (stats.isFile() === false) {
                                                                     fs.rename(path.join(__dirname, 'task3', `${value}`),
                                                                         path.join(__dirname, 'task3', `new${value}`), (err) => {
                                                                             if (err) {
                                                                                 console.log(err);
                                                                                 throw err;
                                                                             }
                                                                         })
                                                                 }
                                                             })
                                                         })
                                                     })
                                                 });
                                             });
                                         });
                                     })
                             })
                         })
                 })
             })
     })
 })









