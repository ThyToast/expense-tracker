import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddExpenseScreen from "./src/app/components/AddExpenseScreen";
import DashboardScreen from "./src/app/components/DashboardScreen";
import { RootStackParamList } from "./src/app/data/NavigationData";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
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
  );
}
