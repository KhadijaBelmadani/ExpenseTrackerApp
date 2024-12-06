import { Component } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expense } from '../models/expense.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
  
})
export class AddExpenseComponent {
  expense: Expense = new Expense();
  categories = ['Food', 'Transport','Rent', 'Entertainment','Other'];

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    this.expenseService.addExpense(this.expense).subscribe(
      (response) => {
        alert('Expense added successfully');
      },
      (error) => {
        alert('Error adding expense');
      }
    );
  }
}
