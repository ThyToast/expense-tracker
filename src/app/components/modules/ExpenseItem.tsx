import { StyleSheet, Text, View } from "react-native";
import { returnCurrency } from "../../utils/currencyUtil";
import { Card } from "@rneui/themed";
import { ExpenseData } from "../../data/ExpenseData";

const ExpenseItem = ({ category, amount }: ExpenseData) => {
  return (
    <Card wrapperStyle={{ flexDirection: "row" }}>
      <Text>{category}</Text>
      <Text style={styles.expenseAmount}>{returnCurrency(amount)}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  expenseAmount: {
    flex: 1,
    textAlign: "right",
  },
});

export default ExpenseItem;
