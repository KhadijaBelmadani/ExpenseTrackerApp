using System;
using ExpenseTracker.Models;
using Microsoft.EntityFrameworkCore;
namespace ExpenseTracker.Data;

public class ExpenseTrackerContext : DbContext
{
    public ExpenseTrackerContext(DbContextOptions<ExpenseTrackerContext> options) : base(options) { }
    public DbSet<Expense> Expenses { get; set; }
    public DbSet<Budget> Budgets { get; set; }
    public DbSet<User> Users { get; set; } // Register User model

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Expenses)
            .WithOne(e => e.User)
            .HasForeignKey(e => e.UserId);

        modelBuilder.Entity<User>()
            .HasMany(u => u.Budgets)
            .WithOne(b => b.User)
            .HasForeignKey(b => b.UserId);
    }
}
