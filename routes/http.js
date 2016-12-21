'use strict';

var express = require('express');
var http = require('http');

var router = express.Router();

router.get('/clientRequest', function(req, res, next){
	var options = {
		host: 'www.naver.com',
		// host: 'www.whatap.io',
		path: '/',
		port: '80',
		method: 'GET'
	};

	var callback = function(response){
		var str = '';
		response.on('data', function(chunk){
			str += chunk;
		});
		response.on('end', function(){
			console.log(str);
		});
	};	

	http.request(options, callback).end();
});

module.exports = router;
