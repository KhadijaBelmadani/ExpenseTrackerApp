import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { Budget } from '../models/budget.model';

@Component({
  selector: 'app-set-budget',
  templateUrl: './set-budget.component.html',
  styleUrls: ['./set-budget.component.css']
})
export class SetBudgetComponent implements OnInit {
  budgetForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  isMonthFieldVisible: boolean = false; // Initially hidden


  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      monthlyBudget: ['', [Validators.required, Validators.min(0)]],
      month: [new Date().toISOString().substring(0, 10), Validators.required], // Default to current date
    });
  }

  ngOnInit(): void {
    // Optionally fetch the current budget to display or prefill
    this.budgetService.getBudget().subscribe({
      next: (budget) => {
        if (budget) {
          this.budgetForm.patchValue({
            monthlyBudget: budget.MonthlyBudget,
            month: new Date(budget.Month).toISOString().substring(0, 10),
          });
        }
      },
      error: () => {
        console.log('No budget found for the current month.');
      },
    });
  }

  onSubmit(): void {
    if (this.budgetForm.valid) {
      const budget: Budget = {
        Id: undefined, // Will be handled in the backend
        MonthlyBudget: this.budgetForm.value.monthlyBudget,
        Month: new Date(this.budgetForm.value.month),
      };

      this.budgetService.setOrUpdateBudget(budget).subscribe({
        next: (response) => {
          this.successMessage = 'Budget successfully saved!';
          this.errorMessage = '';
        },
        error: (err) => {
          this.errorMessage = 'Failed to save the budget. Please try again.';
          this.successMessage = '';
          console.error(err);
        },
      });
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.successMessage = '';
    }
  }
}
