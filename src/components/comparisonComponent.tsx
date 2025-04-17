"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import type { AppState } from "../store/store";
import { shuffleEarlyPriorities } from "../store/earlyPrioritySlice";
import {
  insertFinalPriority,
  setFinalPriorities,
} from "../store/finalPrioritySlice";

export default function Comparison() {
  const dispatch = useDispatch();
  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );
  const finalPriorities = useSelector(
    (state: AppState) => state.finalPriorities
  );
  const [evalIndex, setEvalIndex] = useState<number>(1);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);

  useEffect(() => {
    dispatch(shuffleEarlyPriorities());
    if (finalPriorities.length === 0) {
      dispatch(setFinalPriorities([earlyPriorities[0]]));
    }
  }, []);

  function incrementEvalIndex() {
    setEvalIndex(evalIndex + 1);
    setStart(0);
    setEnd(finalPriorities.length - 1);
  }

  const evalMore = () => {
    if (end <= start) {
      dispatch(
        insertFinalPriority({
          insertionIndex: start + 1,
          value: earlyPriorities[evalIndex],
        })
      );
      incrementEvalIndex();
    } else {
      const newStart = Math.floor((start + end) / 2) + 1;
      setStart(newStart);
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
      incrementEvalIndex();
    } else {
      const newEnd = Math.floor((start + end) / 2) - 1;
      setEnd(newEnd);
    }
  };

  return (
    <div>
      {JSON.stringify(finalPriorities)}
      <div onClick={evalMore}>{earlyPriorities[evalIndex]}</div>
      <div onClick={evalLess}>
        {end <= start
          ? finalPriorities[start]
          : finalPriorities[Math.floor((start + end) / 2)]}
      </div>
    </div>
  );
}
