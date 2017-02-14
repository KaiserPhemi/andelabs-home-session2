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
	params	= {screen_name: 'Medium'},
	port	= 9999;


twitter.get('statuses/user_timeline', params, function(error, tweets, response){
	if(!error){
		console.log(tweets);
	}
});


	
/*Gets stream of tweets that contains `medium`*/
twitter.stream('statuses/filter', {track: "medium"}, function(stream){

	stream.on('data', function(data){

		console.log(data.text);
		stream.destroy();
		
	});
	stream.on('error', function(error){
		
		console.log(error);
		stream.destroy();
	});

	
});
