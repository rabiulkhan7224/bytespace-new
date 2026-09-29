import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroInfoCardProps = {
  className?: string;
  children: ReactNode;
};

export function HeroInfoCard({ className, children }: HeroInfoCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-4 shadow-[0_24px_48px_-16px_rgb(0_0_0_/_0.28)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
