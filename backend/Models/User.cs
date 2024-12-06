using System;
namespace ExpenseTracker.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; } // Use a hashed password for security
    public ICollection<Expense> Expenses { get; set; } // Link user with expenses
    public ICollection<Budget> Budgets { get; set; }  // Link user with budgets
}


