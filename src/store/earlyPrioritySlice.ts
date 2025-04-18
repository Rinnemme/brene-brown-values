"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

function shuffle(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const earlyPrioritySlice = createSlice({
  name: "Early Priorities",
  initialState,
  reducers: {
    addEarlyPriority: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    removeEarlyPriority: (state, action) => {
      state = state.filter((value) => value != action.payload);
      return state;
    },
    resetEarlyPriorities: (state, action) => {
      state = initialState;
      return state;
    },
    shuffleEarlyPriorities: (state) => {
      shuffle(state);
      return state;
    },
  },
});

export const {
  addEarlyPriority,
  removeEarlyPriority,
  resetEarlyPriorities,
  shuffleEarlyPriorities,
} = earlyPrioritySlice.actions;
export default earlyPrioritySlice.reducer;
