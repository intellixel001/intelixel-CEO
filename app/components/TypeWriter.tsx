"use client";

import { TypewriterEffectSmooth } from "@/components/type-writer-eefect";
import Link from "next/link";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "businesses",
    },
    {
      text: "with",
    },
    {
      text: "Intellixel.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[fit-content] ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="mailto:intellixel.reach@gmail.com?subject=I want to get your service">
        <button className="cursor-pointer w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Email us
        </button>
        </Link>
        <Link href="book-meeting">
        <button className="cursor-pointer w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Book a meeting
        </button>
        </Link>
      </div>
    </div>
  );
}
