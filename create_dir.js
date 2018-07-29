var fs = require('fs');

// fs.mkdirSync('tasks');
// fs.rmdirSync('tasks');
fs.mkdir('tasks', () => {
    fs.readFile('readMe.txt', 'utf8', (err, data) => {
        if ( err ) {
            throw err;
        }
        fs.writeFile('./tasks/task1.txt', data, (err) => {
            if (err){
                throw err;
            }
            console.log('File has be written.');
        });
    });  
});

