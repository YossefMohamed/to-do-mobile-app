import Form from "./Screens/Form";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
