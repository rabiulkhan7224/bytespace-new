import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { TESTIMONIALS, TESTIMONIALS_HEADER } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-features-radial"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header — two columns */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2
            id="testimonials-heading"
            className="text-heading-s max-w-md text-balance text-neutral-950 lg:text-heading-m"
          >
            {TESTIMONIALS_HEADER.heading}
          </h2>

          <p className="text-body-m max-w-xl text-neutral-600 lg:self-end">
            {TESTIMONIALS_HEADER.body}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
