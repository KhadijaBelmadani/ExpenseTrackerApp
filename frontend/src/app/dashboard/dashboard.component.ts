import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeTab: string = 'add-expenses'; // Default tab to be displayed
  title = 'expense-tracker';
  // Change the active tab based on user interaction
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
