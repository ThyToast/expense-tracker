import { View, Text, FlatList } from "react-native";
import { ExpenseData } from "../../data/ExpenseData";

import React from "react";

const displayExpenseItem = ({ item }: { item: ExpenseData }) => {
  return <Text>{item.category}</Text>;
};

const ExpenseList = ({ expense }: any) => {
  const totalExpense = expense.reduce((sum: number, expense: ExpenseData) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>${totalExpense.toFixed(2)}</Text>
      <FlatList
        data={expense}
        renderItem={displayExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;
