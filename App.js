import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to aaa working on your app!</Text>
      <Button style={Button} onPress={() => alert("x")}>
        Click on me
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#red",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    flex: 1,
  },
});
