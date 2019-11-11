import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iblood } from './bloodavailability';


@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  uri='http://localhost:3000';
  private register_url='http://localhost:3000/signup';
  private login_url='http://localhost:3000/auth';
  private bloodAvailabilityApos ='http://localhost:3000/bloodavailabilityApos';
  private bloodAvailabilityAneg='http://localhost:3000/bloodavailabilityAneg';
  private bloodAvailabilityBpos='http://localhost:3000/bloodavailabilityBpos';
  private bloodAvailabilityBneg='http://localhost:3000/bloodavailabilityBneg';
  private bloodAvailabilityOpos='http://localhost:3000/bloodavailabilityOpos';
  private bloodAvailabilityOneg='http://localhost:3000/bloodavailabilityOneg';
  private bloodAvailabilityABpos='http://localhost:3000/bloodavailabilityABpos';
  private bloodAvailabilityABneg='http://localhost:3000/bloodavailabilityABneg';
  private checkHospitalID='http://localhost:3000/checkHospitalID';


  constructor(private http: HttpClient) { }
  getDbData(){
    return this.http.get(`${this.uri}`);
  }
  registerUser(user){
    // return this.http.post<any>(this.checkHospitalID,hospitalID)

return this.http.post<any>(this.register_url,user)
  }
//   registerUser(user,hospitalID){
//     return this.http.post<any>(this.checkHospitalID,hospitalID)

// return this.http.post<any>(this.register_url,user)
//   }
  loginUser(user){
    return this.http.post<any>(this.login_url,user)
      }
      getBloodQtyApos():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityApos);

      }
      getBloodQtyAneg():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityAneg);

      }
      getBloodQtyBpos():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityBpos);

      }
      getBloodQtyBneg():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityBneg);

      }
      getBloodQtyOpos():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityOpos);

      }
      getBloodQtyOneg():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityOneg);

      }
      getBloodQtyABpos():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityABpos);

      }
      getBloodQtyABneg():Observable<Iblood[]>{
        
        return this.http.get<Iblood[]>(this.bloodAvailabilityABneg);

      }
      checkHosID(hospitalID){
        return this.http.post<any>(this.checkHospitalID,hospitalID)
          }
}
