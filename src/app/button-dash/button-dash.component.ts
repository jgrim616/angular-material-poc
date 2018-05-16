import { Component, Input } from '@angular/core';
import { minimize } from '../../shared/animations';

@Component({
  selector: 'button-dash',
  templateUrl: './button-dash.component.html',
  styleUrls: ['./button-dash.component.css'],
  animations: [minimize]
})
export class ButtonDashComponent {}
