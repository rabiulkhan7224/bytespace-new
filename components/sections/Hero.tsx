import Image from "next/image";
import { Star } from "lucide-react";
import { HeroSearch } from "./HeroSearch";
import { HeroInfoCard } from "./HeroInfoCard";
import { HERO } from "@/content/hero";

const AVATARS = [
  "/images/avatars/a1.png",
  "/images/avatars/a2.png",
  "/images/avatars/a3.png",
  "/images/avatars/a4.png",
  "/images/avatars/a5.png",
  "/images/avatars/a6.png",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-700 pt-32 lg:pt-44"
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0"
      />

      {/* Lime circle — clipped by the section bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[880px] w-[880px] -translate-x-1/2 translate-y-[55%] rounded-full bg-secondary-400 md:block"
      />

      {/* Decorative assets */}
      <Image
        aria-hidden
        src="/images/spring-lime.png"
        alt=""
        width={300}
        height={180}
        className="pointer-events-none absolute left-[0%] top-[20%] hidden w-[300px] lg:block"
      />
      <Image
        aria-hidden
        src="/images/spring-white.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute left-[13%] top-[52%] hidden w-[120px] lg:block"
      />
      <Image
        aria-hidden
        src="/images/ring-white.png"
        alt=""
        width={340}
        height={240}
        className="pointer-events-none absolute left-[5%] top-[74%] hidden w-[300px] lg:block"
      />
      <Image
        aria-hidden
        src="/images/box-cone.png"
        alt=""
        width={300}
        height={160}
        className="pointer-events-none absolute right-[0%] top-[15%] hidden w-[200px] lg:block"
      />
      <Image
        aria-hidden
        src="/images/Cone-white.png"
        alt=""
        width={200}
        height={200}
        className="pointer-events-none absolute right-[8%] top-[48%] hidden w-[180px] lg:block"
      />
      <Image
        aria-hidden
        src="/images/spring-white.png"
        alt=""
        width={300}
        height={200}
        className="pointer-events-none absolute right-[7%] top-[76%] hidden w-[300px] lg:block"
      />

      {/* Man — bottom center */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 md:block">
        <Image
          src="/images/man-hero.png"
          alt=""
          width={560}
          height={720}
          priority
          sizes="(min-width: 1024px) 520px, 420px"
          className="h-auto w-[420px] lg:w-[570px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h1
          id="hero-heading"
          className="text-heading-s text-balance text-white lg:text-heading-l"
        >
          {HERO.heading}
        </h1>

        <p className="text-body-l mt-6 max-w-2xl text-primary-200">
          {HERO.subheading}
        </p>

        <HeroSearch className="mt-10 max-w-[680px]" />
      </div>

      {/* Floating cards — desktop only */}
      <div className="relative z-20 hidden md:block">
        {/* UI/UX Design */}
        <HeroInfoCard className="absolute left-[27%] top-[12rem] w-[200px]">
          <p className="text-label-m text-neutral-950">UI/UX Design</p>
          <p className="text-body-xs mt-1 text-neutral-500">
            200 Courses · 1000+ Students
          </p>
        </HeroInfoCard>

        {/* Learning Progress */}
        <HeroInfoCard className="absolute right-[24%] top-[12rem] w-[230px]">
          <p className="text-label-m text-neutral-950">Learning Progress</p>
          <p className="text-heading-s mt-2 text-neutral-950">55%</p>
          <div
            role="progressbar"
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Learning progress"
            className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100"
          >
            <div className="h-full w-[55%] rounded-full bg-secondary-500" />
          </div>
        </HeroInfoCard>

        {/* Happy Students */}
        <HeroInfoCard className="absolute left-[22%] top-[23rem] w-[260px]">
          <p className="text-label-m text-neutral-950">Happy Students</p>
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
        </HeroInfoCard>
      </div>

      {/* Reserve vertical space so the man image and circle are visible */}
      <div aria-hidden className="h-[280px] md:h-[460px] lg:h-[560px]" />
    </section>
  );
}
