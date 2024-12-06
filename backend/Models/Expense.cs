
using System;
namespace ExpenseTracker.Models;

public class Expense
{
	
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
    public int? UserId { get; set; } // Foreign key
    public User User { get; set; } // Navigation property

}
