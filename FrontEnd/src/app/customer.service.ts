import {Injectable} from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setToken(token: string): void {
    console.log("Before token storage")
    localStorage.setItem(TOKEN, token);
    console.log("After token storage")
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}
