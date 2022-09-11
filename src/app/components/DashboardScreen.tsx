import { View, Text } from "react-native";
import React from "react";
import ExpenseList from "./modules/ExpenseList";
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
    category: "food",
  },
];

const DashboardScreen = () => {
  return (
    <View>
      <ExpenseList expense={temp_data} />
    </View>
  );
};

export default DashboardScreen;
