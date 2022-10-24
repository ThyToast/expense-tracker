import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./src/app/data/NavigationData";
import AddExpenseScreen from "./src/app/components/addExpense/AddExpenseScreen";
import DashboardScreen from "./src/app/components/dashboard/DashboardScreen";
import ExpenseContextProvider from "./src/app/context/ExpenseContext";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen
            name="AddExpense"
            component={AddExpenseScreen}
            options={{ title: "Add Expense" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ExpenseContextProvider>
  );
}
