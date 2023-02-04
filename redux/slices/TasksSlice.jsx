import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
const initialState = async () => {
  return {
    tasks: await getData,
  };
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToTasks: async (state, action) => {
      state.tasks = [...state.tasks, action.payload];
      await AsyncStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("tasks");
    if (value !== null) {
      return [];
    }
  } catch (e) {
    return [];
  }
};

export const { addToTasks } = tasksSlice.actions;
