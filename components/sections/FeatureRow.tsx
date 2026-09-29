import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureRowProps = {
  text: ReactNode;
  visual: ReactNode;
  reverse?: boolean;
};

export function FeatureRow({ text, visual, reverse = false }: FeatureRowProps) {
  return (
    <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className={cn(reverse && "lg:order-2")}>{text}</div>
      <div className={cn(reverse && "lg:order-1")}>{visual}</div>
    </div>
  );
}
