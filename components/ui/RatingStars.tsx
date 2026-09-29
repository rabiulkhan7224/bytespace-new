import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type RatingStarsProps = {
  value: number;
  max?: number;
  size?: "sm" | "md";
  className?: string;
};

export function RatingStars({
  value,
  max = 5,
  size = "sm",
  className,
}: RatingStarsProps) {
  const starClass = size === "sm" ? "size-3.5" : "size-4";

  return (
    <div
      role="img"
      aria-label={`${value} out of ${max} stars`}
      className={cn("flex items-center gap-0.5", className)}
    >
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={cn(
            starClass,
            i < Math.round(value)
              ? "fill-secondary-500 text-secondary-500"
              : "fill-neutral-200 text-neutral-200",
          )}
        />
      ))}
    </div>
  );
}
