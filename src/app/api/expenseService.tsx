import axios from "axios";
import { ExpenseData } from "../data/ExpenseData";

const BASE_URL = "https://expense-tracker-a01ca-default-rtdb.firebaseio.com/";
const BASE_JSON = "expenses.json";

export function storeExpense(expense: ExpenseData) {
  axios.post(BASE_URL + BASE_JSON, expense);
}

export async function getExpense() {
  const response = await axios.get(BASE_URL + BASE_JSON);
  const expenses: ExpenseData[] = [];

  for (const key in response.data) {
    const expense: ExpenseData = {
      id: key,
      amount: response.data[key].amount,
      category: response.data[key].category,
      description: response.data[key].description,
    };
    expenses.push(expense);
  }
  return expenses;
}

export async function deleteExpense(id: string) {
  return axios.delete(BASE_URL + `expenses/${id}.json`);
}
