import { createContext, useReducer } from "react";

import { ExpenseData, ExpenseListData } from "../data/ExpenseData";

type ExpenseReducerAction =
  | { type: "Add"; payload: ExpenseData }
  | { type: "Set"; payload: ExpenseData[] }
  | { type: "Delete"; payload: string }
  | { type: "Update"; payload: { id: string; expenseData: ExpenseData } };

const initialState: ExpenseListData = {
  expenses: [],
};

export const ExpenseContext = createContext({
  expenses: initialState.expenses,
  addExpense: (_payload: ExpenseData) => {},
  setExpense: (_payload: ExpenseData[]) => {},
  deleteExpense: (_id: string) => {},
  updateExpense: (_id: string, _payload: ExpenseData) => {},
});

function expenseReducer(state: ExpenseData[], action: ExpenseReducerAction) {
  switch (action.type) {
    case "Add": {
      return [{ ...action.payload }, ...state];
    }

    case "Set": {
      return action.payload.sort((a, b) => b.date.localeCompare(a.date));
    }

    case "Delete": {
      return state.filter((expense) => expense.id !== action.payload);
    }

    case "Update": {
      const currentIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatedItem = {
        ...state[currentIndex],
        ...action.payload.expenseData,
      };

      const updatedExpenses = [...state];
      updatedExpenses[currentIndex] = updatedItem;

      return updatedExpenses;
    }

    default:
      return state;
  }
}

const ExpenseContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [expenseState, dispatch] = useReducer(
    expenseReducer,
    initialState.expenses
  );

  const addExpense = (expenseData: ExpenseData) => {
    dispatch({ type: "Add", payload: expenseData });
  };

  const setExpense = (expenseData: ExpenseData[]) => {
    dispatch({ type: "Set", payload: expenseData });
  };

  const deleteExpense = (id: string) => {
    dispatch({ type: "Delete", payload: id });
  };

  const updateExpense = (id: string, expenseData: ExpenseData) => {
    dispatch({ type: "Update", payload: { id, expenseData } });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    setExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
