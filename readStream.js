var http = require('http');
var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/stream.txt', 'utf8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeStream.txt');
// myReadStream.on('data', (chunk) => {
//     console.log('New chunck recieved');
//     // console.log(chunk)
//     myWriteStream.write(chunk);
// })
// OR
// myReadStream.pipe(myWriteStream);


// Send file to client
var server = http.createServer(((req, res) => {
    console.log(`Handling request from url ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/stream.txt', 'utf8');
    myReadStream.pipe(res)
}));

let port = process.env.PORT;
let listePort = port || 3000;
server.listen(listePort, '127.0.0.1', () => {
    console.log(`Server listening on port ${listePort}`);
})
