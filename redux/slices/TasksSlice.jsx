import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addToTasks: (state, action) => {
      console.log(action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { addToTasks } = tasksSlice.actions;
