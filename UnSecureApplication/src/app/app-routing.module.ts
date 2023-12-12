import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './comp/login/login.component';
import { DashboardComponent } from './comp/dashboard/dashboard.component';
import { SignUpComponent } from './comp/sign-up/sign-up.component';
import {OrderDashboardComponent} from './comp/order-dashboard/order-dashboard.component';
import { ViewOrderComponent } from './comp/view-order/view-order.component';
import { CreateOrderComponent } from './comp/create-order/create-order.component';
import { ConfirmationComponent } from './comp/confirmation/confirmation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'order-dashboard', component: OrderDashboardComponent},
  { path: 'view-order', component: ViewOrderComponent},
  { path: 'create-order', component: CreateOrderComponent},
  { path: 'sign-up', component: SignUpComponent},
  {path:'confirmation', component:ConfirmationComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
