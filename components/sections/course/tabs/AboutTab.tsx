import Image from "next/image";
import { Check } from "lucide-react";
import type { CourseDetail } from "@/content/course-detail";

export function AboutTab({ course }: { course: CourseDetail }) {
  const { about } = course;

  return (
    <div className="max-w-2xl">
      <h2 className="text-heading-xs text-neutral-950">Description</h2>

      <div className="text-body-m mt-5 flex flex-col gap-5 text-neutral-600">
        {about.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h3 className="text-heading-xs mt-10 text-neutral-950">Sneak Peak</h3>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {about.sneakPeak.map((src, i) => (
          <div
            key={src}
            className="relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Course preview ${i + 1}`}
              fill
              sizes="(min-width: 640px) 25vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h3 className="text-heading-xs mt-10 text-neutral-950">Key Points</h3>

      <ul className="mt-5 flex flex-col gap-3">
        {about.keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-700">
              <Check
                className="size-3.5 text-white"
                strokeWidth={3}
                aria-hidden
              />
            </span>
            <span className="text-body-m text-neutral-800">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
