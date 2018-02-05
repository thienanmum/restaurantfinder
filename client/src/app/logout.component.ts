/**
 * File: logout.component.ts
 * File Created: 02/05/2018
 * Author: annguyen
 * Description: Handles logout link by calling AuthService.logout and redirect to login page.
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
      console.log("Logout");
      this.authService.logout();
      this.router.navigate(['login']);
  }

}
