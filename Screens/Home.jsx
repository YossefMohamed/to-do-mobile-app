import React from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/base";
import { ListItem, Avatar, Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
function Home({ navigation }) {
  const [task, setTask] = React.useState("");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.addButton}>
        <Input
          placeholder="Add Task"
          value={task}
          onChange={(text) => setTask(text)}
          style={styles.addInput}
        />
        <CustomButton title={"Add"} />
      </View>

      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: "done",
            type: "material",
            size: 26,
          }}
          containerStyle={{ backgroundColor: "green" }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba King</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Avatar
          rounded
          icon={{
            name: "edit",
            type: "material",
            size: 20,
          }}
          containerStyle={{ backgroundColor: "gold" }}
        />
        <ListItem.Content>
          <ListItem.Title>Alba Kinsg</ListItem.Title>
          <ListItem.Subtitle>Vice President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}

const styles = {
  addButton: {
    display: "flex",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
};
export default Home;
