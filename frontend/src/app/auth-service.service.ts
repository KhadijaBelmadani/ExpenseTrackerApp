import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5113/api/auth'; 

  constructor(private http: HttpClient, private router: Router) {}

  // Register method
  register(username: string, email: string, password: string): Observable<any> {
    const body = { username, email, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  // Login method
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // Save JWT Token in localStorage
  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Get JWT Token from localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Log out the user
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);  // Redirect to login page
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
