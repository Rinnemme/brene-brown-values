"use client";

interface ComparisonCardProps {
  title: string;
  handleClick: () => void;
}

export default function ComparisonCard(props: ComparisonCardProps) {
  return (
    <div
      onClick={props.handleClick}
      className="p-4 w-44 h-28 flex rounded-lg hover:text-orange-700 hover:cursor-pointer hover:scale-105 hover:shadow-md border border-stone-800 hover:border-orange-800 hover:bg-orange-100 active:bg-orange-200 transition-all duration-300 items-center justify-center"
    >
      <p className="text-lg font-light hover:cursor-pointer text-inherit merriweather text-center h-fit">
        {props.title}
      </p>
    </div>
  );
}
