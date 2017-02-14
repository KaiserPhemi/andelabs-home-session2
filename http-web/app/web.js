#!/usr/bin/env node

'use strict';

var Twitter = require('twitter'),
	twitter = new Twitter({

	consumer_key: '1gqEQ4G3PvK5CBj3x8CIpzco1',
	consumer_secret: 'RG2v0iPqzbP3Cq7TkI7aXqxN183ukv1RDr4FIYLgOk1auP9Z1C',
	access_token_key: '193801906-0ivR0wFI4HIXLgKHFDYPQP0alpKt6Ij7vM7N7hDf',
	access_token_secret: 'JctSzBBR71ODjLHXui9xqHstMMnxj5yrIdfl1H4m10ywZ'
});

var count 	= 0,
	util   	= require('util');

twitter.stream('filter', {track: "medium"}, function(stream){

	stream.on('data', function(data){

		console.log(util.inspect(data));
		console.log("\n\n"+data);
		stream.destroy();
		process.exit(0);
	});
});
