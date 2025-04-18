import { createSlice } from "@reduxjs/toolkit";

interface ComparisonState {
  evalIndex: number;
  start: number;
  end: number;
}

const initialState: ComparisonState = {
  evalIndex: 1,
  start: 0,
  end: 0,
};

export const comparisonSlice = createSlice({
  name: "Early Priorities",
  initialState,
  reducers: {
    incrementEvalIndex: (state, action) => {
      const newEnd = action.payload.newEnd;
      state.evalIndex += 1;
      state.start = 0;
      state.end = newEnd;
      return state;
    },
    lowerEndIndex: (state) => {
      const newEnd = Math.floor((state.start + state.end) / 2) - 1;
      state.end = newEnd;
      return state;
    },
    raiseStartIndex: (state) => {
      const newStart = Math.floor((state.start + state.end) / 2) + 1;
      state.start = newStart;
      return state;
    },
  },
});

export const { incrementEvalIndex, lowerEndIndex, raiseStartIndex } =
  comparisonSlice.actions;
export default comparisonSlice.reducer;
