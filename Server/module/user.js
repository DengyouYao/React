var mongoose = require('mongoose');
var userSchema = require('../schema/user');
var User = mongoose.model('users2', userSchema);
module.exports = User;