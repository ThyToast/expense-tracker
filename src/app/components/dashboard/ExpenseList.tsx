import { View, FlatList, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";

import { ExpenseData } from "../../data/ExpenseData";
import { DashboardProp } from "../../data/NavigationData";
import ExpenseItem from "./ExpenseItem";
import ExpenseTotal from "./ExpenseTotal";
import { getExpense } from "../../api/expenseService";
import { ExpenseContext } from "../../context/ExpenseContext";

function displayExpenseItem({ item }: { item: ExpenseData }) {
  return <ExpenseItem {...item} />;
}

const ExpenseList = () => {
  const expenseContext = useContext(ExpenseContext);
  const expenseList = expenseContext.expenses;
  const navigation = useNavigation<DashboardProp>();
  const controller = new AbortController();

  useEffect(() => {
    returnExpense();
    return () => {
      // cleanup function to prevent memeory leaks when unmounting occurs
      controller.abort();
      console.log("Unmounted: " + controller.signal.aborted);
    };
  }, []);

  async function returnExpense() {
    try {
      const expenses = await getExpense(controller.signal);
      expenseContext.setExpense(expenses);
    } catch (error) {
      alert("Unable to retrieve expenses");
    }
  }

  function toAddExpense() {
    navigation.navigate("AddExpense");
  }

  return (
    <View>
      <ExpenseTotal expenseList={expenseList} />
      <FlatList
        style={styles.expenseList}
        data={expenseList}
        renderItem={displayExpenseItem}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={toAddExpense}
        icon={{ name: "add", color: "white" }}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  expenseList: {
    marginTop: 10,
    marginBottom: 10,
    height: 540,
  },
});

export default ExpenseList;
