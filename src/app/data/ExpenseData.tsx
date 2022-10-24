export interface ExpenseData {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
}

export interface ExpenseListData {
  expenses: ExpenseData[];
}
