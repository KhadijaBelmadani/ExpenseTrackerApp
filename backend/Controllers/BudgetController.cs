using System;
using System.Linq;
using System.Threading.Tasks;
using ExpenseTracker.Data;
using ExpenseTracker.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class BudgetController : ControllerBase
{
    private readonly ExpenseTrackerContext _context;

    public BudgetController(ExpenseTrackerContext context)
    {
        _context = context;
    }

    // Get the latest budget
    [HttpGet]
    public async Task<ActionResult<Budget>> GetBudget()
    {
        var latestBudget = await _context.Budgets
            .OrderByDescending(b => b.Month)
            .FirstOrDefaultAsync();

        if (latestBudget == null)
        {
            return NotFound("No budget found.");
        }

        return Ok(latestBudget);
    }

    // Add a new budget
    [HttpPost]
    public async Task<ActionResult<Budget>> SetBudget(Budget budget)
    {
        // Check if there's already a budget for the current month
        var existingBudget = await _context.Budgets
            .OrderByDescending(b => b.Month)
            .FirstOrDefaultAsync(b => b.Month.Year == DateTime.Now.Year && b.Month.Month == DateTime.Now.Month);

        if (existingBudget != null)
        {
            // Update the existing budget
            existingBudget.MonthlyBudget = budget.MonthlyBudget;
            _context.Budgets.Update(existingBudget);
            await _context.SaveChangesAsync();
            return Ok(existingBudget);
        }

        // If no budget exists for the current month, create a new one
        _context.Budgets.Add(budget);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBudget), new { id = budget.Id }, budget);
    }


    // Update an existing budget
    [HttpPut]
    public async Task<ActionResult<Budget>> UpdateCurrentMonthBudget(Budget budget)
    {
        // Find the budget for the current month
        var existingBudget = await _context.Budgets
            .OrderByDescending(b => b.Month)
            .FirstOrDefaultAsync(b => b.Month.Year == DateTime.Now.Year && b.Month.Month == DateTime.Now.Month);

        if (existingBudget == null)
        {
            return NotFound("No budget found for the current month.");
        }

        // Update the budget amount
        existingBudget.MonthlyBudget = budget.MonthlyBudget;

        _context.Budgets.Update(existingBudget);
        await _context.SaveChangesAsync();

        return Ok(existingBudget);
    }


    // Get budget progress for the current month
    [HttpGet("progress")]
    public async Task<ActionResult<object>> GetBudgetProgress()
    {
        var currentBudget = await _context.Budgets
            .OrderByDescending(b => b.Month)
            .FirstOrDefaultAsync();

        if (currentBudget == null)
        {
            return NotFound("No budget set for the current month.");
        }

        var startOfMonth = new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1);
        var endOfMonth = startOfMonth.AddMonths(1).AddDays(-1);

        var totalExpenses = await _context.Expenses
            .Where(e => e.Date >= startOfMonth && e.Date <= endOfMonth)
            .SumAsync(e => e.Amount);

        var percentageUsed = currentBudget.MonthlyBudget > 0
            ? (totalExpenses / currentBudget.MonthlyBudget) * 100
            : 0;

        var isOverBudget = totalExpenses > currentBudget.MonthlyBudget;

        return Ok(new
        {
            MonthlyBudget = currentBudget.MonthlyBudget,
            TotalExpenses = totalExpenses,
            PercentageUsed = Math.Round(percentageUsed, 2),
            IsOverBudget = isOverBudget
        });
    }
}
