import { useSelector } from "react-redux";
import { AppState } from "../store/store";

export default function Results() {
  const finalPriorities = useSelector(
    (state: AppState) => state.finalPriorities
  );
  return (
    <div>
      <div className="fade-in max-w-5xl flex flex-col gap-2 items-center justify-center">
        <h1
          className={
            "text-3xl sm:text-4xl w-full text-center mb-8 merriweather"
          }
        >
          Your Results
        </h1>
        <p className="text-sm sm:text-base text-center text-balance max-w-xl px-8 mb-4">
          You have finished this Brené Brown values asssement. Based upon your
          selections over the course of this project, your most cherished values
          are:
        </p>
        {finalPriorities.slice(-2).map((value) => {
          return (
            <div className="mt-2 merriweather text-2xl text-orange-700">
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
