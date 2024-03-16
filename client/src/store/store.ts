import { configureStore } from "@reduxjs/toolkit";
import inputsSlice from "./slices/inputs.slice";

export const store = configureStore({
  reducer: {
    inputs: inputsSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
