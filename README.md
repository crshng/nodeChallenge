#Employee Listing API
RESTful JSON API with node, Express, and Mongoose

##Set-up
This API uses express as the node framework, Mongoose as ORM and body-parser to pull POST content from HTTP requests. Here's what the package.json looks like: 
```json
{
  "name": "rest",
  "version": "0.0.0",
  "main": "server.js",
  "dependencies": {
    "body-parser": "^1.15.1",
    "express": "^4.13.4",
    "mongoose": "^4.4.17",
  }
}
```

To start MongoDB and our server on localhost:3000:

`$ mongod`
`$ node server.js`

Navigating to http://localhost:8080/api should display a "This is the employee api" message.

##Routes
| Route        | HTTP Verb           | Function  |
| ------------- |:-------------:| -----:|
| /api/employees| GET | Get all the employees. |
| /api/employees/add     | POST      |   Create an employee. |
| /api/employees/delete/:employee_id | DELETE      |    Delete an employee. |
| /api/employees/edit/:employee_id | PUT      |    Update an existing employee record with new info. |
| /api/employees/search/:name	 | GET      |    Search for employees based on first or last name. |


