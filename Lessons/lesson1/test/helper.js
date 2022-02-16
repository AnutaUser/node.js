function test() {
    console.log(__dirname, "helperDirname");
    console.log(__filename, 'helperFilename');
    console.log(process.cwd(), 'helper_process');
}

module.exports = {test}

global.name = 'Vetal';
console.log(global.name);
console.log(name);