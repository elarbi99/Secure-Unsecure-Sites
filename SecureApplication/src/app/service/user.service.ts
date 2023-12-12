import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAccount } from '../model/user/CreateAccount';
const BASE_URL = ['http://localhost:8080/']
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  login(loginRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "authenticate", loginRequest)
  }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up", signupRequest)
  }

  createOrder(createOrderRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "create-order", createOrderRequest)
  }
  getOrder(getOrderRequest: any): Observable<any> {
    const params = {
      email: getOrderRequest.email,
      orderNumber: getOrderRequest.orderNumber
    };
    return this.http.get(BASE_URL + "get-order", {params});
  }
  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
    }
    return null;
  }
}
