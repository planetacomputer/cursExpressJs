var mongoose = require('mongoose');  

exports.speakerByShortname = function (sname, callback){


	var Speaker = mongoose.model('Speaker');

	Speaker.find({shortname: sname}, function(err, speakers) {
	    if (err) {
	      console.log(err);
	    } else {
	      console.log(speakers);
	      callback("", speakers);
	    }
  	});

};//ends exports speakerByShortname