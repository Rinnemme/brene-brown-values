"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const path = usePathname();
  return (
    <div className="w-full sticky bg-[#f5f5f0] top-0 z-10 shadow-sm px-6 py-3 flex justify-start">
      <Link
        href="/"
        className={
          "rounded-md px-3 py-2 hover:cursor-pointer " +
          merriweather.className +
          (path === "/"
            ? " text-orange-700 transition-all duration-200 underline underline-offset-[0.7rem]"
            : " text-black hover:underline hover:underline-offset-[0.7rem] transition-all duration-200  hover:bg-slate-100")
        }
      >
        About
      </Link>
      <Link
        href="/assessment"
        className={
          "rounded-md px-3 py-2 hover:cursor-pointer " +
          merriweather.className +
          (path === "/assessment"
            ? " text-orange-700 transition-all duration-200 underline underline-offset-[0.7rem]"
            : " text-black hover:underline hover:underline-offset-[0.7rem] transition-all duration-200  hover:bg-slate-100")
        }
      >
        Assessment
      </Link>
    </div>
  );
}
