import {configureStore} from "@reduxjs/toolkit";
import {pushReducer} from "../components/PushSlice";

export const store = configureStore({
  reducer: {
    calculator: pushReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;