var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var taskSchema = new Schema({
	'title' : String,
	'content' : String
});

module.exports = mongoose.model('task', taskSchema);
