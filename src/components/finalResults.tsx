import { useSelector } from "react-redux";
import { AppState } from "../store/store";

export default function Results() {
  const finalPriorities = useSelector(
    (state: AppState) => state.finalPriorities
  );
  const topTwo = finalPriorities.slice(-2);
  return (
    <div>
      <div className="fade-in max-w-5xl flex flex-col items-center justify-center">
        <h1
          className={
            "text-3xl sm:text-4xl w-full text-center mb-8 merriweather"
          }
        >
          Your Results
        </h1>
        <p className="text-sm sm:text-base text-center text-balance max-w-xl px-8 mb-4">
          Based on your selections throughout the assessment, your two most
          personally important values are:
        </p>
        <div className="shadow-md max-w-96 border mt-4 flex flex-col px-8 py-6 rounded-md justify-center items-center">
          <div className="merriweather text-[1.7rem] font-light text-orange-700 text-center">
            {topTwo[0]}
          </div>
          <div className="merriweather text-xl font-light text-center">&</div>
          <div className="merriweather text-[1.7rem] font-light text-orange-700 text-center">
            {topTwo[1]}
          </div>
        </div>
      </div>
    </div>
  );
}
