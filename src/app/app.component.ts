import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   menuItems = [
    {
      name: 'Company',
      path:  '/company'
    },
    {
      name: 'Launches',
      path: '/launches'
    },
  ];

  constructor(private router: Router) {
  }
}
