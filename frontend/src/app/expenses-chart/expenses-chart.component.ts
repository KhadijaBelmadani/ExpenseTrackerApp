import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';  // Make sure the service is imported
import { Expense } from '../models/expense.model';  // Ensure the Expense model is imported
import { ChartData, ChartOptions ,DefaultDataPoint} from 'chart.js';

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.css']
})
export class ExpensesChartComponent implements OnInit {
  public pieChartData: ChartData<'pie'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7C33B', '#33F4FF'],
      },
    ],
  };
  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpensesByCategory();
  }

  loadExpensesByCategory(): void {
    this.expenseService.getExpenses().subscribe((expenses: Expense[]) => {
      const categoryExpenseMap = new Map<string, number>();

      expenses.forEach(expense => {
        const category = expense.category;
        const amount = expense.amount;

        if (categoryExpenseMap.has(category)) {
          categoryExpenseMap.set(category, categoryExpenseMap.get(category)! + amount);
        } else {
          categoryExpenseMap.set(category, amount);
        }
      });

      const categories: string[] = Array.from(categoryExpenseMap.keys());
      const amounts: number[] = Array.from(categoryExpenseMap.values());

      this.pieChartData = {
        labels: categories,
        datasets: [
          {
            data: amounts,
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#F7C33B', '#33F4FF'],
          },
        ],
      };
    });
  }
}
