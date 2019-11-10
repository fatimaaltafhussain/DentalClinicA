import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // alert('HI');
  }
  logout() {
    // this.register.token = null;
    // this.register.currentUser=null;
    // localStorage.removeItem('token');
    // this.router.navigate['register'];
    // alert('routing');
  }
}
