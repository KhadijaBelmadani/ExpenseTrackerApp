import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './models/budget.model';
import { BudgetProgress } from './models/BudgetProgress.models';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  private apiUrl = 'http://localhost:5113/api/Budget'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Get the current budget (Latest monthly budget)
  getBudget(): Observable<Budget> {
    return this.http.get<Budget>(this.apiUrl);
  }

  // Set or Update the monthly budget
  setOrUpdateBudget(budget: Budget): Observable<Budget> {
    if (budget.Id) {
      // For updating the current month's budget, use PUT
      return this.http.put<Budget>(this.apiUrl, budget);
    } else {
      // For setting a new monthly budget, use POST
      return this.http.post<Budget>(this.apiUrl, budget);
    }
  }

  // Get budget progress
  getBudgetProgress(): Observable<BudgetProgress> {
    return this.http.get<BudgetProgress>(`${this.apiUrl}/progress`);
  }
}
