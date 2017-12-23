var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
	phone: String,
	pwd: String
});
module.exports = UserSchema;