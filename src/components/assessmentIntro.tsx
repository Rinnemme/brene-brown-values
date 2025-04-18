"use client";

import Link from "next/link";

export default function AssessmentIntro() {
  return (
    <div className="fade-in max-w-5xl flex flex-col items-center justify-center text-balance px-8">
      <div className="text-3xl sm:text-4xl w-full text-center mb-8 merriweather">
        What Matters Most to You?
      </div>
      <p className="text-sm sm:text-base text-center text-balance max-w-lg">
        This assessment will cause you to think carefully about your priorities,
        and illuminate what you believe and hold important among Brené Brown's{" "}
        <a
          target="_blank"
          className="text-orange-700 hover:cursor-pointer hover:underline hover:underline-offset-4"
          href="https://brenebrown.com/resources/dare-to-lead-list-of-values/"
        >
          List of Values
        </a>
        . <br></br>
        <br></br>You will first be presented with the full list of values, among
        which you can select as many as you feel are personally important to you
        in some capacity. <br></br>
        <br></br>Then, among those you have chosen, you will narrow down your
        priorities by evaluating your chosen values two values at a time.
      </p>
      <Link
        className="mt-10 py-2 px-3 rounded-lg text-white bg-stone-900 hover:bg-orange-700 transition-all duration-300 hover:cursor-pointer disabled:bg-stone-400 disabled:hover:bg-stone-400 disabled:hover:cursor-default"
        href="/assessment"
      >
        {"Get Started »"}
      </Link>
    </div>
  );
}
