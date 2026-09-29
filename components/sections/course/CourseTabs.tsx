"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import type { CourseDetail } from "@/content/course-detail";
import { AboutTab } from "./tabs/AboutTab";
import { LessonsTab } from "./tabs/LessonsTab";
import { ReviewsTab } from "./tabs/ReviewsTab";

const TABS = [
  { value: "about", label: "About" },
  { value: "lessons", label: "Lesson" },
  { value: "reviews", label: "Reviews" },
] as const;

type TabValue = (typeof TABS)[number]["value"];

type CourseTabsProps = { course: CourseDetail };

export function CourseTabs({ course }: CourseTabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const active = (searchParams.get("tab") as TabValue) || "about";

  const setTab = useCallback(
    (value: TabValue) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", value);
      router.replace(`${pathname}?${params}`, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Course sections"
        className="flex flex-wrap gap-3"
      >
        {TABS.map((tab) => {
          const selected = tab.value === active;
          return (
            <button
              key={tab.value}
              role="tab"
              id={`tab-${tab.value}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.value}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(tab.value)}
              onKeyDown={(e) => {
                if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
                e.preventDefault();
                const i = TABS.findIndex((t) => t.value === tab.value);
                const next =
                  e.key === "ArrowRight"
                    ? TABS[(i + 1) % TABS.length]
                    : TABS[(i - 1 + TABS.length) % TABS.length];
                setTab(next.value);
                document.getElementById(`tab-${next.value}`)?.focus();
              }}
              className={cn(
                "text-label-s rounded-full px-5 py-2.5 transition-colors",
                selected
                  ? "bg-secondary-400 text-neutral-950"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        className="mt-10 focus:outline-none"
      >
        {active === "about" && <AboutTab course={course} />}
        {active === "lessons" && <LessonsTab course={course} />}
        {active === "reviews" && <ReviewsTab course={course} />}
      </div>
    </div>
  );
}
