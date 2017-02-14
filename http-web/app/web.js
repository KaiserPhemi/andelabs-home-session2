#!/usr/bin/env node

'use strict';

/*Dependencies declared*/
var Twitter = require('twitter');

var	twitter = new Twitter({

	consumer_key: '1gqEQ4G3PvK5CBj3x8CIpzco1',
	consumer_secret: 'RG2v0iPqzbP3Cq7TkI7aXqxN183ukv1RDr4FIYLgOk1auP9Z1C',
	access_token_key: '193801906-0ivR0wFI4HIXLgKHFDYPQP0alpKt6Ij7vM7N7hDf',
	access_token_secret: 'JctSzBBR71ODjLHXui9xqHstMMnxj5yrIdfl1H4m10ywZ'
	}),
	express	= require('express'),
	util   	= require('util'),
	app		= express(),
	port	= 9999;

app.listen(port, function(){

		console.log("We are live on port "+ port);
	});


	
/*Gets stream of tweets that contains `medium`*/
twitter.stream('filter', {track: "medium"}, function(stream){

	stream.on('data', function(data){

		console.log(util.inspect(data));
		stream.destroy();
		process.exit(0);
	});
});
