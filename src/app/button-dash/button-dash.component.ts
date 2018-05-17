import { Component, Input } from '@angular/core';
import { minimize } from '../../shared/animations';
import { MatSnackBar, MatBottomSheet } from '@angular/material';

@Component({
  selector: 'button-dash',
  templateUrl: './button-dash.component.html',
  styleUrls: ['./button-dash.component.css'],
  animations: [minimize]
})
export class ButtonDashComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.open('Woohoo!', 'Dismiss');
  }
}
