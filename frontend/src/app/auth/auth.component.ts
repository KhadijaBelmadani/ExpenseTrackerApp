import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private router: Router) {}

  // Navigate to login page
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Navigate to register page
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
