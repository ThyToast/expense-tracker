import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./ExpenseSlice";

export const store = configureStore({
  reducer: {
    expenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
