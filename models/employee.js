
// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
	employeeInfo: {
		gender: String,
		name: {
			title: String,
			first: String,
			last: String
		},
		location: {
			street: String,
			city: String,
			state: String,
			postcode: Number
		},
		email: String,
		login: {
			employeename: String,
			password: String,
			salt: String,
			md5: String,
			sha1: String,
			sha256: String
		},
		registered: Number,
		dob: Number,
		phone: String,
		cell: String,
		id: {
	        name: String,
        	value: String
		},
		picture: {
			large: String,
			medium: String,
			thumbnail: String
		},
		nat: String
	}
});

EmployeeSchema.static('findByName', function (name, callback) {
  return this.find( {$or:[ { 'employeeInfo.name.first': name}, {'employeeInfo.name.last': name } ]}, callback);
});


// Return model
module.exports = mongoose.model('Employee', EmployeeSchema);