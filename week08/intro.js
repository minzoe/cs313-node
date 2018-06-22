const http = require('http');
const url = require('url');

var requestListener = function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname === '/home') {
        res.writeHead(200);
        res.end('<h1>Welcome to the homepage</h1>');
    } else if (pathname === '/getData') {
        var obj = {
            "name": "Zoe Miner",
            "class": "cs313"
        };
        var json = JSON.stringify(obj);
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end(json);
    } else {
        res.writeHead(404);
        res.end('Page Not Found');
    }
}

var server = http.createServer(requestListener);
server.listen(8888);
