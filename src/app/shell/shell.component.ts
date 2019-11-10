import { Component } from '@angular/core';

@Component({
  selector: 'app-dc-shell',
  template: `
  <div style="min-height: 100%;">
    <app-dc-header></app-dc-header>
    <app-dc-sidebar></app-dc-sidebar>
      <div class="page-wrapper">
        <div class="page-container">
         <router-outlet></router-outlet>
        </div>
      </div>
  </div>
`
})
// <app-dc-footer></app-dc-footer>
export class ShellComponent {

}
