import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddExpenseScreen from "./src/app/components/AddExpenseScreen";
import DashboardScreen from "./src/app/components/DashboardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Add Expense" component={AddExpenseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
