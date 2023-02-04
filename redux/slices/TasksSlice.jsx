import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToTasks: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    changeTaskState: (state, action) => {
      state.tasks[action.payload] = {
        ...state.tasks[action.payload],
        state: "done",
      };
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addToTasks, changeTaskState, deleteTask } = tasksSlice.actions;
