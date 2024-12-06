import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.username, this.email, this.password).subscribe(
      () => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed');
      }
    );
  }
}
