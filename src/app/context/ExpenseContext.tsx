import { createContext, useReducer } from "react";
import { ExpenseData } from "../data/ExpenseData";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (payload: ExpenseData) => {},
  setExpense: (payload: ExpenseData[]) => {},
  deleteExpense: (id: string) => {},
});

function expenseReducer(state: any, action: any) {
  switch (action.type) {
    case "Add": {
      return [{ ...action.payload }, ...state];
    }

    case "Set": {
      return action.payload;
    }

    case "Delete": {
      return state.filter(
        (expense: ExpenseData) => expense.id !== action.payload
      );
    }

    default:
      return state;
  }
}

const ExpenseContextProvider = ({ children }: any) => {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expenseData: ExpenseData) => {
    dispatch({ type: "Add", payload: expenseData });
  };

  const setExpense = (expenseData: ExpenseData[]) => {
    dispatch({ type: "Set", payload: expenseData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "Delete", payload: id });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    setExpense,
    deleteExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
