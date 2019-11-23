import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginUserData={}

  constructor(private auth: DatabaseService,private customer:CustomerService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    var rand = function() {
      return Math.random().toString(36).substr(2); // remove `0.`
  };
  
  var token = function() {
      return rand() + rand(); // to make it longer
  };
  
  token();
  console.log("random token is  "+token())

    this.auth.loginUser(this.loginUserData)
    .subscribe(
      r => {
          
        localStorage.setItem("HospitalID",(document.getElementById("HospitalID") as HTMLInputElement).value);

          this.customer.setToken(token());
          this.router.navigateByUrl('/dashboard');
        
      },
      r => {
        alert("Incorrect login details");
      }
      );
      // res=>console.log(JSON.stringify(res)),
      // err=>console.log(JSON.stringify(err))
    
  }
}
