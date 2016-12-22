var express = require('express');
var socketio = require('socket.io');
var http = require('http');
var fs = require('fs');
var path = require('path');


var app = express();
app.set('port', 3033);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.render('chat.hbs');

	// res.sendFile(__dirname + '/views/socketio.html');

	// fs.readFile(__dirname + '/views/chat.html', function(error, data){
	// 	res.writeHead(200, { 'Content-Type': 'text/html' });
	// 	res.end(data);
	// });
});

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('express server listening on port: ' + app.get('port'));
});

var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
	socket.on('join', function(data){
		socket.join(data.roomname);
		socket.set('room', data.rooname);
		socket.get('room', function(error, room){
			io.sockets.in(room).emit('join', data.userid);
		});
	});

	socket.on('message', function(message){
		console.log(message)
	});
});