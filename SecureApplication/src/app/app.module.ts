import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { LoginComponent } from './comp/login/login.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import {NgxMaskModule} from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDashboardComponent } from './comp/order-dashboard/order-dashboard.component';
import { CreateOrderComponent } from './comp/create-order/create-order.component';
import { ViewOrderComponent } from './comp/view-order/view-order.component';
import { ConfirmationComponent } from './comp/confirmation/confirmation.component';



@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    LoginComponent,
    SignUpComponent,
    OrderDashboardComponent,
    CreateOrderComponent,
    ViewOrderComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
