export class Expense {
    id: number = 0;
    description: string = '';
    amount: number = 0;
    category: string = '';
    date: string = new Date().toISOString();
  }
  