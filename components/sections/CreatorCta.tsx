import Link from "next/link";
import { Decorations } from "./Decorations";
import { CREATOR_CTA } from "@/content/creatorCta";

export function CreatorCta() {
  return (
    <section
      aria-labelledby="creator-cta-heading"
      className="relative isolate overflow-hidden bg-primary-700"
    >
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0"
      />

      <Decorations variant="cta" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
        <h2
          id="creator-cta-heading"
          className="text-heading-s text-balance text-white lg:text-heading-m"
        >
          {CREATOR_CTA.heading}
        </h2>

        <p className="text-body-m mt-6 max-w-2xl text-primary-100">
          {CREATOR_CTA.body}
        </p>

        <Link
          href={CREATOR_CTA.cta.href}
          className="text-label-m mt-10 inline-flex h-12 items-center rounded-full bg-secondary-400 px-7 text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
        >
          {CREATOR_CTA.cta.label}
        </Link>
      </div>
    </section>
  );
}
