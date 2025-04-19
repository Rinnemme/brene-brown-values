import EarlyPriorityListItem from "./earlyPriorityListItem";

export default function eartlyPriorityList() {
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
    <div className="fade-in flex flex-wrap justify-between gap-y-2 sm:gap-x-2 ps-4 sm:px-8">
      {valueList.map((value) => {
        return <EarlyPriorityListItem value={value} />;
      })}
    </div>
  );
}
