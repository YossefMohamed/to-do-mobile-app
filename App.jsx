import LoginForm from "./Screens/LoginForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Text, FlatList } from "react-native";
import SignUp from "./Screens/SignupForm";
import SignupForm from "./Screens/SignupForm";
import Resume from "./Screens/Profile";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} />,
            }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginForm}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} />,
            }}
          />

          <Stack.Screen
            name="SignupScreen"
            component={SignupForm}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} />,
            }}
          />

          <Stack.Screen
            name="ProfileScreen"
            component={Resume}
            options={{
              header: ({ navigation }) => <Header navigation={navigation} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     borderBottomWidth: 5,
//     paddingVertical: 5,
//     paddingHorizontal: 5,
//     borderBottomColor: colors.main,
//   },
// });
