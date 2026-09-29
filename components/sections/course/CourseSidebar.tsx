import Image from "next/image";
import { BookOpen, Video, Award, MessagesSquare } from "lucide-react";
import type { CourseDetail } from "@/content/course-detail";

const INCLUDE_ICONS = {
  book: BookOpen,
  video: Video,
  certificate: Award,
  consult: MessagesSquare,
} as const;

type CourseSidebarProps = { course: CourseDetail };

export function CourseSidebar({ course }: CourseSidebarProps) {
  const s = course.sidebar;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_32px_64px_-32px_rgb(0_0_0_/_0.25)]">
      <h2 className="text-label-l text-neutral-950">{s.lessonsHeader}</h2>

      <ol className="mt-5 flex flex-col gap-4">
        {s.preview.map((p) => (
          <li key={p.index} className="flex items-start gap-4">
            <span className="text-body-s w-6 shrink-0 pt-0.5 text-neutral-400">
              {String(p.index).padStart(2, "0")}
            </span>
            <span className="text-body-s flex-1 text-neutral-800">
              {p.title}
            </span>
            <span className="text-body-s shrink-0 text-primary-800">
              {p.duration}
            </span>
          </li>
        ))}
      </ol>

      <p className="text-body-s mt-4 text-neutral-500">{s.moreVideos}</p>

      <p className="text-body-s mt-6 text-neutral-600">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-heading-xs text-primary-800">
          ${course.price}
        </span>
        <span className="text-body-s text-neutral-400">
          /{course.priceNote}
        </span>
      </div>

      <button
        type="button"
        className="text-label-m mt-4 h-12 w-full rounded-full bg-secondary-400 text-neutral-950 transition-colors hover:bg-secondary-300"
      >
        {s.enrollCta}
      </button>

      <h3 className="text-label-m mt-7 text-neutral-950">
        This course include
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {s.includes.map((item) => {
          const Icon = INCLUDE_ICONS[item.icon];
          return (
            <li
              key={item.label}
              className="text-body-s flex items-center gap-3 text-neutral-700"
            >
              <Icon className="size-4 text-primary-800" aria-hidden />
              {item.label}
            </li>
          );
        })}
      </ul>

      <div className="mt-7 border-t border-neutral-100 pt-6">
        <div className="flex items-center gap-3">
          <Image
            src={s.instructor.avatar}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="text-label-s text-neutral-950">{s.instructor.name}</p>
            <p className="text-body-xs text-neutral-500">{s.instructor.role}</p>
          </div>
        </div>

        <p className="text-body-s mt-4 text-neutral-600">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button
          type="button"
          className="text-label-s mt-4 h-10 rounded-full border border-neutral-200 px-5 text-neutral-950 transition-colors hover:bg-neutral-50"
        >
          {s.profileCta}
        </button>
      </div>
    </div>
  );
}
