"use client";

import { configureStore } from "@reduxjs/toolkit";
import earlyPriorityReducer from "./earlyPrioritySlice";

export const store = configureStore({
  reducer: {
    earlyPriorities: earlyPriorityReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
