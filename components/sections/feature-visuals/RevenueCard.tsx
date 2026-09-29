import { cn } from "@/lib/utils";

type RevenueCardProps = {
  label: string;
  date: string;
  amount: string;
  progress?: number;
  badge?: string;
  className?: string;
};

export function RevenueCard({
  label,
  date,
  amount,
  progress,
  badge,
  className,
}: RevenueCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-primary-700 p-4 text-white shadow-[0_20px_40px_-18px_rgb(0_0_0_/_0.35)]",
        className,
      )}
    >
      <p className="text-body-xs text-white/80">{label}</p>
      <p className="text-body-xs text-white/50">{date}</p>
      <p className="text-heading-xs mt-1 text-white">{amount}</p>

      {typeof progress === "number" && (
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-secondary-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {badge && (
        <span className="text-body-xs absolute -bottom-2 right-4 rounded-full bg-secondary-400 px-2 py-0.5 font-medium text-neutral-950">
          {badge}
        </span>
      )}
    </div>
  );
}
