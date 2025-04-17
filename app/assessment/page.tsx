"use client";

import EarlyPriorities from "@/src/components/earlyPriorities";
import Comparison from "@/src/components/comparisonComponent";
import { useSelector } from "react-redux";
import type { AppState } from "@/src/store/store";

export default function Home() {
  const assessmentStage = useSelector(
    (state: AppState) => state.assessmentStage
  );
  return (
    <div className="w-full px- py-12 flex flex-col items-center justify-center mb-20">
      {assessmentStage === 0 && <EarlyPriorities />}
      {assessmentStage === 1 && <Comparison />}
    </div>
  );
}
