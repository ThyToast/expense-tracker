import { View, Text } from "react-native";
import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import { ExpenseContext } from "../../context/ExpenseContext";

const DashboardScreen = () => {
  const expenseContext = useContext(ExpenseContext);
  return (
    <View>
      <ExpenseList expense={expenseContext.expenses} />
    </View>
  );
};

export default DashboardScreen;
