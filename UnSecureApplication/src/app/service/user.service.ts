import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateAccount } from '../model/user/CreateAccount';
const BASE_URL = ['https://localhost/mysite/']
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  login(loginRequest: any): Observable<any> {
    const params = {
      email: loginRequest.email,
      password: loginRequest.password
    };
    return this.http.get(BASE_URL + "authenticate.php", { params });
  }

  signup(signupRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "sign-up.php", signupRequest)
  }
  

  createOrder(createOrderRequest: any): Observable<any> {
    return this.http.post(BASE_URL + "create-order.php", createOrderRequest)
  }
  getOrder(getOrderRequest: any): Observable<any> {
    const params = {
      email: getOrderRequest.email,
      order_number: getOrderRequest.order_number
    };
    return this.http.get(BASE_URL + "get-order.php", { params });
  }
}
