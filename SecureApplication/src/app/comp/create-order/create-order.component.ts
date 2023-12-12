import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Orders } from 'src/app/model/user/Orders';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {
  public orders: Orders= new Orders; 
  orderName:string="";
  constructor(
    private formBuilder: FormBuilder,private userService: UserService,
    private router: Router
  ) {

  }
  onClickSubmit():void {
    this.orders.email=localStorage.getItem('EMAIL')!;
    if(this.orderName==="book1")
    {
      this.orders.orderName="Network Security Essentials Application and Standards 5th Edition William Stallings";
      this.orders.price=60.00;
    }
    else if(this.orderName==="book2")
    {
      this.orders.orderName="Fundamentals of Database Systems 7th Edition Elmasri . Navathe";
      this.orders.price=150.00;
    }
    else if(this.orderName==="book3")
    {
      this.orders.orderName="Artificial Intelligence A Modern Approach Fourth Edition Staurt Russell Peter Norvig";
      this.orders.price=160.00;
    }
    this.userService.createOrder(this.orders).subscribe(
      (response) => {
        localStorage.setItem("OrderNumber",response.order.orderNumber);
        this.router.navigateByUrl('/confirmation');
      },
      (error) => {
        console.error('Error:', error);
      }
    ); 
  }
  
}
