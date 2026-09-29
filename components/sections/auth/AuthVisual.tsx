import Image from "next/image";
import { Star, BarChart3 } from "lucide-react";

const AVATARS = [
  "/images/avatars/a1.png",
  "/images/avatars/a2.png",
  "/images/avatars/a3.png",
  "/images/avatars/a4.png",
  "/images/avatars/a5.png",
];

export function AuthVisual() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block">
      {/* Lime circle */}

      {/* Build Digital Asset — back card, left */}
      <div className="absolute left-0 top-[38%] z-10 w-[68%] overflow-hidden rounded-2xl bg-white shadow-[0_24px_48px_-24px_rgb(0_0_0_/_0.3)]">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/big-data.png"
            alt=""
            fill
            sizes="360px"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-label-m text-neutral-950">Build Digital Asset</p>
          <p className="text-body-xs mt-1 text-neutral-500">
            by purepearl studio
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-body-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-neutral-700">
              <BarChart3 className="size-3.5" aria-hidden />
              Beginner
            </span>
            <span className="text-body-xs text-primary-800">
              $25<span className="text-neutral-400">/lifetime</span>
            </span>
          </div>
        </div>
      </div>

      {/* the Power of Big Data — front card, right */}
      <div className="absolute right-0 top-[12%] z-20 w-[72%] overflow-hidden rounded-2xl bg-white shadow-[0_32px_64px_-28px_rgb(0_0_0_/_0.35)]">
        <div className="relative aspect-[16/10]">
          <Image
            src="/images/digital-asset.png"
            alt=""
            fill
            sizes="400px"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <p className="text-label-m text-neutral-950">
              the Power of Big Data
            </p>
            <span className="text-body-xs flex shrink-0 items-center gap-1 text-neutral-500">
              4.5
              <Star
                className="size-3.5 fill-secondary-500 text-secondary-500"
                aria-hidden
              />
            </span>
          </div>
          <p className="text-body-xs mt-1 text-neutral-500">
            by purepearl studio
          </p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-body-xs inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-neutral-700">
              <BarChart3 className="size-3.5" aria-hidden />
              Beginner
            </span>
            <div className="flex items-center">
              {AVATARS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={24}
                  height={24}
                  className="-ml-2 size-6 rounded-full border-2 border-white first:ml-0"
                  style={{ zIndex: AVATARS.length - i }}
                />
              ))}
              <span className="text-body-xs -ml-2 grid size-6 place-items-center rounded-full border-2 border-white bg-neutral-950 font-medium text-white">
                26+
              </span>
            </div>
          </div>
          <div className="mt-3 border-t border-neutral-100 pt-3">
            <span className="text-body-s text-primary-800">
              $25<span className="text-neutral-400">/lifetime</span>
            </span>
          </div>
        </div>
      </div>

      {/* Happy Students — lime card, front */}
      <div className="absolute bottom-[8%] right-[4%] z-30 w-[58%] rounded-2xl bg-secondary-400 p-4 shadow-[0_24px_48px_-20px_rgb(0_0_0_/_0.25)]">
        <p className="text-label-m text-neutral-950">Happy Students</p>
        <p className="text-body-xs mt-1 flex items-center gap-1 text-neutral-800">
          4.5 (240)
          <Star
            className="size-3.5 fill-neutral-950 text-neutral-950"
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
              className="-ml-2 size-7 rounded-full border-2 border-secondary-400 first:ml-0"
              style={{ zIndex: AVATARS.length - i }}
            />
          ))}
          <span className="text-body-xs -ml-2 grid size-7 place-items-center rounded-full border-2 border-secondary-400 bg-neutral-950 font-medium text-white">
            2K+
          </span>
        </div>
      </div>

      {/* Decorative assets */}
      <Image
        aria-hidden
        src="/images/ring-lime-2.png"
        alt=""
        width={240}
        height={140}
        className="pointer-events-none absolute left-[5%] top-[10%] z-20 w-[40%]"
      />
      <Image
        aria-hidden
        src="/images/Cone-lime.png"
        alt=""
        width={200}
        height={140}
        className="pointer-events-none absolute -left-[6%] bottom-[0%] z-20 w-[40%]"
      />
      <Image
        aria-hidden
        src="/images/spring-white.png"
        alt=""
        width={120}
        height={120}
        className="pointer-events-none absolute right-[24%] bottom-[20%] z-20 w-[70px]"
      />
    </div>
  );
}
