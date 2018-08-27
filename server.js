const http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express')
const path = require('path')
var app = express();
const PORT = process.env.PORT || 5000

app.get('/', function(req, res) {
	res.render('index.html');
});
app.get('/search', function(req, res) {
	res.render('search.html');
});

app.listen(PORT, function() { console.log("Listening on port " + PORT)});