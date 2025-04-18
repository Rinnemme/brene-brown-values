"use client";

import { configureStore } from "@reduxjs/toolkit";
import earlyPriorityReducer from "./earlyPrioritySlice";
import finalPriorityReducer from "./finalPrioritySlice";
import assessmentStageReducer from "./assessmentStageSlice";
import comparisonReducer from "./comparisonSlice";

export const store = configureStore({
  reducer: {
    assessmentStage: assessmentStageReducer,
    earlyPriorities: earlyPriorityReducer,
    finalPriorities: finalPriorityReducer,
    comparison: comparisonReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
