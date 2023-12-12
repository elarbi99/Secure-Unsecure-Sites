import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxMaskModule} from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';  
import { LoginComponent } from './comp/login/login.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderDashboardComponent } from './comp/order-dashboard/order-dashboard.component';
import { CreateOrderComponent } from './comp/create-order/create-order.component';
import { ViewOrderComponent } from './comp/view-order/view-order.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    OrderDashboardComponent,
    CreateOrderComponent,
    ViewOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
