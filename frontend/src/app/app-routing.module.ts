import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';
import { BudgetProgressComponent } from './budget/budget.component';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  // { path: '', redirectTo: '/view-expenses', pathMatch: 'full' },
  // { path: 'add-expenses', component: AddExpenseComponent },
  // { path: 'view-expenses', component: ViewExpensesComponent },
  // { path: 'budget', component: BudgetProgressComponent },
  { path: '', component: AuthComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'add-expenses', component: AddExpenseComponent },
    { path: 'view-expenses', component: ViewExpensesComponent },
    { path: 'budget', component: BudgetProgressComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
