var mongoose = require('mongoose');
var hospital = require('./login');
var Schema = mongoose.Schema;

var hospital = new Schema({
    hospitalId: String,
    password: String
});
