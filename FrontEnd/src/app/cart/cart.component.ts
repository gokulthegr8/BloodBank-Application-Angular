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
order={hospitalId:this.HospitalID,BloodGroup:this.BloodGroup,qty:this.bloodqty}
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
  this.router.navigateByUrl('/dashboard');

}
updateBloodQty(){


  var getBloodVal=(document.getElementById("qty") as HTMLInputElement).value;
  // this.newblood=[localStorage.getItem("dbqty")];
  // if(Number(document.getElementById("qty") as HTMLInputElement)<=Number(localStorage.getItem("dbqty"))){
    if(Number(getBloodVal)<=Number(this.dbqty)){

  
    var finalquant:number= Number(((document.getElementById("qty") as HTMLInputElement).value))
    localStorage.setItem("qty",finalquant.toString());

    alert("Blood quantity updated successfully")
if(finalquant==0){
  alert("Redirecting to Dashboard as the quantity was updated to 0/Empty")

  this.removeBloodCart();

}}
else{
  alert("Entered quantity is greater than available quantity")
}
  
}
removeBloodFromDB(){
  this.auth.removeBloodQty(this.bldqty)
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
placeOrder(){
  this.auth.PlaceOrder(this.order)
  .subscribe(
    r => {


});
}
}
