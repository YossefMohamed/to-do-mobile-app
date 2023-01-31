import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import React from "react-native";
import { Button } from "@rneui/base";
const Form = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Login :</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderBottomColor: colors.main,
  },
});

export default Form;
