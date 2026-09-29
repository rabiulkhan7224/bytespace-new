import Image from "next/image";
import { Star, BarChart3 } from "lucide-react";
import type { Course } from "@/content/courses";
import { Button } from "./button";
import Link from "next/link";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white p-3 transition-shadow hover:shadow-[0_16px_40px_-20px_rgb(0_0_0_/_0.2)]">
      {/* Thumbnail */}
      <Link href={`/courses/${course.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
          <Image
            src={`${course.thumbnail}`}
            alt=""
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Stat overlay */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-full  px-3 py-1.5 ">
            <Button
              variant={"ghost"}
              className="text-body-xs rounded-full text-white backdrop-blur-sm bg-white/30"
            >
              {course.lessons} Lessons
            </Button>

            <Button
              variant={"ghost"}
              className="text-body-xs rounded-full text-white backdrop-blur-sm bg-white/30"
            >
              {course.duration}
            </Button>

            <Button
              variant={"ghost"}
              className="text-body-xs rounded-full px-2.5 text-white backdrop-blur-sm bg-white/30"
            >
              {course.comments}
            </Button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-label-m line-clamp-1 text-neutral-950">
              {course.title}
            </h3>
            <span className="text-body-xs flex shrink-0 items-center gap-1 text-neutral-500">
              {course.rating}
              <Star
                className="size-3.5 fill-secondary-500 text-secondary-500"
                aria-hidden
              />
            </span>
          </div>

          <p className="text-body-xs mt-1 text-neutral-500">
            by {course.author}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-body-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-neutral-700">
              <BarChart3 className="size-3.5" aria-hidden />
              {course.level}
            </span>

            <div className="flex items-center">
              {course.avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={24}
                  height={24}
                  className="-ml-2 size-6 rounded-full border-2 border-white first:ml-0"
                  style={{ zIndex: course.avatars.length - i }}
                />
              ))}
              <span className="text-body-xs -ml-2 grid size-6 place-items-center rounded-full border-2 border-white bg-secondary-400 font-medium text-neutral-950">
                {course.studentCount}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-baseline gap-1.5 border-t border-neutral-100 pt-3">
            <span className="text-heading-xs text-primary-800">
              ${course.price}
            </span>
            <span className="text-body-xs text-neutral-500">
              {course.priceNote}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
