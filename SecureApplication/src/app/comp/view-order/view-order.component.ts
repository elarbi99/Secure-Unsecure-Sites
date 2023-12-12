import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Orders } from 'src/app/model/user/Orders';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent {
  public orders: Orders= new Orders; 
  orderNumber=null;
  orderName="";
  orderDate="";
  orderNumberRe=null;
  price:any;
  errors="";
  constructor(
    private formBuilder: FormBuilder,private userService: UserService,
    private router: Router
  ){}
  onClickSubmit():void {
    this.orders.email=localStorage.getItem("EMAIL")!;
    
    this.orders.orderNumber=this.orderNumber!;
    this.userService.getOrder(this.orders).subscribe((response) => {
        this.orderName="Order Name: "+response.orderName;
        this.price="Total: $"+response.price;
        this.orderDate="Order Date: "+response.orderDate;    
    },(error) => {
      console.error(error);
      this.errors="Cannot find Order";
    })
    
}
}
