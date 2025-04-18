"use client";

import EarlyPriorities from "@/src/components/earlyPriorities";
import Comparison from "@/src/components/comparisonComponent";
import { useSelector } from "react-redux";
import type { AppState } from "@/src/store/store";
import Results from "@/src/components/finalResults";

export default function Home() {
  const assessmentStage = useSelector(
    (state: AppState) => state.assessmentStage
  );
  return (
    <div className="w-full h-fit min-h-dvh fade-in absolute px-2 flex flex-col items-center justify-center pt-28 pb-28 sm:pt-32 sm:pb-32">
      {assessmentStage === 0 && <EarlyPriorities />}
      {assessmentStage === 1 && <Comparison />}
      {assessmentStage === 2 && <Results />}
    </div>
  );
}
