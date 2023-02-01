import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signin } from "../redux/slices/userSlice";
const LoginForm = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { userState } = useSelector((state) => state);
  React.useEffect(() => {
    userState.error.length &&
      userState.error.map((error) => {
        Toast.show({
          type: "error",
          text1: "Message",
          autoHide: true,
          text2: error.field
            ? error.field + ": " + error.message
            : error.message,
          visibilityTime: 2000,
        });
      });

    if (userState.user._id) {
      navigation.navigate("HomeScreen");
    }
  }, [userState.loading, userState.error, userState.user]);

  const login = async () => {
    dispatch(signin({ email, password }));
  };
  const navigateToSignup = () => {
    navigation.navigate("SignupScreen");
  };
  return (
    <View style={styles.container}>
      <Toast />

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
        <CustomButton
          title={
            userState.loading ? (
              <MaterialCommunityIcons name="loading" />
            ) : (
              "Login"
            )
          }
          onPressAction={login}
        />
        <View style={styles.signupTitle}>
          <Text style={styles.signupTitleText}>OR Signup</Text>
        </View>
        <CustomButton title={"Signup"} onPressAction={navigateToSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    textAlign: "center",
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
  signupTitle: {
    margin: 10,
  },
  signupTitleText: {
    textAlign: "center",
  },
});

export default LoginForm;
