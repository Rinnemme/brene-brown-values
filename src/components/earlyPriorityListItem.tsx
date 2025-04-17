"use client";

import { useDispatch } from "react-redux";
import { addPriority, removePriority } from "../store/earlyPrioritySlice";
import { useState } from "react";

export default function earlyPriorityListItem({ value }: { value: string }) {
  const [complete, setComplete] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleCheck = () => {
    if (complete) {
      setComplete(false);
      dispatch(removePriority(value));
    } else {
      setComplete(true);
      dispatch(addPriority(value));
    }
  };

  return (
    <div className="flex gap-2 px-2 py-1 w-52">
      <input
        type="checkbox"
        className="hover:cursor-pointer accent-slate-800"
        onChange={handleCheck}
        checked={complete}
      ></input>
      <div>{value}</div>
    </div>
  );
}
