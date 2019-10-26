import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  uri='http://localhost:3000';

  constructor(private http: HttpClient) { }
  getDbData(){
    return this.http.get(`${this.uri}`);
  }
}
