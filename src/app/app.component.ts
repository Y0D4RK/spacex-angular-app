import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public menuItems = [
    {
      name: 'Missions',
      path: '/missions'
    },
    {
      name: 'Company',
      path:  '/company'
    }
  ];

  constructor(private router: Router) {
  }

  goToMissionsPage() {
    this.router.navigate(['/missions']);
  }
}
