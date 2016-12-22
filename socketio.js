var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/socketio.html');
});

io.on('connection', function(socket){
	console.log('conneted');


	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
	});

	// socket.on('disconnect', function(){
	// 	console.log('disconnected');
	// });
});

http.listen(3001, function(){
	console.log('server listening.... port is 3001')
});