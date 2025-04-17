"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  addEarlyPriority,
  removeEarlyPriority,
} from "../store/earlyPrioritySlice";
import { useState } from "react";
import type { AppState } from "../store/store";

export default function earlyPriorityListItem({ value }: { value: string }) {
  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );
  const [complete, setComplete] = useState<boolean>(
    earlyPriorities.includes(value)
  );
  const dispatch = useDispatch();
  const handleCheck = () => {
    if (complete) {
      setComplete(false);
      dispatch(removeEarlyPriority(value));
    } else {
      setComplete(true);
      dispatch(addEarlyPriority(value));
    }
  };

  return (
    <div className="w-48 sm:w-52">
      <div
        className="flex w-fit gap-2 rounded-md px-2 py-1 hover:cursor-pointer hover:ring-1 hover:ring-slate-200 hover:scale-105 transition-all duration-200 hover:shadow-md"
        onClick={handleCheck}
      >
        <input
          type="checkbox"
          className="hover:cursor-pointer accent-orange-700"
          checked={complete}
        ></input>
        <div className="hover:cursor-pointer text-sm sm:text-base">{value}</div>
      </div>
    </div>
  );
}
