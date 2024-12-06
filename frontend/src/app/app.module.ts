import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { ViewExpensesComponent } from './view-expenses/view-expenses.component';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BudgetProgressComponent } from './budget-progress/budget-progress.component';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { ExpensesChartComponent } from './expenses-chart/expenses-chart.component';
import { SetBudgetComponent } from './set-budget/set-budget.component';
import { BudgetService } from './budget.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { LoginComponent } from './login/login.component';  // Import ReactiveFormsModule here

 // Import NgChartsModule

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ViewExpensesComponent,
    BudgetProgressComponent,
    ExpensesChartComponent,
    SetBudgetComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatProgressBarModule,
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    NgChartsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
