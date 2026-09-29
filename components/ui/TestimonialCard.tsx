import Image from "next/image";
import type { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-6 lg:p-8">
      <Image
        src={testimonial.avatar}
        alt=""
        width={80}
        height={80}
        className="size-16 rounded-full object-cover lg:size-20"
      />

      <p className="text-label-l mt-6 text-neutral-950">{testimonial.name}</p>
      <p className="text-body-m mt-1 text-primary-800">{testimonial.role}</p>

      <blockquote className="text-body-m mt-6 text-neutral-600">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}
