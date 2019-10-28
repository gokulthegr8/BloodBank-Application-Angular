import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginUserData={}

  constructor(private auth: DatabaseService) { }

  ngOnInit() {
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }
}
