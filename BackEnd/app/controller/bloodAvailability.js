var express = require('express');
var db = require('../../db');
var bodyParser = require('body-parser');

var router = express.Router();

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/bloodavailabilityApos', function(request,response) {
    db.query('SELECT SUM(`Quantity A+`) AS qty FROM `BloodBanks`',(error,result)=>{
      if(error) throw error;
      response.send(result)
    });
});

router.get('/bloodavailabilityAneg', function(request,response) {
   db.query('SELECT SUM(`Quantity A-`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityBpos', function(request,response) {
   db.query('SELECT SUM(`Quantity B+`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityBneg', function(request,response) {
   db.query('SELECT SUM(`Quantity B-`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityOpos', function(request,response) {
   db.query('SELECT SUM(`Quantity O+`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityOneg', function(request,response) {
   db.query('SELECT SUM(`Quantity O-`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityABpos', function(request,response) {
   db.query('SELECT SUM(`Quantity AB+`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.get('/bloodavailabilityABneg', function(request,response) {
   db.query('SELECT SUM(`Quantity AB-`) AS qty FROM `BloodBanks`',(error,result)=>{
     if(error) throw error;
     response.send(result)
   });
});

router.post('/removeBloodAPos', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity A+` = CONCAT(GREATEST(`Quantity A+` - @q, 0), LEFT(@q := @q - LEAST(`Quantity A+`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodANeg', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity A-` = CONCAT(GREATEST(`Quantity A-` - @q, 0), LEFT(@q := @q - LEAST(`Quantity A-`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodBPos', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity B+` = CONCAT(GREATEST(`Quantity B+` - @q, 0), LEFT(@q := @q - LEAST(`Quantity B+`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodBNeg', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity B-` = CONCAT(GREATEST(`Quantity B-` - @q, 0), LEFT(@q := @q - LEAST(`Quantity B-`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodOPos', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity O+` = CONCAT(GREATEST(`Quantity O+` - @q, 0), LEFT(@q := @q - LEAST(`Quantity O+`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodONeg', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity O-` = CONCAT(GREATEST(`Quantity O-` - @q, 0), LEFT(@q := @q - LEAST(`Quantity O-`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodABPos', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity AB+` = CONCAT(GREATEST(`Quantity AB+` - @q, 0), LEFT(@q := @q - LEAST(`Quantity AB+`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});
router.post('/removeBloodABNeg', function(request,response){
  var removeQty = request.body.removeQty;
 
  db.query('SET @q = ?',[removeQty],(error,result)=>{

  db.query('UPDATE `BloodBanks` SET `Quantity AB-` = CONCAT(GREATEST(`Quantity AB-` - @q, 0), LEFT(@q := @q - LEAST(`Quantity AB-`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("Blood Quantity has been updated successfully");
  });
});
});

router.post('/placeOrder',function(request,response){
  var hospitalId = request.body.hospitalId;
  var BloodGroup = request.body.BloodGroup;
  var qty = request.body.qty;
  var urgency= request.body.urgency;

db.query('INSERT INTO `ordersNew` (`HospitalID`,`BloodGroup`,`Quantity`,`Urgency`) VALUES (?,?,?,?)',[hospitalId,BloodGroup,qty,urgency],(error1,result1)=>{
response.json("Done");

});
});

module.exports = router;