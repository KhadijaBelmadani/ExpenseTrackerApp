
using System;
namespace ExpenseTracker.Models;

public class Budget
{
	

        public int Id { get; set; }
        public decimal MonthlyBudget { get; set; }
        public DateTime Month { get; set; }
        public bool IsOverBudget { get; set; }
    public int? UserId { get; set; } // Foreign key
    public User User { get; set; } // Navigation property

}
