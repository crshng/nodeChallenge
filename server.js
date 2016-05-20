var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// MongoDb
mongoose.connect('mongodb://localhost/myapp');


// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

var Employee = require('./models/employee');

// Start server
app.listen(3000);
console.log('API is running on port 3000');