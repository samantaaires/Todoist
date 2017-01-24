var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authorSchema = new Schema({
	'name' : String,
	'age' : Number,
	'email' : String
//	'tasks': [{ type: Schema.Types.ObjectId, ref: 'Tasks' }]
});

module.exports = mongoose.model('author', authorSchema);
