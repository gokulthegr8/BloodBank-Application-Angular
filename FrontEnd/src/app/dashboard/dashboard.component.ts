import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private customer:CustomerService,private router:Router) { }

  ngOnInit() {
  }
logout(){
  this.customer.deleteToken();
  localStorage.removeItem("HospitalID");
  this.router.navigateByUrl('/homepage');
}
}
