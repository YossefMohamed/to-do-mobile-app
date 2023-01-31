import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import Constants from "expo-constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>ToDo</Text>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="login-variant"
          size={30}
          color={colors.tsecondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  header: {
    height: 80,
    backgroundColor: colors.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: Constants.statusBarHeight,
  },
  logo: {
    fontSize: 25,
    color: colors.tsecondary,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};
export default Header;
