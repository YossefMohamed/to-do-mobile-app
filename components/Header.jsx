import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../constants/colors";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>To-Do</Text>

      <Ionicons name="menu" size={32} color={colors.tmain} />
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
    marginTop: 25,
  },
  logo: {
    fontSize: 25,
    color: colors.tsecondary,
    fontWeight: "bold",
  },
};
export default Header;
