var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '275341689298',
    // password: 'Pokemon_1',
    // password: 'K2n4e6w8m10a12n14',
    database: 'SSDI_Project'
  });  

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;