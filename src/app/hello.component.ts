import { Component, NgModule, Input, HostListener } from '@angular/core'
import { trigger, state, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'toggle',
  animations: [
    trigger('toggle', [
      state('true', style({ opacity: 1, color: 'red' })),
      state('void', style({ opacity: 0, color: 'blue' })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out'))
    ])
  ],
  template: `
  <div class="toggle" [@toggle]="show" 
        (@toggle.start)="animationStarted($event)"
        (@toggle.done)="animationDone($event)"
     *ngIf="show">
    <ng-content></ng-content>
  </div>
  `
})
export class HelloComponent {
  @Input() show: boolean = true;
  @HostListener('document:click')
  onClick() {
    this.show = !this.show;
  }

  animationStarted($event) {
    console.log('Start');
  }

  animationDone($event) {
    console.log('End');
  }
}
