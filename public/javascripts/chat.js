(function($){
	// $(function(){
	// });
	$(document).ready(function(){
	    var socket = io.connect('http://localhost:3033');

	    $('#enter').off().on('click', function(e){
	        socket.emit('join', 
	            {'userid': $('#userid').val(), 'roomname': $('#roomname').val()}
	        );
	        $('#log').hide();
	        $('#chat').show();
	    });

	    socket.on('join', function(data){
	        console.log('client join..')
	        $('#txtarea').append('<dd style="margin:0px;">' + data + 'welcome~ </dd>');
	    });

	    $('#btn').off().on('click', function(e){
	        socket.emit('message', $('#txt').val());
	    });

	    socket.on('message', function(data){
	        $('#txtappend').append('<dd style="margin:0px;">' + data + '</dd>');
	        $('#txt').val();
	    });
    });
})(jQuery);