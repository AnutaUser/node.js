const {test} = require('./test/helper');
//
// test();
//
// console.log(__dirname, "appDirname");
// console.log(__filename, 'appFilename');
// console.log(process.cwd(), 'app_process');
//
// require('./test/helper');
// console.log(name);

const path = require('path');
//
// const joinedPath = path.join('tes', 'test2', 'file', 'text.txt');
// const joinedPath2 = path.join(__dirname,'tes', 'test2', 'file', 'text.txt');
//
// console.log(joinedPath);
// console.log(joinedPath2);
//
// const normalizedPath = path.normalize('sdf/\\jkm,nm/ghj////ghj.txt');
//
// console.log(normalizedPath, 'normalize');
//
// const resolvedPath = path.resolve('sdf/\\;jkm,nm/ghj////ghj.txt');
//
// console.log(resolvedPath, 'resolve');

const os = require('os');
//
// console.log(os.cpus());
// console.log(os.cpus().length);
//
// console.log(os.arch());

const fs = require('fs');

// fs.writeFileSync(path.join(__dirname, 'test', 'file.txt'), 'Some Data');

// fs.writeFile(path.join(__dirname, 'test', 'AnotherFile.txt'), 'Another Data', (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }))

// fs.readFile(path.join(__dirname, 'test', 'AnotherFile.txt'), 'utf8',(err, data) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     console.log(data);
// })

// fs.appendFile(path.join(__dirname, 'test', 'file.txt'), '\nname: Vasya \n age: 25', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// for (let i = 0; i < 100; i++) {
//     fs.appendFile(path.join(__dirname, 'test', 'file.txt'), '\nname: Vasya \n age: 25', (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })
// }

// for (let i = 0; i < 10; i++) {
//     fs.appendFile(path.join(__dirname, 'test', 'file.txt'), '\nname: Vasya \n age: 25', {flag: 'a'},(err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }

// fs.truncate(path.join(__dirname, 'test', 'file.txt'), (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }))

// fs.unlink(path.join(__dirname, 'test', 'AnotherFile.txt'), (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }))

// fs.mkdir(path.join(__dirname, 'public'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// }))

// fs.mkdir(path.join(__dirname, 'users', 'files', 'test', 'test2'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.rmdir(path.join(__dirname, 'public'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

// fs.rmdir(path.join(__dirname, 'users', 'files', 'test'), (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
// })

fs.readdir(path.join(__dirname,'test'), (err, data) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(data)
})