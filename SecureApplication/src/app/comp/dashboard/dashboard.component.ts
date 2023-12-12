import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  created="";
  ngOnInit() {
    localStorage.setItem("JWT",'');
    localStorage.setItem("EMAIL",'');
    this.created=localStorage.getItem("ACCOUNT")!;
  }
}

