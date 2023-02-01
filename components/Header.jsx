import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import Constants from "expo-constants";
import { useSelector } from "react-redux";
import { Avatar } from "@rneui/themed";
const Header = ({ navigation }) => {
  const { userState } = useSelector((state) => state);

  return (
    <View style={styles.header}>
      <Text style={styles.logo}>ToDo</Text>
      <TouchableOpacity>
        {!userState.user._id ? (
          <MaterialCommunityIcons
            name="login-variant"
            size={30}
            color={colors.tsecondary}
            onPress={() => navigation.navigate("LoginScreen")}
          />
        ) : (
          <Avatar
            size={40}
            rounded
            source={{
              uri: `https://api.dicebear.com/5.x/adventurer-neutral/jpg?seed=${userState.user.name}`,
            }}
            onPress={() => navigation.navigate("ProfileScreen")}
          ></Avatar>
        )}
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
