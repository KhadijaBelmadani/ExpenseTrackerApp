using System;

namespace ExpenseTracker.Models
{
    public class RegisterRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } // Plaintext password provided by the user
    }
}

