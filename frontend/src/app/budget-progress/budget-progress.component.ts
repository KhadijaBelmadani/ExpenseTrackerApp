import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { BudgetProgress } from '../models/BudgetProgress.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-budget-progress',
  templateUrl: './budget-progress.component.html',
  styleUrls: ['./budget-progress.component.css'],
})
export class BudgetProgressComponent implements OnInit {
  budgetProgress: BudgetProgress | null = null;

  constructor(private budgetService: BudgetService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchBudgetProgress();
  }

  fetchBudgetProgress(): void {
    this.budgetService.getBudgetProgress().subscribe(
      (data: BudgetProgress) => {
        this.budgetProgress = data;
      },
      (error) => {
        console.error('Error fetching budget progress:', error);
      }
    );
  }
  notifyUserExceedingBudget(): void {
    alert('You have exceeded your monthly budget!');
  }
}
