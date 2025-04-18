import { useDispatch, useSelector } from "react-redux";
import type { AppState } from "../store/store";
import { nextStage } from "../store/assessmentStageSlice";
import { shuffleEarlyPriorities } from "../store/earlyPrioritySlice";

interface stageChangeProps {
  condition?: boolean;
}

export default function StageChangeButton(props: stageChangeProps) {
  const currentStage = useSelector((state: AppState) => state.assessmentStage);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!currentStage) {
      dispatch(shuffleEarlyPriorities());
    }
    dispatch(nextStage());
  };

  return (
    <button
      className="mt-10 py-2 px-3 rounded-lg text-white bg-stone-900 hover:bg-orange-700 transition-all duration-300 hover:cursor-pointer disabled:bg-stone-400 disabled:hover:bg-stone-400 disabled:hover:cursor-default"
      disabled={props.condition === false}
      onClick={handleClick}
    >
      {"Next »"}
    </button>
  );
}
