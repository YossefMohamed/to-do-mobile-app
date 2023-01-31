import { StyleSheet, Text, View } from "react-native";
import Form from "./Screens/Form";
import { colors } from "./constants/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "@rneui/base";

const Stack = createNativeStackNavigator();

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Form} />
        <Stack.Screen name="Details" component={DetailsScreen} />
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
