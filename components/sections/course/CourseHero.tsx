import Image from "next/image";
import { Share2, Play, BarChart3, Star, Users } from "lucide-react";
import type { CourseDetail } from "@/content/course-detail";

type CourseHeroProps = { course: CourseDetail };

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <h1 className="text-heading-s text-balance text-white lg:text-heading-m">
            {course.title}
          </h1>
          <p className="text-body-m mt-2 text-primary-100">{course.subtitle}</p>
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

      {/* Meta chips */}
      <ul className="mt-5 flex flex-wrap gap-3">
        <MetaChip icon={BarChart3} label={course.level} />
        <MetaChip
          icon={Star}
          label={`${course.rating} (${course.reviewCount} reviews)`}
        />
        <MetaChip icon={Users} label={`${course.studentCount} Students`} />
      </ul>

      {/* Video */}
      <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-neutral-200">
        <Image
          src={course.videoThumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
          priority
        />
        <button
          type="button"
          aria-label="Play course preview"
          className="absolute inset-0 grid place-items-center transition-colors hover:bg-black/10"
        >
          <span className="grid size-16 place-items-center rounded-full bg-white shadow-lg">
            <Play
              className="size-6 fill-neutral-950 text-neutral-950"
              aria-hidden
            />
          </span>
        </button>
      </div>
    </>
  );
}

function MetaChip({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <li className="text-body-s inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-neutral-950">
      <Icon className="size-4" aria-hidden />
      {label}
    </li>
  );
}
