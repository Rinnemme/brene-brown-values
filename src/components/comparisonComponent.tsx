"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import type { AppState } from "../store/store";
import {
  insertFinalPriority,
  setFinalPriorities,
} from "../store/finalPrioritySlice";
import ComparisonCard from "./comparisonCard";
import {
  incrementEvalIndex,
  lowerEndIndex,
  raiseStartIndex,
} from "../store/comparisonSlice";

export default function Comparison() {
  const dispatch = useDispatch();
  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );
  const finalPriorities = useSelector(
    (state: AppState) => state.finalPriorities
  );
  const { start, end, evalIndex } = useSelector(
    (state: AppState) => state.comparison
  );

  useEffect(() => {
    if (finalPriorities.length === 0) {
      dispatch(setFinalPriorities([earlyPriorities[0]]));
    }
  }, []);

  const evalMore = () => {
    if (end <= start) {
      dispatch(
        insertFinalPriority({
          insertionIndex: start + 1,
          value: earlyPriorities[evalIndex],
        })
      );
      dispatch(incrementEvalIndex({ newEnd: finalPriorities.length }));
    } else {
      dispatch(raiseStartIndex());
    }
  };

  const evalLess = () => {
    if (end <= start) {
      dispatch(
        insertFinalPriority({
          insertionIndex: start,
          value: earlyPriorities[evalIndex],
        })
      );
      dispatch(incrementEvalIndex({ newEnd: finalPriorities.length }));
    } else {
      dispatch(lowerEndIndex());
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center max-w-xl px-8">
      <h1 className="text-2xl sm:text-3xl merriweather">
        Sort Your Priorities
      </h1>
      <p className="text-balance text-center">
        Select between the two values presented below. You will see the same
        values pop up repeatedly throughout this process; just focus on
        selecting between the two currently presented.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <ComparisonCard
          title={earlyPriorities[evalIndex]}
          handleClick={evalMore}
        />
        <ComparisonCard
          title={
            end <= start
              ? finalPriorities[start]
              : finalPriorities[Math.floor((start + end) / 2)]
          }
          handleClick={evalLess}
        />
      </div>
    </div>
  );
}
