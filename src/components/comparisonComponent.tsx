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
import StageChangeButton from "./stageChangeButton";
import CardContainer from "./comparisonCardContainer";
import ProgressBar from "./progressBar";

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
    if (end <= start || Math.floor((start + end) / 2) === 0) {
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
    <>
      {finalPriorities.length < earlyPriorities.length && (
        <div className="flex h-full flex-col justify-center gap-8 items-center max-w-xl px-8 fade-in">
          <h1 className="text-3xl sm:text-4xl merriweather text-center text-pretty">
            Narrow Down Your Values
          </h1>
          <p className="text-balance text-center">
            Now, select which is more personally important to you between the
            two values presented below. You will see the same values pop up
            repeatedly throughout this process; just focus on selecting between
            the two being presented at any given moment.
          </p>
          <div>
            {"start: " +
              start +
              ", end: " +
              end +
              ", mid: " +
              `${Math.floor((start + end) / 2)}`}
          </div>
          <div>{JSON.stringify(finalPriorities)}</div>
          <CardContainer
            leftTitle={earlyPriorities[evalIndex]}
            leftOnClick={evalMore}
            rightTitle={
              end <= start
                ? finalPriorities[start]
                : finalPriorities[Math.floor((start + end) / 2)]
            }
            rightOnClick={evalLess}
          />
          <ProgressBar />
        </div>
      )}
      {finalPriorities.length === earlyPriorities.length && (
        <div className="flex flex-col justify-center items-center max-w-xl px-8 fade-in">
          <h1 className="text-3xl sm:text-4xl merriweather mb-4">Nice Work!</h1>
          <p className="text-balance text-center">
            You have finished sorting out your values. Click the next button to
            view your results!
          </p>
          <StageChangeButton />
        </div>
      )}
    </>
  );
}
