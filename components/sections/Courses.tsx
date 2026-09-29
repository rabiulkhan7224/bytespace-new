"use client";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { CourseCard } from "@/components/ui/CourseCard";
import { CourseFilters } from "./CourseFilters";
import { COURSES } from "@/content/courses";

export function Courses() {
  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="bg-white"
    >
      {/* Blue header band */}
      <div className="bg-primary-700 hero-grid py-14 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2
            id="courses-heading"
            className="text-heading-s text-white lg:text-heading-m"
          >
            Find Your Next Course
          </h2>

          <form
            role="search"
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-xl items-center gap-2"
          >
            <div className="relative flex-1">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="search"
                name="q"
                placeholder="Search"
                aria-label="Search courses"
                className="text-body-m h-12 w-full rounded-full bg-white pl-14 pr-5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
              />
            </div>
            <button
              type="submit"
              className="text-label-m h-12 shrink-0 rounded-full bg-secondary-400 px-6 text-neutral-950 transition-colors hover:bg-secondary-300"
            >
              Courses
            </button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <CourseFilters />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <Pagination totalPages={5} currentPage={1} />
      </div>
    </section>
  );
}

function Pagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  return (
    <nav aria-label="Course pagination" className="mt-12 flex justify-center">
      <ul className="flex items-center gap-1">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            className="grid size-10 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 disabled:opacity-40"
            disabled={currentPage === 1}
          >
            <ChevronLeft className="size-5" />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              aria-current={n === currentPage ? "page" : undefined}
              className={
                n === currentPage
                  ? "text-body-s grid size-10 place-items-center rounded-full bg-neutral-100 font-medium text-neutral-950"
                  : "text-body-s grid size-10 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100"
              }
            >
              {n}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            aria-label="Next page"
            className="grid size-10 place-items-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100"
          >
            <ChevronRight className="size-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
