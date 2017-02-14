'use strict';

	var express 		= require('express');
	var app			= express();

	var port 			= 9999;

	app.get('/', function(request, response){

		response.send("Look mum, it's working");

	});

	app.listen(port, function(){
		console.log("We are live on port "+ port);
	});