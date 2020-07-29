const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    switch (req.url) {
        case '/':
            fs.readFile('./text.txt', 'utf8', (err, data) => {
                res.end(data);
            })
            break;
        case '/api/test':
            res.end('test');
            break;
    }

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})