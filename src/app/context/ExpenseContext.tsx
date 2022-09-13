import { createContext, useReducer } from "react";
import { ExpenseData } from "../data/ExpenseData";

const temp_data: ExpenseData[] = [
  {
    id: "1",
    amount: 50.0,
    description: "income",
    category: "food",
  },
  {
    id: "2",
    amount: -150.0,
    description: "expense",
    category: "sports",
  },
  {
    id: "3",
    amount: 50.0,
    description: "income",
    category: "misc",
  },
  {
    id: "4",
    amount: -150.0,
    description: "expense",
    category: "food",
  },
  {
    id: "5",
    amount: 50.0,
    description: "income",
    category: "food",
  },
  {
    id: "6",
    amount: -150.0,
    description: "expense",
    category: "food",
  },
  {
    id: "7",
    amount: 50.0,
    description: "income",
    category: "food",
  },
  {
    id: "8",
    amount: -150.0,
    description: "expense",
    category: "food",
  },
  {
    id: "9",
    amount: 50.0,
    description: "income",
    category: "food",
  },
  {
    id: "10",
    amount: -150.0,
    description: "expense",
    category: "food",
  },
  {
    id: "11",
    amount: 50.0,
    description: "income",
    category: "food",
  },
  {
    id: "12",
    amount: -150.0,
    description: "expense",
    category: "food",
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (payload: ExpenseData) => {},
  deleteExpense: (id: string) => {},
});

const expenseReducer = (state: any, action: any) => {
  switch (action.type) {
    case "Add": {
      return [{ ...action.payload }, ...state];
    }

    case "Delete": {
      return state.filter(
        (expense: ExpenseData) => expense.id !== action.payload
      );
    }

    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }: any) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, temp_data);

  const addExpense = (expenseData: ExpenseData) => {
    dispatch({ type: "Add", payload: expenseData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "Delete", payload: id });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
