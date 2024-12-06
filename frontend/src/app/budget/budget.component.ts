import { BudgetService } from './../budget.service';
import { Component, OnInit } from '@angular/core';
import { BudgetProgress } from '../models/BudgetProgress.models';

@Component({
  selector: 'app-budget-progress',
  template: `
    <div>
      <h3>Monthly Budget Progress</h3>
      <div>
        <p>Monthly Budget: {{ progress?.monthlyBudget  }}</p>
        <p>Total Expenses: {{ progress?.totalExpenses  }}</p>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar" [style.width.%]="progress?.percentageUsed"></div>
      </div>
      <p *ngIf="progress?.percentageUsed >= 100" class="alert">
        Warning: You've exceeded your budget!
      </p>
    </div>
  `,
  styles: [
    `
      .progress-bar-container {
        background: #e0e0e0;
        border-radius: 10px;
        width: 100%;
        height: 20px;
        margin: 10px 0;
        position: relative;
      }
      .progress-bar {
        background: #76c7c0;
        height: 100%;
        border-radius: 10px;
        transition: width 0.3s;
      }
      .alert {
        color: red;
        font-weight: bold;
      }
    `,
  ],
})
export class BudgetProgressComponent implements OnInit {
  progress?: BudgetProgress;

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.budgetService.getBudgetProgress().subscribe((data) => (this.progress = data));
  }
}
