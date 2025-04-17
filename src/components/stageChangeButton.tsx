import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { AppState } from "../store/store";
import { nextStage, previousStage } from "../store/assessmentStageSlice";

interface stageChangeProps {
  condition?: boolean;
  type: "Next" | "Previous";
}

export default function StageChangeButton(props: stageChangeProps) {
  const dispatch = useDispatch();
  const handleClick = () => {
    if (props.type === "Next") {
      dispatch(nextStage());
    } else {
      dispatch(previousStage());
    }
  };

  return (
    <button
      className="mt-10 py-2 px-3 rounded-lg text-white bg-stone-900 hover:bg-orange-700 transition-all duration-300 hover:cursor-pointer disabled:bg-stone-400 disabled:hover:bg-stone-400 disabled:hover:cursor-default"
      disabled={props.condition === false}
      onClick={handleClick}
    >
      {props.type === "Next" ? `${props.type} »` : `« ${props.type}`}
    </button>
  );
}
