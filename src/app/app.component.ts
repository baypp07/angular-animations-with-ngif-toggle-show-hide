import { Component } from '@angular/core';
import {
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1 })),
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out'))
    ])
  ]
})
export class AppComponent {
  expan = false;
  name = 'Angular 6';
  toggleExpan() {
    this.expan = !this.expan;
  }
}
