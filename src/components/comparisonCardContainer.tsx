"useClient";

import { useState } from "react";
import ComparisonCard from "./comparisonCard";

interface CardContainerProps {
  leftTitle: string;
  leftOnClick: () => void;
  rightTitle: string;
  rightOnClick: () => void;
}

export default function CardContainer(props: CardContainerProps) {
  const [fade, setFade] = useState<string>("in");
  const fadeWithOnClick = (func: () => void) => {
    setFade("out");
    setTimeout(() => {
      setFade("in");
      func();
    }, 400);
  };
  return (
    <div
      className={
        (fade === "in" ? "fade-in" : "fade-out") +
        " flex flex-wrap items-center justify-center gap-6"
      }
    >
      <ComparisonCard
        title={props.leftTitle}
        handleClick={() => fadeWithOnClick(props.leftOnClick)}
      />
      <ComparisonCard
        title={props.rightTitle}
        handleClick={() => fadeWithOnClick(props.rightOnClick)}
      />
    </div>
  );
}
