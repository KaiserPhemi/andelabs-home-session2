'use strict';

	var express		= require('express'),
		mongoose	= require('mongoose'),
		bodyParser	= require('body-parser'),
		twitter		= require('twitter'),
		app			= express(),
		port		= 9999;

	app.use(bodyParser.urlencoded({extended : true}));
	app.use(bodyParser.json());

	app.get('/', function(request, response){

		response.send("Look mum, it's working");

	});

	app.listen(port, function(){
		console.log("We are live on port "+ port);
	});