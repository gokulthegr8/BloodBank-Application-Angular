var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
const cors= require('cors');
var db = require('../../db');
var app = express();

var router = express.Router();

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(cors());

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());


router.post('/auth', function(request, response) {
	var hospitalId = request.body.hospitalId;
	var password = request.body.password;
	if (hospitalId && password) {
		db.query('SELECT * FROM hospital_sign_up WHERE hospitalId = ? AND password = ?', [hospitalId, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.hospitalId = hospitalId;

				response.redirect('/home');
			} else {
				response.status(404);

				response.send('Incorrect hospitalId and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter hospitalId and Password!');
		response.end();
	}
});

router.get('/home', function(request, response) {
	if (request.session.loggedin) {

		response.json('Welcome back, ' + request.session.hospitalId + '!');
	} else {
		response.json('Please login to view this page!');
	}
	response.end();
});

module.exports = router;