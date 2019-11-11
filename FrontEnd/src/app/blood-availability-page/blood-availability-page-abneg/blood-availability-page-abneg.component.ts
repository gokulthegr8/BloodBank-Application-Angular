import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../../database.service';

@Component({
  selector: 'app-blood-availability-page-abneg',
  templateUrl: './blood-availability-page-abneg.component.html',
  styleUrls: ['./blood-availability-page-abneg.component.css']
})
export class BloodAvailabilityPageAbnegComponent implements OnInit {
  public blood:any=[];
  constructor(private customer:CustomerService,private router:Router,private db: DatabaseService) { }
  ngOnInit() {
    this.db.getBloodQtyABneg().subscribe((dbb)=>{
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

