var fs = require('fs');

// Synchronise - blocks
// var readMe = fs.readFileSync('readMe.txt', 'utf8');// blocks
// fs.writeFileSync('writeMe.txt', readMe);

// Async - does not block
fs.readFile('readMe.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    // console.log(data);
    fs.writeFile('writeMe2.txt', data, (err) => {
        if( err ){
            throw err;
        }
        console.log('File was written succesfully.');
    })
});
console.log('Ha, ha I was here first!!');