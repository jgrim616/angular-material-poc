import { Component, Input } from '@angular/core';
import { minimize } from '../../shared/animations';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
  animations: [minimize]
})
export class MainDashComponent {
  state: string;

  toggleAnimation(state) {
    // this.state = this.state === 'yes' ? 'no' : 'yes';
    // this.state = this.state === 'in' ? 'out' : 'in';
    this.state = this.state === 'up' ? 'down' : 'up';
  }

  // cards = [
  //   {
  //     title: 'My Applications',
  //     content: 'Customer Manager',
  //     images: 'assets/img/customer_manager.svg',
  //     cols: 2,
  //     rows: 1
  //   },
  //   { title: 'Pending Referrals', content: 'Referrals', cols: 1, rows: 1 },
  //   {
  //     title: 'Pending Authorizations',
  //     content: 'Authorizations',
  //     cols: 1,
  //     rows: 2
  //   },
  //   { title: 'TODO', content: 'TODO', cols: 1, rows: 1 }
  // ];
}
