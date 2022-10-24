import axios from "axios";
import { ExpenseData } from "../data/ExpenseData";

const BASE_URL = "https://expense-tracker-a01ca-default-rtdb.firebaseio.com/";
const BASE_JSON = "expenses-v2.json";

export function storeExpense(expense: ExpenseData) {
  axios.post(BASE_URL + BASE_JSON, expense);
}

export async function getExpense(signal: AbortSignal) {
  const response = await axios.get<ExpenseData[]>(BASE_URL + BASE_JSON, {
    signal,
  });
  const expenses: ExpenseData[] = [];

  for (const key in response.data) {
    const expense: ExpenseData = {
      id: key,
      amount: response.data[key].amount,
      category: response.data[key].category,
      description: response.data[key].description,
      date: response.data[key].date,
    };
    expenses.push(expense);
  }
  return expenses;
}

export async function deleteExpense(id: string) {
  return axios.delete(`${BASE_URL}expenses-v2/${id}.json`);
}

export async function updateExpense(id: string, expense: ExpenseData) {
  return axios.put(`${BASE_URL}expenses-v2/${id}.json`, expense);
}
