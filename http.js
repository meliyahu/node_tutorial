var http = require('http');
var count = 0;
var server = http.createServer(((req, res) => {
    console.log(`Handling request from url ${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    count++;
    res.end(`Hello there ${count}`);
}));

let port = process.env.PORT;
let listePort = port || 3000;
server.listen(listePort, '127.0.0.1', () => {
    console.log(`Server listening on port ${listePort}`);
})
