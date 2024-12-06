using System;
namespace ExpenseTracker.Models;
public class CreateBudgetRequest
{
    public decimal MonthlyBudget { get; set; }
    public DateTime Month { get; set; }
    public int? UserId { get; set; } // Optional, can infer from authentication if needed
}
