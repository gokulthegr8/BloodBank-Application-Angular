import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  uri='http://localhost:3000';
  private register_url='http://localhost:3000/signup';
  private login_url='http://localhost:3000/auth';

  constructor(private http: HttpClient) { }
  getDbData(){
    return this.http.get(`${this.uri}`);
  }
  registerUser(user){
return this.http.post<any>(this.register_url,user)
  }
  loginUser(user){
    return this.http.post<any>(this.login_url,user)
      }
}
