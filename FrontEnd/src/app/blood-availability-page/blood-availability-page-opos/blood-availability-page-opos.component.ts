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
  this.router.navigateByUrl('/homepage');
}

}
