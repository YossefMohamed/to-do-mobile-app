import React from "react";
import { Text, View } from "react-native";
import { ListItem, Avatar, Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import { addToTasks } from "../redux/slices/TasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "native-base";
function Home({ navigation }) {
  const [task, setTask] = React.useState("");
  const dispatch = useDispatch();
  const { tasksState } = useSelector((state) => state);
  const onPressAddToTasks = () => {
    console.log(task);
    task && dispatch(addToTasks({ content: task, state: "pendding" }));
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.addButton}>
        <Input
          placeholder="Add Task"
          value={task}
          onChangeText={(text) => setTask(text)}
          style={styles.addInput}
        />
        <CustomButton title={"Add"} onPressAction={onPressAddToTasks} />
      </View>
      <ScrollView>
        {tasksState.tasks.map((task) => (
          <ListItem bottomDivider>
            {task.state === "pendding" ? (
              <Avatar
                rounded
                icon={{
                  name: "edit",
                  type: "material",
                  size: 20,
                }}
                containerStyle={{ backgroundColor: "gold" }}
              />
            ) : (
              <Avatar
                rounded
                icon={{
                  name: "done",
                  type: "material",
                  size: 26,
                }}
                containerStyle={{ backgroundColor: "green" }}
              />
            )}
            <ListItem.Content>
              <ListItem.Title>{task.content}</ListItem.Title>
              <ListItem.Subtitle>{task.state}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = {
  addButton: {
    marginTop: 10,
  },
};
export default Home;
