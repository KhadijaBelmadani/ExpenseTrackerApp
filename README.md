# Expense Tracker with Budget Alerts

A web application designed to help users track their expenses, categorize them, and stay within their budget. The app provides alerts when expenses exceed the predefined budget, ensuring better financial management.

---

## 🚀 Features

1. **Expense Management:**
   - Add, view, and delete expenses.
   - Categorize expenses (e.g., Food, Transport, Entertainment).

2. **Budget Management:**
   - Set a monthly budget.
   - Display a progress bar showing the remaining budget.
   - Notify users when total expenses exceed the monthly budget.

3. **Optional Features:**
   - Interactive charts (e.g., pie chart) to visualize expenses by category.
   - User authentication to allow managing expenses for multiple users.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** Angular 
- **Language:** TypeScript
- **Styling:** CSS / SCSS

### Backend
- **Framework:** .NET 8
- **Language:** C#

### Database
- **Preferred:** SQLServer

---

## 🏗️ How to Run

### Prerequisites
- **Frontend:**
  - Node.js (v18 or higher)
  - Angular CLI
- **Backend:**
  - .NET 8 SDK
- **Database:**
  - SQLServer.

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KhadijaBelmadani/ExpenseTrackerApp.git
   
2. **Frontend Setup::**
    ```bash
     cd ExpenseTrackerApp
     cd frontend
     npm install
     ng serve
3. **Backend Setup:**
   ```bash
   cd backend
   dotnet restore
   dotnet run
4. **Database Setup:**
     Create a database and configure its connection string in the backend configuration file (e.g., appsettings.json).
5. **Access the Application:**
     Open your browser and navigate to :http://localhost:4200

## 📊 Bonus Features
pie charts to visualize expenses by category using charting libraries like Chart.js .
Implement user authentication using tools like JWT for token-based authentication.
### Instructions:
1. Replace placeholders like `yourusername` and `your.email@example.com` with your actual details.
2. Adjust the "How to Run" section based on your specific setup.
3. Include a `LICENSE` file if applicable.
   
## ✨ Future Enhancements 
Export expenses to Excel or PDF.
Implement recurring expenses.
Add dark mode for UI.

   

