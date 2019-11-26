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
  private removeBloodAPos='http://localhost:3000/removeBloodAPos';
  private removeBloodANeg='http://localhost:3000/removeBloodANeg';
  private removeBloodBPos='http://localhost:3000/removeBloodBPos';
  private removeBloodBNeg='http://localhost:3000/removeBloodBNeg';
  private removeBloodOPos='http://localhost:3000/removeBloodOPos';
  private removeBloodONeg='http://localhost:3000/removeBloodONeg';
  private removeBloodABPos='http://localhost:3000/removeBloodABPos';
  private removeBloodABNeg='http://localhost:3000/removeBloodABNeg';

  private addOrder='http://localhost:3000/placeOrder';

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
          removeBloodQtyAPos(bloodqty){
            return this.http.post<any>(this.removeBloodAPos,bloodqty)
              }
              removeBloodQtyANeg(bloodqty){
                return this.http.post<any>(this.removeBloodANeg,bloodqty)
                  }
                  removeBloodQtyBPos(bloodqty){
                    return this.http.post<any>(this.removeBloodBPos,bloodqty)
                      }
                      removeBloodQtyBNeg(bloodqty){
                        return this.http.post<any>(this.removeBloodBNeg,bloodqty)
                          }
                          removeBloodQtyOPos(bloodqty){
                            return this.http.post<any>(this.removeBloodOPos,bloodqty)
                              }
                              removeBloodQtyONeg(bloodqty){
                                return this.http.post<any>(this.removeBloodONeg,bloodqty)
                                  }
                                  removeBloodQtyABPos(bloodqty){
                                    return this.http.post<any>(this.removeBloodABPos,bloodqty)
                                      }
                                      removeBloodQtyABNeg(bloodqty){
                                        return this.http.post<any>(this.removeBloodABNeg,bloodqty)
                                          }
      
              PlaceOrder(order){            
            return this.http.post<any>(this.addOrder,order)
              }
}
