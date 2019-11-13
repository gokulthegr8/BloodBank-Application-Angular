import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import{User} from './User';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
   MyPopUp = false;
   public flag=1;
   public value=[];
   public hospitalName;
  registerUserData={}

  public user: User;
  constructor(private auth: DatabaseService,private router: Router) { }

  ngOnInit() {
    this.user={
      hospitalName:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
      hospitalId:'',
      password:'',
      ConfirmPassword:''

    }
  }
  save(f: User, isValid: boolean) {
  }
  registerUser(){
    // this.data()

    if(this.checkAllInput()){
      console.log("register is: "+  this.registerUserData)
      console.log("register is: "+  this.user.hospitalName)

      // this.flag=0;
      // console.log("Flag is "+this.flag)
    // }
      // if(this.flag==0){
      console.log("inside window if")
      if(this.user.password==this.user.ConfirmPassword)
{
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      r => {
          
          if(this.registerUserData){
            console.log("inside ulla if")
            // this.checkHosp();
            // this.router.navigateByUrl('/login');

            console.log("After ulla if")
            }
            // }
      },
      r => {
        alert(r.error.error);
      }
      );
      }
    }
  }
  //  setBoolean() {
  //    if(this.registerUserData){
  //   this.MyPopUp = true;
  //   return this.MyPopUp
  //    }
  // }
  // data(){
  //   for(var hospitalName in this.registerUserData) {
  //     if(this.registerUserData.hasOwnProperty(hospitalName)) {
  //         this.value = this.registerUserData[hospitalName];
  //         console.log("value is: "+this.value)
  //         return this.value
  //         //do something with value;
  //     }
  // }
  // var address;
  //   if(this.registerUserData.hasOwnProperty(address)) {
  //       this.value = this.registerUserData[address];
  //       console.log("value is: "+this.value)
  //       return this.value
  //       //do something with value;
    // }

// }
       checkAllInput(){
         if(this.user.hospitalName!=''&&this.user.address!=''&&this.user.city!=''&&this.user.state!=''&&this.user.zipcode!=''&&this.user.hospitalId!=''&&this.user.password!=''&&this.user.ConfirmPassword!=''&&this.user.password==this.user.ConfirmPassword)
         console.log("inside check input if")
         this.MyPopUp = true;
         return this.MyPopUp
        }    
        checkHosp(){
          console.log("before func start")
          this.auth.checkHosID(this.registerUserData)
            .subscribe(
              x => {
                console.log("inside func")
                if(this.user.password==this.user.ConfirmPassword)
                this.router.navigateByUrl('/login');

              },
              x=>{
                alert("Hospital ID already exists");

              }
            );
        }
}
