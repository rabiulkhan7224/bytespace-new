"use client";

import { FOOTER_COPY } from "@/content/footer";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-md items-center gap-2"
    >
      <input
        type="email"
        name="email"
        required
        placeholder={FOOTER_COPY.emailPlaceholder}
        aria-label="Email address"
        className="text-body-s h-11 flex-1 rounded-full border border-neutral-200 bg-white px-5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-400"
      />
      <button
        type="submit"
        className="text-label-s h-11 shrink-0 rounded-full bg-secondary-400 px-5 text-neutral-950 transition-colors hover:bg-secondary-300"
      >
        {FOOTER_COPY.emailCta}
      </button>
    </form>
  );
}
