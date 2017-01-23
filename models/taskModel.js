var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
	'title' : String,
	'content' : String,
	'taskStatus' : { type: String, "default": 'todo' },
	'taskList' : { type : Array , "default" : [] },
	'date': { type: Date, default: Date.now }




	//array --> dar update no array para adicionar novos campos
});

module.exports = mongoose.model('task', taskSchema);
