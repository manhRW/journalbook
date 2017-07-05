var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.send("My journal book");
});

app.listen(8888, function() {
    console.log('App start at port 8888');
});
