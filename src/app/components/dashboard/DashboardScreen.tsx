import { View } from "react-native";
import React, { useContext, useEffect } from "react";

import ExpenseList from "./ExpenseList";
import { ExpenseContext } from "../../context/ExpenseContext";
import { getExpense } from "../../api/expenseService";

const DashboardScreen = () => {
  const expenseContext = useContext(ExpenseContext);

  useEffect(() => {
    async function returnExpense() {
      try {
        const expenses = await getExpense();
        expenseContext.setExpense(expenses);
      } catch (error) {
        alert("Unable to retrieve expenses");
      }
    }
    returnExpense();
  }, []);

  return (
    <View>
      <ExpenseList expense={expenseContext.expenses} />
    </View>
  );
};

export default DashboardScreen;
