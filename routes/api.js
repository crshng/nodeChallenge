// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Employee = require('../models/employee');

// Routes
router.get('/', function(req, res) {
    res.json({ message: 'This is the employee api' });   
});

//GET LIST OF EMPLOYEES
router.route('/employees')
    .get(function(req, res) {
        Employee.find(function(err, employees) {
            if (err)
                res.send(err);

            res.json(employees);
        });
    });

//CREATE NEW EMPLOYEE RECORD
router.route('/employees/add')
	.post(function(req, res) {
        var employee = new Employee();
		employee.employeeInfo = req.body;

        employee.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Employee added', employee: req.body });
        });
        
    });

//DELETE EMPLOYEE
router.route('/employees/delete/:employee_id')
    .delete(function(req, res) {
        Employee.remove({
            _id: req.params.employee_id
        }, function(err, employee) {
            if (err)
                res.send(err);

            res.json({ message: 'Employee deleted' });
        });
    });

//EDIT EXISTING EMPLOYEE RECORD
router.route('/employees/edit/:employee_id')
	.put(function(req, res) {
        Employee.findById(req.params.employee_id, function(err, employee) {

            if (err)
                res.send(err);

            employee.employeeInfo = req.body;

            employee.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Employee updated' });
            });

        });
    });

//SEARCH FOR EMPLOYEE BY FIRST OR LAST NAME
router.route('/employees/search/:name')
	.get(function(req, res) {
	    Employee.findByName(req.params.name, function(err, employee) {
            if (err)
                res.send(err);
            res.json(employee);
        });
    });



//RETURN ROUTER
module.exports = router;