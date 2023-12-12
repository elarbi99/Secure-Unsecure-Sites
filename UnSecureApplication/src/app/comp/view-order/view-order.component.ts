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
  orderNumberRe=null;
  errors="";
  price:any;
  constructor(
    private formBuilder: FormBuilder,private userService: UserService,
    private router: Router
  ){}
  onClickSubmit():void {
    this.orders.email=localStorage.getItem("EMAIL")!;
    console.log(this.orders.email);
    this.orders.order_number=this.orderNumber!;
    console.log(this.orders.order_number);
    this.userService.getOrder(this.orders).subscribe((response) => {
      if(!response.error)
      {
        console.log(response);
        this.orderName="Order Name: "+response[0].order_name;
        this.price="Total: $"+response[0].price;
        this.errors="";
      }
      else{
        this.errors = "Cannot Find order";
      }
    },(error) => {
      console.error(error);
    })
    
}
}
