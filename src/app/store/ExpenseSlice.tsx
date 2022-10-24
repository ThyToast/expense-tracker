import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import { ExpenseData, ExpenseListData } from "../data/ExpenseData";
import { AppDispatch, RootState } from "./ExpenseStore";

type EditExpensePayload = {
  id: string;
  expenseData: ExpenseData;
};

const initialState: ExpenseListData = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpenseRedux: (state, action: PayloadAction<ExpenseData>) => ({
      ...state,
      expenses: [...state.expenses, action.payload],
    }),
    setExpenseRedux: (state, action: PayloadAction<ExpenseData[]>) => ({
      ...state,
      expenses: action.payload.sort((a, b) => a.date.localeCompare(b.date)),
    }),
    deleteExpenseRedux: (state, action: PayloadAction<string>) => ({
      ...state,
      expenses: state.expenses.filter((item) => item.id != action.payload),
    }),
    updateExpenseRedux: (state, action: PayloadAction<EditExpensePayload>) => {
      const currentIndex = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatedItem = {
        ...state.expenses[currentIndex],
        ...action.payload.expenseData,
      };

      const updatedExpenses = [...state.expenses];
      updatedExpenses[currentIndex] = updatedItem;

      return { ...state, expenses: updatedExpenses };
    },
  },
});

export const {
  addExpenseRedux,
  setExpenseRedux,
  deleteExpenseRedux,
  updateExpenseRedux,
} = expenseSlice.actions;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default expenseSlice.reducer;
