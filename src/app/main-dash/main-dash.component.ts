import { Component, Input } from '@angular/core';
import { grow } from '../../shared/animations';

@Component({
  selector: 'main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css'],
  animations: [grow]
})
export class MainDashComponent {
  state: string;

  toggleAnimation(state) {
    this.state = this.state === 'yes' ? 'no' : 'yes';
    // this.state = this.state === 'in' ? 'out' : 'in';
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
