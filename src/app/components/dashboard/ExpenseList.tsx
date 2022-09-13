import { View, FlatList, StyleSheet } from "react-native";
import { FAB } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { ExpenseData } from "../../data/ExpenseData";
import { returnCurrency } from "../../utils/currencyUtil";
import { DashboardProp } from "../../data/NavigationData";

import ExpenseItem from "./ExpenseItem";
import ExpenseTotal from "./ExpenseTotal";

const displayExpenseItem = ({ item }: { item: ExpenseData }) => {
  return <ExpenseItem {...item} />;
};

const ExpenseList = ({ expense }: any) => {
  const navigation = useNavigation<DashboardProp>();
  const totalExpense: number = expense.reduce(
    (sum: number, expense: ExpenseData) => {
      return sum + expense.amount;
    },
    0
  );

  const addExpense = () => {
    navigation.navigate("AddExpense");
  };

  return (
    <View>
      <ExpenseTotal totalExpense={returnCurrency(totalExpense)} />
      <FlatList
        style={styles.expenseList}
        data={expense}
        renderItem={displayExpenseItem}
        keyExtractor={(item) => item.id}
      />
      <FAB
        onPress={addExpense}
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
