import Image from "next/image";
import { BarChart3 } from "lucide-react";

export function ManComposition() {
  return (
    <div className="relative mx-auto aspect-[6/5] w-full max-w-[560px]">
      {/* Course preview card — behind the man */}
      <div className="absolute left-0 top-[6%] z-0 w-[50%] overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.25)]">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/image.png"
            alt=""
            fill
            sizes="300px"
            className="object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex gap-2 rounded-full bg-neutral-950/60 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs text-white">17 Lessons</span>
            <span aria-hidden className="text-white/40">
              ·
            </span>
            <span className="text-body-xs text-white">2 hours 16 mins</span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-label-m text-neutral-950">
            Learn Figma from Basic
          </p>
          <p className="text-body-xs mt-1 text-neutral-500">
            by purepearl studio
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-body-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-neutral-700">
              <BarChart3 className="size-3.5" aria-hidden />
              Beginner
            </span>
            <span className="text-body-xs text-primary-700">
              $25<span className="text-neutral-400">/lifetime</span>
            </span>
          </div>
        </div>
      </div>

      {/* Man */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[88%] w-[95%]  -translate-x-1/2">
        <Image
          src="/images/man-hero.png"
          alt=""
          width={760}
          height={720}
          sizes="(min-width: 1024px) 520px, 400px"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Learning progress card — in front, right */}
      <div className="absolute right-0 top-[20%] z-20 w-[44%] rounded-2xl bg-white p-4 shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.28)]">
        <p className="text-label-s text-neutral-950">Learning Progress</p>
        <p className="text-heading-s mt-1 text-neutral-950">55%</p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="h-full w-[55%] rounded-full bg-secondary-400" />
        </div>
      </div>

      {/* Lime spring — right of the man's shoulder */}
      <Image
        aria-hidden
        src="/images/spring-lime-4.png"
        alt=""
        width={160}
        height={160}
        className="pointer-events-none absolute right-[6%] top-[5%] z-20 w-[30%]"
      />
    </div>
  );
}
