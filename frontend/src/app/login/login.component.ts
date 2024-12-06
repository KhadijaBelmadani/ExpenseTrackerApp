import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        const token = response.token;
        this.authService.saveToken(token);
        this.router.navigate(['dashboard']);  // Redirect to the dashboard or home page
      },
      (error) => {
        alert('Invalid credentials');
      }
    );
  }
}
