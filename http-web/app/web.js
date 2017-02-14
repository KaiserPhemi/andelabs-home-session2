#!/usr/bin/env node

(function(){

	'use strict';

	const express 		= require('express');
	const MongoClient  	= require('mongodb').MongoClient;
	const bodyParser	= require('body-parser');

	const app			= express();

	const port 			= 9999;

	app.listen(port, function(){
		console.log("We are live on "+ port);
	});

})();