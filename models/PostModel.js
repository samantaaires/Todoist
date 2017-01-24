var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PostSchema = new Schema({
	"title": String,
    "postedBy": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    "comments": [{
        text: String,
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
});

module.exports = mongoose.model('Post', PostSchema);
