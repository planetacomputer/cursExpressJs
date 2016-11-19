var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/', function(req, res) {
	var drinks = [
	    { name: 'Bloody Mary', drunkness: 3 },
	    { name: 'Martini', drunkness: 5 },
	    { name: 'Scotch', drunkness: 10 }
	];
  	res.render('home', {
        name: "TutorialsPoint", 
        url:"http://www.tutorialspoint.com",
        drinks: drinks
  	});
});

router.get('/contacto', function(req, res){
	res.render('form.ejs');
});

router.post('/contacto', function(req, res){
	console.log(req.body);
	console.log(req.body.say);
    res.send("recieved your request!");
});

router.get('/speaker/:shortname', function(req, res){
    var db = req.db;
    var speaker = require('./model/speakers');
    speaker.speakerByShortname(req.params.shortname, function(err, speakers) {
        //console.log(speakers);
        res.send(speakers);
    });
});

router.post('/hello', function(req, res){
	res.send("You just called the post method at '/hello'!\n");
});

router.get('/bienvenido/:nombre', function(req, res) {
  res.send('Bienvenido!! ' + req.params.nombre + '!!');
});

router.get('/hotel/:id', function(req, res){
	//Obtengo datos del Hotel id en BBDD
    res.send('El hotel ' + req.params.id + ' tiene estas caractersticas...' );
});

router.get('/things/:id([0-9]{5})', function(req, res){
    res.send('id: ' + req.params.id);
});

router.get('/person', function(req, res){
    res.render('person.ejs');
});

router.get('*', function(req, res){
    res.send('Lo siento, no has acertado.');
});

router.post('/person', function(req, res){
	/*var personSchema = mongoose.Schema({
	    name: String,
	    age: Number,
	    nationality: String
	});
	var Person = mongoose.model("Person", personSchema);*/
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo.name);
    res.render('show_message', {message: "New person added", type: "success", person: personInfo});
    /*if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message', {message: "Sorry, you provided worng info", type: "error"});
    }
    else{
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });
        newPerson.save(function(err, respuesta){
            if(err)
                res.render('show_message', {message: "Database error", type: "error"});
            else
                res.render('show_message', {message: "New person added", type: "success", person: personInfo});
        });
    }*/
});

//export this router to use in our index.js
module.exports = router;