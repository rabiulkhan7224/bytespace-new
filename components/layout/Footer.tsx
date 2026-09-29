import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./NewsletterForm";
import { FOOTER_COLUMNS, FOOTER_COPY, FOOTER_LEGAL } from "@/content/footer";

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand + newsletter */}
          <div>
            <Link href="/" aria-label="ByteSpace home">
              <Image
                src="/footer_Logo.png"
                alt="ByteSpace"
                width={170}
                height={40}
                priority
              />
            </Link>

            <p className="text-body-s mt-5 max-w-sm text-neutral-600">
              {FOOTER_COPY.tagline}
            </p>

            <div className="mt-5">
              <NewsletterForm />
            </div>

            <p className="text-body-xs mt-4 max-w-sm text-neutral-400">
              {FOOTER_COPY.consent}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-label-m text-neutral-950">{col.heading}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-body-s text-neutral-600 transition-colors hover:text-neutral-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-neutral-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-xs text-neutral-500">
            {FOOTER_COPY.copyright}
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LEGAL.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-body-xs text-neutral-500 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
