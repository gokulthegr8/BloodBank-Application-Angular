var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'Pokemon_1',
	database : 'SSDI_Project'
});

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/signup', function(request,response) {
    var hospitalName = request.body.hospitalName;
    var address = request.body.address;
    var city = request.body.city;
	var state = request.body.state;    
	var zipcode = request.body.zipcode; 
    var hospitalId = request.body.hospitalId;
	var password = request.body.password;
	if (hospitalName && hospitalId && password) {
        
        connection.query('INSERT INTO hospital_sign_up (`hospitalName`,`address`,`city`,`state`,`zipcode`, `hospitalId`, `password`) VALUES (?,?,?,?,?,?,?)',
         [hospitalName,address,city,state,zipcode,hospitalId, password], function(error, results, fields) {
			if (results > 0) {
                response.send('Incorrect details!');
			} else {
                response.send('Your account has been registered.')
				response.redirect('/login.js');
			}			
			response.end();
		});
	} else {
		response.send('Please enter the details!');
		response.end();
	}
});

