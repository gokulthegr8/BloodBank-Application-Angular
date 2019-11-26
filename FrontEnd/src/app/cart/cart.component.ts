import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import {DatabaseService} from '../database.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public bloodqty=localStorage.getItem("qty");
public BloodGroup=localStorage.getItem("cart");
public HospitalID=localStorage.getItem("HospitalID");
bldqty={removeQty:this.bloodqty}
public urgency1="Very Urgent";
public urgency2="Urgent";
public urgency3="Not Urgent";
order1={hospitalId:this.HospitalID,BloodGroup:this.BloodGroup,qty:this.bloodqty,urgency:this.urgency1}
order2={hospitalId:this.HospitalID,BloodGroup:this.BloodGroup,qty:this.bloodqty,urgency:this.urgency2}
order3={hospitalId:this.HospitalID,BloodGroup:this.BloodGroup,qty:this.bloodqty,urgency:this.urgency3}

public dbqty=localStorage.getItem("dbqty");
public quantity=false;


  constructor(private customer:CustomerService,private router:Router,private auth: DatabaseService) { }

  ngOnInit() {
  }
  completeOrder(){
  //  if((document.getElementById("qty") as HTMLInputElement).value){
    console.log("Value is"+(document.getElementById("qty") as HTMLInputElement).value)
    
    if((document.getElementById("qty") as HTMLInputElement).value!=""&&(document.getElementById("qty") as HTMLInputElement).value!="0"){
      // this.quantity=true;
      
  if((document.getElementById("urgency1") as HTMLInputElement).checked||(document.getElementById("urgency2") as HTMLInputElement).checked||(document.getElementById("urgency3") as HTMLInputElement).checked){
    //  var confirm=confirm("Are you sure you want to place the order?");
    console.log("inside if")
   
    if(confirm("Are you sure you want to place the order?")){
      console.log("qty is" +this.bloodqty)
// this.auth.removeBloodQty(this.bloodqty)
// .subscribe(
//   r => {
    
//     alert("The order has been placed successfully")
//       this.removeCart();
//       this.router.navigateByUrl('/dashboard');

//   },
//   r => {
//     alert("fail");
//   });
this.placeOrder();
this.removeBloodFromDB();
      // alert("The order has been placed successfully")
      // this.removeCart();
    }
   
  }
  else{
     
    alert("Please select the level of urgency");
  }}
// }

  else{
     
    alert("Please enter the blood quantity");
  }
  
}
logout(){
  this.customer.deleteToken();
  localStorage.removeItem("HospitalID");
  this.router.navigateByUrl('/homepage');
}
removeCart(){
  localStorage.removeItem("cart");
  localStorage.removeItem("qty");
  localStorage.removeItem("dbqty");

}
removeBloodCart(){
  this.removeCart();
  if(confirm("Are you sure you want to remove the blood group from the cart?"))
  {
  alert("Removed the blood group from cart successfully")
  this.router.navigateByUrl('/dashboard');
  }
}
updateBloodQty(){


  var getBloodVal=(document.getElementById("qty") as HTMLInputElement).value;
  // this.newblood=[localStorage.getItem("dbqty")];
  // if(Number(document.getElementById("qty") as HTMLInputElement)<=Number(localStorage.getItem("dbqty"))){
    if(Number(getBloodVal)<=Number(this.dbqty)){

  
    var finalquant:number= Number(((document.getElementById("qty") as HTMLInputElement).value))
    localStorage.setItem("qty",finalquant.toString());
      if(finalquant!=0){
    alert("Blood quantity updated successfully")
      }
if(finalquant==0){

  this.removeBloodCart();

}}
else{
  alert("Entered quantity is greater than available quantity")
}
  
}
removeBloodFromDB(){
  if(this.BloodGroup=="A+"){
  this.auth.removeBloodQtyAPos(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="A-"){
  this.auth.removeBloodQtyANeg(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="B+"){
  this.auth.removeBloodQtyBPos(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="B-"){
  this.auth.removeBloodQtyBNeg(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="O+"){
  this.auth.removeBloodQtyOPos(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="O-"){
  this.auth.removeBloodQtyONeg(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="AB+"){
  this.auth.removeBloodQtyABPos(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
if(this.BloodGroup=="AB-"){
  this.auth.removeBloodQtyABNeg(this.bldqty)
.subscribe(
  r => {
    
    alert("The order has been placed successfully")
      this.removeCart();
      this.router.navigateByUrl('/dashboard');
  },
  r => {
    alert("fail");
  });
}
}
placeOrder(){
  if((document.getElementById("urgency1") as HTMLInputElement).checked){
  this.auth.PlaceOrder(this.order1)
  .subscribe(
    r => {


});
}
if((document.getElementById("urgency2") as HTMLInputElement).checked){
  this.auth.PlaceOrder(this.order2)
  .subscribe(
    r => {


});
}
if((document.getElementById("urgency3") as HTMLInputElement).checked){
  this.auth.PlaceOrder(this.order3)
  .subscribe(
    r => {


});
}
}
Cart(){
 
  this.router.navigateByUrl('/cart');
}
}
