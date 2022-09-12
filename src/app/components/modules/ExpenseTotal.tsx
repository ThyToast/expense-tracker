import { StyleSheet, Text } from "react-native";
import { Card } from "@rneui/themed";

const ExpenseTotal = ({ totalExpense }: { totalExpense: string }) => {
  return (
    <Card containerStyle={styles.cardBalance}>
      <Text style={styles.cardText}>Balance: {totalExpense}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardBalance: {
    backgroundColor: "#57db3d",
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
