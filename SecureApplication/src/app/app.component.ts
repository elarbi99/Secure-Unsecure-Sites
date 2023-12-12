import { Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'SecureApplication';
  user = '';
  constructor(private ngZone: NgZone) {}
  ngOnInit() {
    this.ngZone.run(() => {
      this.user = localStorage.getItem('EMAIL')!;
    });
    
  }
}
