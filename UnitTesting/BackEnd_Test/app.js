var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var app = express();
var loginController = require('./app/controller/login');
var signupController = require('./app/controller/signup');
var bloodAvailabilityController = require('./app/controller/bloodAvailability');
const cors=require('cors');

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
app.use(cors())

db.query('CREATE TABLE IF NOT EXISTS hospital_sign_up(`id` int(10) NOT NULL primary key AUTO_INCREMENT,`hospitalName` varchar(50) NOT NULL,`address` varchar(100) NOT NULL,`city` varchar(25) NOT NULL,`state` varchar(25) NOT NULL,`zipcode` int(7) NOT NULL,`hospitalId` int(15) NOT NULL UNIQUE,`password` varchar(255) NOT NULL)');
// db.query('CREATE TABLE IF NOT EXISTS `hospital_sign_in` (`id` int(10) NOT NULL,`hospitalId` int(15) NOT NULL,`password` varchar(255) NOT NULL)')
db.query('CREATE TABLE IF NOT EXISTS ordersNew (OrderID int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,HospitalID int(11) NOT NULL,BloodGroup varchar(255) NOT NULL,Quantity int(11) NOT NULL,Urgency varchar(255) NOT NULL)');
db.query('CREATE TABLE IF NOT EXISTS `BloodBanks` (`id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,`BloodBankName` varchar(255) NOT NULL,`Quantity A+` int(15) NOT NULL,`Quantity A-` int(15) NOT NULL,`Quantity B+` int(15) NOT NULL,`Quantity B-` int(15) NOT NULL,`Quantity O+` int(15) NOT NULL,`Quantity O-` int(15) NOT NULL,`Quantity AB+` int(15) NOT NULL,`Quantity AB-` int(15) NOT NULL)');
db.query('INSERT INTO `BloodBanks` (`BloodBankName`,`Quantity A+`,`Quantity A-`,`Quantity B+`,`Quantity B-`, `Quantity O+`, `Quantity O-`,`Quantity AB+`,`Quantity AB-`) VALUES ("Charlotte Public Blood Bank",1000,500,1200,800, 300, 100,600,200)');
db.query('INSERT INTO `BloodBanks` (`BloodBankName`,`Quantity A+`,`Quantity A-`,`Quantity B+`,`Quantity B-`, `Quantity O+`, `Quantity O-`,`Quantity AB+`,`Quantity AB-`) VALUES ("Private Blood Bank 1",1000,500,1200,800, 300, 100,600,200);');
db.query('INSERT INTO `hospital_sign_up` (`hospitalName`,`address`,`city`,`state`,`zipcode`, `hospitalId`, `password`) VALUES ("National Honor Roll","Duke University","Duke","North Carolina",28242, 123, "aaa")');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post('/auth',loginController);
app.post('/signup',signupController);
app.get('/home',loginController);
app.get('/bloodavailabilityApos',bloodAvailabilityController);
app.get('/bloodavailabilityAneg',bloodAvailabilityController);
app.get('/bloodavailabilityBpos',bloodAvailabilityController);
app.get('/bloodavailabilityBneg',bloodAvailabilityController);
app.get('/bloodavailabilityOpos',bloodAvailabilityController);
app.get('/bloodavailabilityOneg',bloodAvailabilityController);
app.get('/bloodavailabilityABpos',bloodAvailabilityController);
app.get('/bloodavailabilityABneg',bloodAvailabilityController);
app.post('/checkHospitalID',signupController);
app.get('/home',signupController);
app.post('/removeBloodAPos',bloodAvailabilityController);
app.post('/removeBloodANeg',bloodAvailabilityController);
app.post('/removeBloodBPos',bloodAvailabilityController);
app.post('/removeBloodBNeg',bloodAvailabilityController);
app.post('/removeBloodOPos',bloodAvailabilityController);
app.post('/removeBloodONeg',bloodAvailabilityController);
app.post('/removeBloodABPos',bloodAvailabilityController);
app.post('/removeBloodABNeg',bloodAvailabilityController);

app.post('/placeOrder',bloodAvailabilityController);

app.listen(4000);
//abc