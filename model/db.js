var mongoose = require('mongoose');
//mongoose.connect('mongodb://geronimost:david69@mongodb-geronimost.alwaysdata.net/geronimost_mongdb1');
//mongoose.connect('mongodb://pakitochen:111aaa@ds029565.mlab.com:29565/prueba');


var speakerSchema = mongoose.Schema({
	title: String,
	name: String,
    shortname: String,
    summary: String,
    description: String,
    artwork: Array
});

mongoose.model('Speaker', speakerSchema); 

var db = mongoose.connect('mongodb://localhost/test');