import { Video } from "lucide-react";
import type { CourseDetail } from "@/content/course-detail";

export function LessonsTab({ course }: { course: CourseDetail }) {
  const { lessons } = course;

  return (
    <div className="max-w-2xl">
      <h2 className="text-heading-xs text-neutral-950">Explore the Modules</h2>
      <p className="text-body-m mt-4 text-neutral-600">{lessons.intro}</p>

      <h3 className="text-heading-xs mt-10 text-neutral-950">Lesson list</h3>

      <ol className="mt-5 flex flex-col gap-5">
        {lessons.modules.map((m) => (
          <li key={m.id} className="flex gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary-400">
              <Video className="size-5 text-neutral-950" aria-hidden />
            </span>
            <div>
              <p className="text-label-m text-neutral-950">{m.title}</p>
              <p className="text-body-s mt-1 text-neutral-600">
                {m.description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="text-heading-xs mt-10 text-neutral-950">
        {lessons.contentHeading}
      </h3>
      <p className="text-body-m mt-4 text-neutral-600">{lessons.contentBody}</p>

      <h3 className="text-heading-xs mt-10 text-neutral-950">
        {lessons.progressHeading}
      </h3>
      <p className="text-body-m mt-4 text-neutral-600">
        {lessons.progressBody}
      </p>

      <div className="mt-6 rounded-2xl bg-neutral-50 p-5">
        <p className="text-label-s text-neutral-950">Learning Progress</p>
        <p className="text-heading-s mt-1 text-neutral-950">
          {lessons.progressValue}%
        </p>
        <div
          role="progressbar"
          aria-valuenow={lessons.progressValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Course progress"
          className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
        >
          <div
            className="h-full rounded-full bg-secondary-400"
            style={{ width: `${lessons.progressValue}%` }}
          />
        </div>
      </div>
    </div>
  );
}
