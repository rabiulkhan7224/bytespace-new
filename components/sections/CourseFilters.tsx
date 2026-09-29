"use client";

import {
  SlidersHorizontal,
  BarChart3,
  Shapes,
  ListFilter,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { COURSE_CATEGORIES } from "@/content/courses";

export function CourseFilters() {
  return (
    <div className="flex flex-col gap-5">
      {/* Top controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <FilterButton icon={SlidersHorizontal} label="Filter" />
          <FilterButton icon={BarChart3} label="Level" />
          <FilterButton icon={Shapes} label="Category" />
        </div>

        <FilterButton
          icon={ListFilter}
          label="Most relevant"
          endIcon={ChevronDown}
        />
      </div>

      {/* Category pills */}
      <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {COURSE_CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            className={cn(
              "text-body-s shrink-0 rounded-full px-4 py-2 transition-colors",
              "active" in c && c.active
                ? "bg-secondary-400 font-medium text-neutral-950"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

type FilterButtonProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  endIcon?: React.ComponentType<{ className?: string }>;
};

function FilterButton({
  icon: Icon,
  label,
  endIcon: EndIcon,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className="text-body-s inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-50"
    >
      <Icon className="size-4" />
      {label}
      {EndIcon && <EndIcon className="size-4 text-neutral-400" />}
    </button>
  );
}
