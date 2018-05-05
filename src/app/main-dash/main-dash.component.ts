import { Component } from '@angular/core';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  cards = [
    {
      title: 'My Applications',
      content:
        'Customer Manager / Claims Manager / Fee Schedule Load Compare / ABM Data Maintenance',
      cols: 2,
      rows: 1
    },
    { title: 'Pending Referrals', content: 'Referrals', cols: 1, rows: 1 },
    {
      title: 'Pending Authorizations',
      content: 'Authorizations',
      cols: 1,
      rows: 2
    },
    { title: 'TODO', content: 'TODO', cols: 1, rows: 1 }
  ];
}
