import Image from "next/image";
import { PARTNERS } from "@/content/partners";

export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <ul className="mt-8 grid grid-cols-3 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((partner) => (
            <li key={partner.src} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.name}
                width={140}
                height={40}
                className="h-8 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 lg:h-10"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
