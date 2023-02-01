import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { signup } from "../redux/slices/userSlice";
const SignupForm = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
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
    dispatch(signup({ email, password, passwordConfirm, name }));
  };
  const navigateToSignup = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.container}>
      <Toast />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Signup</Text>
        <Input
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
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

        <Input
          placeholder="Password"
          onChangeText={(password) => setPasswordConfirm(password)}
          value={passwordConfirm}
          secureTextEntry={true}
        />
        <CustomButton
          title={
            userState.loading ? (
              <MaterialCommunityIcons name="loading" />
            ) : (
              "Signup"
            )
          }
          onPressAction={login}
        />
        <View style={styles.signupTitle}>
          <Text style={styles.signupTitleText}>OR Signin</Text>
        </View>
        <CustomButton title={"Login"} onPressAction={navigateToSignup} />
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
  },
  formContainer: {
    justifyContent: "space-between",
  },
  signupTitle: {
    margin: 10,
  },
  signupTitleText: {
    textAlign: "center",
  },
});

export default SignupForm;
