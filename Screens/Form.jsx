import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { colors } from "../constants/colors";
import React from "react";
import { Input } from "@rneui/themed";
const Form = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const login = () => {
    if (email === "test@test.test" && password === "test") {
      return navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
    Alert.alert("Error login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
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
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    textAlign: "left",
    fontSize: 35,
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    flex: 1,

    justifyContent: "center",
    padding: 5,
    columnGap: 150,
  },
  formContainer: {
    height: "45%",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.main,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Form;
