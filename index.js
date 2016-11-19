var express = require('express');

var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer(); 

var app = express();

app.set('view engine', 'ejs');
app.set('views','./views');

var things = require('./things.js');

db = require('./model/db');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//app.use(upload.array()); // for parsing multipart/form-data

app.use(express.static('public'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));


// Make our db accessible to our router
/*app.use(function(req,res,next){
    req.db = db;
    next();
});*/

//Simple request time logger
app.use('/hotel', function(req, res, next){
	console.log("A new request received at " + Date.now());
	//This function call is very important. It tells that more processing is 
	//required for the current request and is in the next middleware function/route handler.
	next();
});

app.get('/jaja', function(req, res, next){
	var mongoose = require('mongoose');
	var Speaker = mongoose.model('Speaker');
	Speaker.find({shortname: "Riley_Rewington"}, 
	    function(err, response){
	    	res.json(response);
	    	console.log(response[0].title);
	});
});

//both index.js and things.js should be in same directory
app.use('/', things); 

app.listen(3001, function() {
  console.log('Servidor funcionando en http://localhost:3001');
});