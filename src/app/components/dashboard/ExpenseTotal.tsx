import { StyleSheet, Text } from "react-native";
import { Card } from "@rneui/themed";

import { returnCurrency } from "../../utils/currencyUtil";
import { ExpenseData } from "../../data/ExpenseData";

const ExpenseTotal = ({ expenseList }: { expenseList: ExpenseData[] }) => {
  const totalExpense: number = expenseList.reduce(
    (sum: number, expense: ExpenseData) => {
      return sum + expense.amount;
    },
    0
  );

  function colorState(expenseAmount: number) {
    if (expenseAmount < 0) return "red";
    if (expenseAmount >= 0) return "#57db3d";
  }

  return (
    <Card
      containerStyle={[
        styles.cardBalance,
        { backgroundColor: colorState(totalExpense) },
      ]}
    >
      <Text style={styles.cardText}>
        Balance: {returnCurrency(totalExpense)}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardBalance: {
    borderRadius: 20,
    shadowColor: "#171717",
    elevation: 5,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  cardText: { fontWeight: "500", fontSize: 20, color: "white" },
});

export default ExpenseTotal;
