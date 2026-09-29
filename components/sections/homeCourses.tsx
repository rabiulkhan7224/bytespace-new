import { COURSE_CATEGORIES, COURSES } from "@/content/courses";
import { CourseCard } from "../ui/CourseCard";
import { cn } from "@/lib/utils";

const HomeCourses = () => {
  return (
    <section
      id="Homecourses"
      aria-labelledby="courses-heading"
      className="bg-white"
    >
      <div className="relative z-10 mx-auto flex max-w-5xl pt-10 flex-col items-center px-6 text-center">
        <h1
          id="hero-heading"
          className="text-heading-s text-balance text-black lg:text-heading-m"
        >
          Discover Your Passion, Build Your Skills
        </h1>

        <p className="text-body-l mt-6 max-w-2xl text-neutral-400">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>
      {/* Category pills */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-12 lg:py-16">
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
      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-12">
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCourses;
