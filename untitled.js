var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var fs = require('fs');

var app = express();
app.set('port', 3033);

app.get('/', function(req, res){


	fs.readFile(__dirname + '/views/chat.html', function(error, data){
	res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data);
	});
});

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening..');
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
	socket.on('join', function(data){
		console.log(data);
	});

	socket.on('message', function(data){
		console.log(data);
	});
});