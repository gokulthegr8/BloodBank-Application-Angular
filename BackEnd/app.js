var express = require('express');
var mysql = require('mysql');
var app = express();
const router=express.Router();


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pokemon_1',
  // password: 'K2n4e6w8m10a12n14',
  database: 'SSDI_Project'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next()
});
app.get('/', function(req,res) {
    con.query('SELECT * FROM HospitalInfo;', function (err, result) {
        if (err) throw err;
        res.status(200).send(JSON.stringify({ Data: result, status: "success" }));
    });
})
app.use('/',router);
app.listen(3000);