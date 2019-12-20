// File: ./models/amodel.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AModelSchema = new Schema({
    a_string          : String,
    a_date            : Date,
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('AModel', AModelSchema );