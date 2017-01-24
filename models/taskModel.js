var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
	'title' : String,
	'content' : String,
	'taskStatus' : { type: String, "default": 'todo' },
	'taskList' : { type : Array , "default" : [] },
	'postedBy': {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'author'
    }




	//array --> dar update no array para adicionar novos campos
});

module.exports = mongoose.model('task', taskSchema);
