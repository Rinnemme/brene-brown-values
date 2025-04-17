"use client";

import EarlyPriorityList from "@/src/components/earlyPriorityList";
import { useSelector } from "react-redux";
import type { AppState } from "@/src/store/store";

export default function Home() {
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

  const earlyPriorities = useSelector(
    (state: AppState) => state.earlyPriorities
  );

  return (
    <div className="max-w-5xl w-full flex flex-col items-center justify-center">
      <h1 className={"text-5xl w-full text-center mb-8 merriweather"}>
        Early Priorities
      </h1>
      <p className="text-base text-center text-balance max-w-2xl mb-12 min-w-96">
        Check off priorities that feel important to you. Don't worry too much
        about which are more or less important than others. If you can narrow it
        down to 15-20, that will speed up the second part of the assessment, but
        don't worry too much about narrowing down for now.
      </p>
      {/* {JSON.stringify(earlyPriorities)} */}
      <EarlyPriorityList />
    </div>
  );
}
