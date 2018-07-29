var fs = require('fs');

fs.unlink('writeMe.txt', (err) => {
    if (err){
        console.log('Error deleting file writeMe.txt. ' + err);
    } else {
        console.log('writeMe.txt file was deleted');
    }
});
fs.unlink('writeMe2.txt', (err) => {
    if (err) {
        console.log('Error deleting writeMe2.txt');
    }else {
        console.log('writeMe2.txt was deleted.');
    }
});