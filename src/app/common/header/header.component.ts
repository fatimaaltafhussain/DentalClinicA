import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

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
