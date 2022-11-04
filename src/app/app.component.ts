import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <!-- loading the components here -->
    <app-header></app-header>
    <app-body-content></app-body-content>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
