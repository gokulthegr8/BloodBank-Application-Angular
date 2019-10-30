import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  registerUserData={}
  constructor(private auth: DatabaseService,private router: Router) { }

  ngOnInit() {
  }
  registerUser(){
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      r => {
        
          this.router.navigateByUrl('/login');
        
      },
      r => {
        alert(r.error.error);
      }
      );
    
  }

}
