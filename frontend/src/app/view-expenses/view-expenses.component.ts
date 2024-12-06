import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-view-expenses',
  templateUrl: './view-expenses.component.html',
  styleUrls: ['./view-expenses.component.css'],
})
export class ViewExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  displayedColumns: string[] = ['description', 'amount', 'category', 'actions'];
  viewMode: string = 'table'; // Default view mode: 'table' or 'cards'

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe(
      (data) => {
        this.expenses = data;
      },
      (error) => {
        console.error('Error fetching expenses', error);
        alert('Error fetching expenses');
      }
    );
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(
      () => {
        this.expenses = this.expenses.filter((expense) => expense.id !== id);
        alert('Expense deleted successfully');
      },
      (error) => {
        console.error('Error deleting expense', error);
        alert('Error deleting expense');
      }
    );
  }
}
