'use strict';

/*Dependencies*/
var express		= require('express'),
	mongoose	= require('mongoose'),
	bodyParser	= require('body-parser'),
	Twitter		= require('twitter'),
	port		= 9999;

/*Express*/
var app	= express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response){

	response.send("Look mum, it's working");

});

/*Starts server*/
app.listen(port, function(){
	console.log("We are live on port "+ port);
});