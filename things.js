var express = require('express');
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

router.get('/hello', function(req, res){
	res.send("Hello World!");
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

router.get('*', function(req, res){
    res.send('Lo siento, no has acertado.');
});

//export this router to use in our index.js
module.exports = router;