var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// var login = require('./app/controller/login.js');
// var signup = require('./app/controller/signup.js');
const cors=require('cors');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : 'Pokemon_1',
  // password: 'Pokemon_1',
  // password: 'K2n4e6w8m10a12n14',
  database: 'SSDI_Project'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
var app = express();

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(cors())

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/app/controller/login.html'));
});

app.post('/auth', function(request, response) {
	var hospitalId = request.body.hospitalId;
	var password = request.body.password;
	if (hospitalId && password) {
		connection.query('SELECT * FROM hospital_sign_up WHERE hospitalId = ? AND password = ?', [hospitalId, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.hospitalId = hospitalId;
				response.redirect('/home');
			} else {
				response.send('Incorrect hospitalId and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter hospitalId and Password!');
		response.end();
	}
});

app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.hospitalId + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

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
              response.send('Your account has been registered.');
      // response.redirect('/app/controller/login.js');
    }			
    // response.end();
  });
} else {
  response.send('Please enter the details!');
  response.end();
}
});

app.listen(3000);