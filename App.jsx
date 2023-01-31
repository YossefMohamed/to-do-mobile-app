import { StyleSheet, Text, View } from "react-native";
import Form from "./Screens/Form";
import { colors } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Home" component={Home} title="Login" />
        <Stack.Screen
          name="Login"
          component={Form}
          options={{
            header: ({ navigation }) => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderBottomColor: colors.main,
  },
});
