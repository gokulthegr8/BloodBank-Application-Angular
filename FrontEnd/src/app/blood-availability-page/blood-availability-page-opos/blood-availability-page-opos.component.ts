import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-blood-availability-page-opos',
  templateUrl: './blood-availability-page-opos.component.html',
  styleUrls: ['./blood-availability-page-opos.component.css']
})
export class BloodAvailabilityPageOposComponent implements OnInit {
  public blood:any=[];
  constructor(private customer:CustomerService,private router:Router,private db: DatabaseService) { }
  ngOnInit() {
    this.db.getBloodQtyOpos().subscribe((dbb)=>{
      console.log(dbb);
      
      this.blood=JSON.stringify(dbb);
      this.blood=this.blood.split(":");
      this.blood=this.blood[1].split("}");
      this.blood=this.blood[0];
   
     
    })  }
logout(){
  this.customer.deleteToken();
  localStorage.removeItem("HospitalID");
  this.router.navigateByUrl('/homepage');
}
addtoCart1(){
  var quantity= ((document.getElementById("qty") as HTMLInputElement).value);
  if(Number(quantity)+Number(localStorage.getItem("qty"))<=this.blood){
  if(localStorage.getItem("qty"))
  {
    var quant:number=Number(localStorage.getItem("qty"));
    var finalquant:number= quant+Number(((document.getElementById("qty") as HTMLInputElement).value))
    localStorage.setItem("qty",finalquant.toString());
  }
  else{
    localStorage.setItem("qty", quantity);

  }
  if((document.getElementById("qty") as HTMLInputElement).value==""||(document.getElementById("qty") as HTMLInputElement).value=="0"){
 alert("Please enter the required blood quantity");
  }else{
    localStorage.setItem("cart", "O+");
    localStorage.setItem("dbqty",this.blood)
    this.router.navigateByUrl('/cart');
  
  }}
  else{
    alert("Entered blood quantity is greater than available quantity")
  }

}
Cart(){
 
  this.router.navigateByUrl('/cart');
}
}
