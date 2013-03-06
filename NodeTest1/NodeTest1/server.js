/// <reference path="./nodelib/node.js"/>

var url = require('url'),
    path = require('path'),
    http = require('http')
        .createServer(function (request, response) {
            var dest = url.parse(request.url).pathname;
            console.log('url [' + dest + '] requested');
            response.writeHead(200, { 'Content-Type': 'text/html' });
            var input = JSON.stringify(require('url').parse(request.url,true).query);
            response.end(input);
        }).listen(8080);