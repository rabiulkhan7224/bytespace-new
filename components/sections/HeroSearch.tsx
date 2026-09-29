"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO } from "@/content/hero";

type HeroSearchProps = {
  className?: string;
};

export function HeroSearch({ className }: HeroSearchProps) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn("flex w-full items-center gap-3", className)}
    >
      <div className="relative flex-1">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-neutral-400"
        />
        <input
          type="search"
          name="q"
          placeholder={HERO.search.placeholder}
          aria-label="Search courses"
          className="text-body-m h-14 w-full rounded-full bg-white pl-14 pr-5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
        />
      </div>

      <button
        type="submit"
        className="text-label-m h-14 shrink-0 rounded-full bg-secondary-400 px-7 text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {HERO.search.cta}
      </button>
    </form>
  );
}
