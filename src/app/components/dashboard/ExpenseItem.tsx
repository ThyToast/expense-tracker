import { useContext } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { Card, Icon } from "@rneui/themed";
import { SwipeRow } from "react-native-swipe-list-view";

import { ExpenseContext } from "../../context/ExpenseContext";
import { ExpenseData } from "../../data/ExpenseData";
import { returnCurrency } from "../../utils/currencyUtil";
import { deleteExpense } from "../../api/expenseService";

//simple logic to dynamically add an icon
function returnIcon(category: string) {
  switch (category.toLowerCase()) {
    case "food":
      return "utensils";

    case "sports":
      return "football-ball";

    default:
      return "money-check-alt";
  }
}

const ExpenseItem = ({ id, category, amount }: ExpenseData) => {
  const expenseContext = useContext(ExpenseContext);

  async function deleteItem(id: string) {
    expenseContext.deleteExpense(id);
    await deleteExpense(id);
  }

  return (
    //@ts-ignore
    <SwipeRow
      disableRightSwipe={true}
      rightOpenValue={-70}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
    >
      <View>
        <Card containerStyle={styles.backCard}>
          <Pressable
            style={styles.cardDelete}
            android_ripple={{ color: "grey" }}
            onPress={() => {
              deleteItem(id);
            }}
          >
            <Text style={styles.textDelete}>Delete</Text>
          </Pressable>
        </Card>
      </View>

      <View>
        <Card containerStyle={{ padding: 0 }}>
          <Pressable
            style={styles.cardSwipe}
            android_ripple={{ color: "grey" }}
          >
            <Icon
              reverse
              size={20}
              name={returnIcon(category)}
              type="font-awesome-5"
              color="#00b9ff"
            />
            <Text style={styles.expenseText}>{category}</Text>
            <Text style={styles.expenseAmount}>{returnCurrency(amount)}</Text>
          </Pressable>
        </Card>
      </View>
    </SwipeRow>
  );
};

const styles = StyleSheet.create({
  expenseAmount: {
    flex: 1,
    marginVertical: 20,
    textAlign: "right",
  },
  expenseText: {
    marginVertical: 20,
    marginLeft: 10,
  },
  backCard: {
    height: 100,
    backgroundColor: "red",
    padding: 0,
  },
  textDelete: {
    justifyContent: "flex-end",
    textAlign: "right",
    color: "white",
  },
  cardDelete: {
    paddingVertical: 30,
    height: 100,
    paddingRight: 15,
  },
  cardSwipe: { flexDirection: "row", padding: 15 },
});

export default ExpenseItem;
