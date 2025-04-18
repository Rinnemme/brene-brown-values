import { useSelector } from "react-redux";
import type { AppState } from "../store/store";
export default function ProgressBar() {
  const finalPriorities = useSelector(
    (state: AppState) => state.finalPriorities
  );
  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );
  const progress: number = Math.floor(
    (+finalPriorities.length / +earlyPriorities.length) * 100
  );
  return (
    <div
      className="w-80 max-w-full mt-2 h-2 text-orange- rounded-lg transition-all duration-300"
      style={{
        background: `linear-gradient(90deg, #ea580c ${progress}%, #eaeaea ${progress}%)`,
      }}
    ></div>
  );
}
