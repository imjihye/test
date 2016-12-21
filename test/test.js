var app = require('../app.js');
var request = require('supertest')(app);
var faker = require('faker');

describe.skip('users', function(){
	describe('users rest call', function(){
		it('get', function(){
			request
			.get('/users/get')
			.query({limit: 1})
			.expect(function(res){
				console.log(res.body)
			})
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});

		it('post', function(){
			request
			.post('/users/post')
			.send({name: 'Adolf Kertzmann'})
			.expect(function(res){
				console.log(res.body)
			})
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});


		it('put', function(){
			request
			.put('/users/put')
			.send({
			 	name : faker.name.findName(),
			 	email : faker.internet.email(),
			 	phoneNumber: faker.phone.phoneNumber(),
			 	ip: faker.internet.ip(),
			 	city: faker.address.city(),
			 	company: faker.company.companyName(),
			 	food: faker.image.food(),
			 	date: faker.date.past(),
			})
			.expect(function(res){
				console.log(res.body)
			})
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});


		it('delete', function(){
			request
			.delete('/users/delete')
			.send({
			 	name : 'test'
			})
			.expect(function(res){
				console.log(res.body)
			})
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});
	});
});




describe('stream', function(){
	describe('stream lib test', function(){
		it('readable', function(){
			request
			.get('/stream/readable')
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});

		it('writeable', function(){
			request
			.get('/stream/writeable')
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});


		it.only('duplex', function(){
			request
			.get('/stream/duplex')
			.expect(200, function(err, data){
				if(err) console.log(err);
			});
		});
	});
});
