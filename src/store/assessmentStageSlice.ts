"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;

export const assessmentStageSlice = createSlice({
  name: "AssessmentStage",
  initialState,
  reducers: {
    nextStage: (state) => {
      state = state + 1;
      return state;
    },
  },
});

export const { nextStage } = assessmentStageSlice.actions;
export default assessmentStageSlice.reducer;
