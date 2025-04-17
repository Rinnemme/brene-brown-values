"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: String[] = [];

export const earlyPrioritySlice = createSlice({
  name: "Early Priorities",
  initialState,
  reducers: {
    addPriority: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removePriority: (state, action) => {
      state = state.filter((value) => value != action.payload);
      return state;
    },
    resetPriorities: (state, action) => {
      state = initialState;
      return state;
    },
  },
});

export const { addPriority, removePriority, resetPriorities } =
  earlyPrioritySlice.actions;
export default earlyPrioritySlice.reducer;
