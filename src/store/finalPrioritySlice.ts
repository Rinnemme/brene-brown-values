"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

export const finalPrioritySlice = createSlice({
  name: "Final Priorities",
  initialState,
  reducers: {
    insertFinalPriority: (state, action) => {
      const insertionIndex: number = action.payload.insertionIndex;
      const value: string = action.payload.value;
      state.splice(insertionIndex, 0, value);
      return state;
    },
    setFinalPriorities: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { insertFinalPriority, setFinalPriorities } =
  finalPrioritySlice.actions;
export default finalPrioritySlice.reducer;
