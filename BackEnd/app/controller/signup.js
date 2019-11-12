var express = require('express');
var db = require('../../db');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.post('/checkHospitalID', function(request, response) {
	var hospitalId = request.body.hospitalId;
	var boolean=false;
	if (hospitalId) {
		db.query('SELECT * FROM hospital_sign_up WHERE hospitalId = ?', [hospitalId], function(error, results, fields) {
			if (results.length > 0) {
				response.status(404);
				response.send('HospitalID already exists in the database')
			
				// response.redirect('/home');

			} else {
				boolean=true;
				response.redirect('/home');

				// response.send('HospitalID not present in the database');
			}			
			response.end();
		});
	} 
});
router.get('/home', function(request, response) {
	if (boolean) {
		response.json('Hospital ID is correct');
	} else {
		response.json('Hospital ID incorrect');
	}
	response.end();
});
router.post('/signup', function(request,response) {
    var hospitalName = request.body.hospitalName;
    var address = request.body.address;
    var city = request.body.city;
	var state = request.body.state;    
	var zipcode = request.body.zipcode; 
    var hospitalId = request.body.hospitalId;
	var password = request.body.password;
	if (hospitalName && hospitalId && password) {
        db.query('INSERT INTO hospital_sign_up (`hospitalName`,`address`,`city`,`state`,`zipcode`, `hospitalId`, `password`) VALUES (?,?,?,?,?,?,?)',
         [hospitalName,address,city,state,zipcode,hospitalId, password], function(error, results, fields) {
			if (results > 0) {
                response.json('Incorrect details!');
			} else {
                response.json('Your account has been registered.')
				// response.redirect('/login.js');
			}			
			response.end();
		});
	} else {
		response.json('Please enter the details!');
		response.end();
	}
	
});


module.exports = router;
