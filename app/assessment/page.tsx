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
    <div className="w-full h-full fade-in flex flex-col items-center justify-center py-12 sm:py-20">
      {assessmentStage === 0 && <EarlyPriorities />}
      {assessmentStage === 1 && <Comparison />}
      {assessmentStage === 2 && <Results />}
    </div>
  );
}
