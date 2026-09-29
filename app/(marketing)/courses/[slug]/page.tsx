import type { Metadata } from "next";
import { CourseHero } from "@/components/sections/course/CourseHero";
import { CourseSidebar } from "@/components/sections/course/CourseSidebar";
import { CourseTabs } from "@/components/sections/course/CourseTabs";
import { COURSE_DETAIL } from "@/content/course-detail";
import { Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: `${COURSE_DETAIL.title} — ByteSpace`,
  description: COURSE_DETAIL.subtitle,
};

export default function CourseDetailPage() {
  const course = COURSE_DETAIL;

  return (
    <article className="relative">
      {/* Positioner for the overlapping sidebar */}
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full max-w-7xl px-6">
          <div className="relative h-full">
            <aside className="pointer-events-auto absolute right-0 z-20 top-70 hidden w-[380px] lg:block">
              <CourseSidebar course={course} />
            </aside>
          </div>
        </div>
      </div>

      {/* Blue hero */}
      <section className="relative bg-primary-700">
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto max-w-7xl  px-6 py-16 lg:py-18">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-heading-s text-balance text-white lg:text-heading-m">
                {course.title}
              </h1>
              <p className="text-body-m mt-2 text-primary-100">
                {course.subtitle}
              </p>
              <p className="text-body-s mt-3 text-primary-200">
                by{" "}
                <a
                  href={course.author.href}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {course.author.name}
                </a>
              </p>
            </div>

            <button
              type="button"
              className="text-label-m inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-secondary-400 px-6 text-neutral-950 transition-colors hover:bg-secondary-300"
            >
              <Share2 className="size-4" aria-hidden />
              Share
            </button>
          </div>
          <div className="lg:mr-[420px]">
            <CourseHero course={course} />
          </div>
        </div>
      </section>

      {/* White tabs + panels */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16">
          <div className="lg:mr-[420px]">
            <CourseTabs course={course} />
          </div>
        </div>
      </section>
    </article>
  );
}
