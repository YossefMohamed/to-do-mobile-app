import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { colors } from "../constants/colors";
const CustomButton = ({ title, onPressAction }) => {
  return (
    <TouchableOpacity>
      <Pressable style={styles.button} onPress={onPressAction}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

const styles = {
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
};

export default CustomButton;
