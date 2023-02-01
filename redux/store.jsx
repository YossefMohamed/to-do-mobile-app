import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { themeSlice } from "./slices/ThemeSlice";

export const store = configureStore({
  reducer: {
    themeState: themeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  devTools: process.env.NODE_ENV !== "production",
});
