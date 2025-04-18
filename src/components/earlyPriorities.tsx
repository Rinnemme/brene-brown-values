"use client";

import EarlyPriorityList from "@/src/components/earlyPriorityList";
import StageChangeButton from "./stageChangeButton";
import { useSelector } from "react-redux";
import type { AppState } from "../store/store";

export default function Assessment() {
  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );
  const valueList = [
    "Accountability",
    "Achievement",
    "Adaptability",
    "Adventure",
    "Altruism",
    "Ambition",
    "Authenticity",
    "Balance",
    "Beauty",
    "Being the best",
    "Belonging",
    "Career",
    "Caring",
    "Collaboration",
    "Commitment",
    "Community",
    "Compassion",
    "Competence",
    "Confidence",
    "Connection",
    "Contentment",
    "Contribution",
    "Cooperation",
    "Courage",
    "Creativity",
    "Curiosity",
    "Dignity",
    "Diversity",
    "Environment",
    "Efficiency",
    "Equality",
    "Ethics",
    "Excellence",
    "Fairness",
    "Faith",
    "Family",
    "Financial stability",
    "Forgiveness",
    "Freedom",
    "Friendship",
    "Fun",
    "Future generations",
    "Generosity",
    "Giving back",
    "Grace",
    "Gratitude",
    "Growth",
    "Harmony",
    "Health",
    "Home",
    "Honesty",
    "Hope",
    "Humility",
    "Humor",
    "Inclusion",
    "Independence",
    "Initiative",
    "Integrity",
    "Intuition",
    "Job security",
    "Joy",
    "Justice",
    "Kindness",
    "Knowledge",
    "Leadership",
    "Learning",
    "Legacy",
    "Leisure",
    "Love",
    "Loyalty",
    "Making a difference",
    "Nature",
    "Openness",
    "Optimism",
    "Order",
    "Parenting",
    "Patience",
    "Patriotism",
    "Peace",
    "Perseverance",
    "Personal fulfillment",
    "Power",
    "Pride",
    "Recognition",
    "Reliability",
    "Resourcefulness",
    "Respect",
    "Responsibility",
    "Risk-taking",
    "Safety",
    "Security",
    "Self-discipline",
    "Self-expression",
    "Self-respect",
    "Serenity",
    "Service",
    "Simplicity",
    "Spirituality",
    "Sportsmanship",
    "Stewardship",
    "Success",
    "Teamwork",
    "Thrift",
    "Time",
    "Tradition",
    "Travel",
    "Trust",
    "Truth",
    "Understanding",
    "Uniqueness",
    "Usefulness",
    "Vision",
    "Vulnerability",
    "Wealth",
    "Well-being",
    "Wholeheartedness",
    "Wisdom",
  ];

  return (
    <div className="fade-in max-w-5xl w-full flex flex-col items-center justify-center">
      <h1
        className={"text-3xl sm:text-4xl w-full text-center mb-8 merriweather"}
      >
        Early Priorities
      </h1>
      <p className="text-sm sm:text-base text-center text-balance max-w-2xl px-4 mb-12 min-w-96">
        Check off priorities that feel important to you. Don't worry too much
        about which are more or less important than others. If you can narrow it
        down to 15-20, that will speed up the second part of the assessment, but
        don't worry too much about narrowing down for now.
      </p>
      <EarlyPriorityList />
      <StageChangeButton condition={earlyPriorities.length >= 10} />
    </div>
  );
}
