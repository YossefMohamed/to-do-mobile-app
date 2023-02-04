import React from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { ListItem, Avatar, Input } from "@rneui/themed";
import CustomButton from "../components/CustomButton";
import {
  addToTasks,
  changeTaskState,
  deleteTask,
} from "../redux/slices/TasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../constants/colors";
function Home({ navigation }) {
  const [task, setTask] = React.useState("");
  const dispatch = useDispatch();
  const { tasksState } = useSelector((state) => state);
  const onPressAddToTasks = () => {
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
        <Text style={{ marginVertical: 20, fontSize: 20 }}>Pendding :</Text>
        {tasksState.tasks.map(
          (task, idx) =>
            task.state === "pendding" && (
              <ListItem bottomDivider key={idx}>
                <Avatar
                  onPress={() => dispatch(changeTaskState(idx))}
                  rounded
                  icon={{
                    name: "edit",
                    type: "material",
                    size: 20,
                  }}
                  containerStyle={{ backgroundColor: "gold" }}
                />

                <ListItem.Content>
                  <ListItem.Title>{task.content}</ListItem.Title>
                  <ListItem.Subtitle>{task.state}</ListItem.Subtitle>
                </ListItem.Content>
                <Avatar
                  onPress={() => dispatch(deleteTask(idx))}
                  rounded
                  icon={{
                    name: "delete",
                    type: "material",
                    size: 20,
                  }}
                  containerStyle={{ backgroundColor: colors.main }}
                />
              </ListItem>
            )
        )}
        <Text style={{ marginVertical: 20, fontSize: 20 }}>Done :</Text>

        {tasksState.tasks.map(
          (task, idx) =>
            task.state === "done" && (
              <ListItem bottomDivider key={idx}>
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
                  <ListItem.Title>{task.content}</ListItem.Title>
                  <ListItem.Subtitle>{task.state}</ListItem.Subtitle>
                </ListItem.Content>
                <Avatar
                  onPress={() => dispatch(deleteTask(idx))}
                  rounded
                  icon={{
                    name: "delete",
                    type: "material",
                    size: 20,
                  }}
                  containerStyle={{ backgroundColor: colors.main }}
                />
              </ListItem>
            )
        )}
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
