'use strict';
var http = require('http');
var url = require('url');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    var queryData = url.parse(req.url, true).query;
    var username = queryData.username || '';

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Merhaba App</title>');
    res.write('<style>');
    res.write('label { color: darkblue; font-size: 30px; }');
    res.write('body { background-color: lightblue; }');
    res.write('button { margin: 45px; width: 200px; height: 100px; background-color: blue; }');
    res.write('.button-container { display: flex; }'); 
    res.write('</style>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>Merhaba App</h1>');
    res.write('<label for="emptyLabel">Kullanici: ' + username + '</label>');
    res.write('<label for="username">Username:</label>');
    res.write('<input type="text" id="username" name="username">');
    res.write('<label for="password">Password:</label>');
    res.write('<input type="password" id="password" name="password">');
    res.write('</form>');


    res.write('</body>');
    res.write('</html>');
    res.write('<div class="button-container">'); 
    res.write('<button>GIRIS</button>');
    res.write('<button>KAYDOL</button>');
    res.write('</div>');
    res.write('</body>');
    res.write('</html>');



    res.end();
}).listen(port);
