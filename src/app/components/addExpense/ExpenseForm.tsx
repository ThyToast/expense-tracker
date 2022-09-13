import { View, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { Button, Card, Input, Switch, Text } from "@rneui/themed";
import { useId } from "react-id-generator";

import { ExpenseData } from "../../data/ExpenseData";
import { ExpenseContext } from "../../context/ExpenseContext";
import { AddExpenseProp } from "../../data/NavigationData";
import { useNavigation } from "@react-navigation/native";

const ExpenseForm = () => {
  const expenseContext = useContext(ExpenseContext);
  const navigation = useNavigation<AddExpenseProp>();
  const [itemId] = useId();

  const [expense, setExpense] = useState({
    amount: "",
    category: "",
  });

  const [checked, setChecked] = useState(false);

  const updateExpense = (inputType: any, value: any) => {
    setExpense((input) => {
      return {
        ...input,
        [inputType]: value,
      };
    });
  };

  const addExpense = () => {
    const expenseData: ExpenseData = {
      amount: checked ? +expense.amount : -expense.amount,
      id: itemId,
      category: expense.category,
      description: checked ? "Income" : "Expense",
    };
    expenseContext.addExpense(expenseData);
    navigation.goBack();
  };
  return (
    <Card>
      <Input
        placeholder="Enter Amount"
        keyboardType="number-pad"
        onChangeText={updateExpense.bind(this, "amount")}
        value={expense.amount}
      />
      <Input
        placeholder="Enter Category"
        keyboardType="ascii-capable"
        onChangeText={updateExpense.bind(this, "category")}
        value={expense.category}
      />

      <View style={styles.toggleView}>
        <Text style={styles.textExpense}>Expense</Text>
        <Switch value={checked} onValueChange={(value) => setChecked(value)} />
        <Text style={styles.textIncome}>Income</Text>
      </View>

      <Button title="Add Expense" onPress={addExpense} />
    </Card>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  toggleView: {
    paddingLeft: 10,
    flexDirection: "row",
    alignSelf: "center",
    padding: 12,
    height: 50,
  },
  textExpense: {
    marginRight: 10,
    fontWeight: "bold",
  },
  textIncome: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});
