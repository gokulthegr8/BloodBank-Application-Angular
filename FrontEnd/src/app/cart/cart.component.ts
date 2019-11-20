import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public bloodqty=localStorage.getItem("qty");
public BloodGroup=localStorage.getItem("cart");
public quantity=false;
  constructor(private customer:CustomerService,private router:Router) { }

  ngOnInit() {
  }
  completeOrder(){
  //  if((document.getElementById("qty") as HTMLInputElement).value){
    console.log("Value is"+(document.getElementById("qty") as HTMLInputElement).value)
    
    if((document.getElementById("qty") as HTMLInputElement).value!=""){
      // this.quantity=true;
      
  if((document.getElementById("urgency1") as HTMLInputElement).checked||(document.getElementById("urgency2") as HTMLInputElement).checked||(document.getElementById("urgency3") as HTMLInputElement).checked){
    //  var confirm=confirm("Are you sure you want to place the order?");
    console.log("inside if")
   
    if(confirm("Are you sure you want to place the order?")){
      this.router.navigateByUrl('/dashboard');
      alert("The order has been placed successfully")
      this.removeCart();
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
  this.router.navigateByUrl('/homepage');
}
removeCart(){
  localStorage.removeItem("cart");
  localStorage.removeItem("qty");
  localStorage.removeItem("dbqty")
}
removeBloodCart(){
  this.removeCart();
  this.router.navigateByUrl('/dashboard');

}
updateBloodQty(){
  
  if((document.getElementById("qty") as HTMLInputElement).value<=localStorage.getItem("dbqty")){

  
    var finalquant:number= Number(((document.getElementById("qty") as HTMLInputElement).value))
    localStorage.setItem("qty",finalquant.toString());
    alert("Blood quantity updated successfully")
if(finalquant==0){
  this.removeBloodCart();

}}
else{
  alert("Entered quantity is greater than available quantity")
}
  
}
}
