import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToTasks: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      AsyncStorage.setItem(tasks, JSON.stringify(state.tasks), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("success");
      }).catch((err) => {
        console.log("error is: " + err);
      });
    },
  },
});

export const { addToTasks } = tasksSlice.actions;
