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

module.exports = router;