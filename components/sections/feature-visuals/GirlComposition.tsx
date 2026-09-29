import Image from "next/image";
import { Star } from "lucide-react";
import { RevenueCard } from "./RevenueCard";

const AVATARS = [
  "/images/avatars/a1.png",
  "/images/avatars/a2.png",
  "/images/avatars/a3.png",
  "/images/avatars/a4.png",
  "/images/avatars/a5.png",
];

export function GirlComposition() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[560px]">
      {/* Girl */}
      <div className="pointer-events-none z-30 absolute bottom-0 left-[8%] z-10 h-[92%] w-[95%]">
        <Image
          src="/images/girl2.png"
          alt=""
          width={760}
          height={720}
          sizes="(min-width: 1024px) 520px, 400px"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Total Revenue */}
      <RevenueCard
        label="Total Revenue"
        date="July 2023"
        amount="$120.29"
        progress={65}
        className="absolute left-0 top-[10%] z-20 w-[44%]"
      />

      {/* Year to Date */}
      <RevenueCard
        label="Year to Date"
        date="2023"
        amount="$1,200.38"
        badge="+12%"
        className="absolute left-0 top-[42%] z-20 w-[36%]"
      />

      {/* Lime spring — right of the girl */}
      <Image
        aria-hidden
        src="/images/spring-lime-2.png"
        alt=""
        width={200}
        height={160}
        className="pointer-events-none absolute right-[18%] top-[38%] z-20 w-[16%]"
      />

      {/* Happy Students */}
      <div className="absolute bottom-[10%] right-0 z-30 w-[62%] rounded-2xl bg-white p-4 shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.28)]">
        <p className="text-label-s text-neutral-950">Happy Students</p>
        <p className="text-body-xs mt-1 flex items-center gap-1 text-neutral-500">
          4.5 (240)
          <Star
            className="size-3.5 fill-secondary-500 text-secondary-500"
            aria-hidden
          />
        </p>
        <div className="mt-3 flex items-center">
          {AVATARS.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={28}
              height={28}
              className="-ml-2 size-7 rounded-full border-2 border-white first:ml-0"
              style={{ zIndex: AVATARS.length - i }}
            />
          ))}
          <span className="text-body-xs -ml-2 grid size-7 place-items-center rounded-full border-2 border-white bg-secondary-400 text-neutral-950">
            2K+
          </span>
        </div>
      </div>
    </div>
  );
}
