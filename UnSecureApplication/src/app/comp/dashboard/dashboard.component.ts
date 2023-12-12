import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  created="";
  ngOnInit() {
    localStorage.setItem("EMAIL",'');
    localStorage.setItem('OrderNumber',"");
    this.created=localStorage.getItem("ACCOUNT")!;
  }
}
