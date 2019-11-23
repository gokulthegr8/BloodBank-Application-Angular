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

router.post('/removeBlood', function(request,response){
  var removeQty = request.body.removeQty;
  db.query('SET @q = ?',[removeQty],(error1,result1)=>{
  db.query('UPDATE `BloodBanks` SET `Quantity A+` = CONCAT(GREATEST(`Quantity A+` - @q, 0), LEFT(@q := @q - LEAST(`Quantity A+`, @q), 0)) ORDER BY id',(error1,result1)=>{

 
    response.json("abc");
  });
});
//   db.query('SELECT * FROM `BloodBanks`',(error2,result2)=>{
//     var i=1;
//   while(i<=result2.length){

//     db.query('SELECT * FROM `BloodBanks` WHERE id=? &&?<=`Quantity A+`',[i,removeQty],(error1,result1)=>{
//       if(result1.length>0){ 
//     db.query('UPDATE `BloodBanks` SET `Quantity A+`=`Quantity A+`-?  WHERE id=?',[removeQty,i],(error,result)=>{
//       // response.send("blood bank updated number: "+i);

// });
//       }
//     });
//     i++;
    

//   }
//   response.send("blood bank updated number: "+i);

//     //   else{
//     //     db.query('UPDATE `BloodBanks` SET `Quantity A+`=`Quantity A+`-?  WHERE id=2',[removeQty],(error,result)=>{
//     //       response.send("blood bank 2 updated");
//     // });
//     //   }
// });
});
router.post('/placeOrder',function(request,response){
  var hospitalId = request.body.hospitalId;
  var BloodGroup = request.body.BloodGroup;
  var qty = request.body.qty;

db.query('INSERT INTO `orders` (`HospitalID`,`BloodGroup`,`Quantity`) VALUES (?,?,?)',[hospitalId,BloodGroup,qty],(error1,result1)=>{
response.json("Done");

});
});
module.exports = router;