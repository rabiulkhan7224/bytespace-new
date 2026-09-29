import Image from "next/image";
import { Star } from "lucide-react";
import { RatingStars } from "@/components/ui/RatingStars";
import type { CourseDetail } from "@/content/course-detail";

export function ReviewsTab({ course }: { course: CourseDetail }) {
  const { reviews } = course;

  return (
    <div className="max-w-2xl">
      <h2 className="text-heading-xs text-neutral-950">
        What Learners Are Saying
      </h2>
      <p className="text-body-m mt-4 text-neutral-600">{reviews.intro}</p>

      {/* Summary */}
      <div className="mt-8 grid gap-6 rounded-2xl border border-neutral-100 p-6 sm:grid-cols-[auto_1fr]">
        <div className="flex flex-col items-center justify-center rounded-xl bg-secondary-400 px-6 py-5">
          <p className="text-body-s text-neutral-800">Ratings</p>
          <p className="text-heading-s mt-1 text-neutral-950">
            {reviews.summary.average}
          </p>
        </div>

        <ul className="flex flex-col gap-2 self-center">
          {reviews.summary.breakdown.map((row) => {
            const pct = (row.count / reviews.summary.total) * 100;
            return (
              <li key={row.stars} className="flex items-center gap-3">
                <RatingStars value={row.stars} className="w-24 shrink-0" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-secondary-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-body-xs w-8 shrink-0 text-right text-neutral-500">
                  {row.count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Filters */}
      <h3 className="text-label-m mt-10 text-neutral-950">
        Individual Reviews:
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {reviews.filters.map((f, i) => (
          <button
            key={f.value}
            type="button"
            className={
              i === 0
                ? "text-label-s inline-flex items-center gap-1.5 rounded-full bg-secondary-400 px-4 py-2 text-neutral-950"
                : "text-label-s inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-200"
            }
          >
            {f.value !== "all" && (
              <Star
                className="size-3.5 fill-neutral-950 text-neutral-950"
                aria-hidden
              />
            )}
            {f.label}
          </button>
        ))}
      </div>

      {/* Reviews */}
      <ul className="mt-6 flex flex-col gap-4">
        {reviews.items.map((r) => (
          <li key={r.id} className="rounded-2xl border border-neutral-100 p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={r.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-label-s text-neutral-950">{r.author}</p>
                  <p className="text-body-xs text-neutral-500">{r.role}</p>
                </div>
              </div>
              <span className="text-body-xs text-neutral-400">{r.timeAgo}</span>
            </div>

            <RatingStars value={r.rating} size="md" className="mt-4" />

            <p className="text-body-s mt-4 text-neutral-600">{r.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
