import { Categories } from "@/components/sections/Categories";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import HomeCourses from "@/components/sections/homeCourses";
import { Partners } from "@/components/sections/partner";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Partners />
        <HomeCourses />
        <Categories />
        <Features />
        <CreatorCta />
        <Testimonials />
      </main>
    </>
  );
}
