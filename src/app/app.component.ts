import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   menuItems = [
     {
       name: 'Accueil',
       path:  '/'
     },
    {
      name: 'Infos sur la companie',
      path:  '/company'
    },
    {
      name: 'Missions',
      path: '/launches'
    },
     {
       name: 'Roquettes',
       path: '/rockets'
     },
  ];
  constructor() {}
}
