import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { changeToDarkTheme } from "../redux/slices/ThemeSlice";
import { signin } from "../redux/slices/userSlice";
import axios from "axios";
const Form = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);
  console.log(userState);
  const login = async () => {
    dispatch(signin({ email, password }));
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
        <CustomButton title="Login" onPressAction={login} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    textAlign: "left",
    fontSize: 40,
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
    height: "55%",
    justifyContent: "space-between",
  },
});

export default Form;
