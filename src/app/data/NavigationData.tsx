import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Dashboard: undefined;
  AddExpense: undefined;
};
export type DashboardProp = NativeStackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;
export type AddExpenseProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddExpense"
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
