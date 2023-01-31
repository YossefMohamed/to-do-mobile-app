import { Alert, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import React from "react";
import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";
const Form = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = () => {
    if (email === "test@test.test" && password === "test") {
      return navigation.reset({
        index: 0,
        routes: [{ name: "Details" }],
      });
    }
    Alert.alert("Error login");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.formTitle}>Login</Text>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        value={password}
      />
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    textAlign: "left",
    fontSize: 35,
  },
});

export default Form;
