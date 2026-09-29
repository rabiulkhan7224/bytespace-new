import { Hero } from "@/components/sections/Hero";
import HomeCourses from "@/components/sections/homeCourses";
import { Partners } from "@/components/sections/partner";
import { Features } from "./../components/sections/Features";
import { CreatorCta } from "./../components/sections/CreatorCta";
import { Testimonials } from "./../components/sections/Testimonials";
import { Categories } from "./../components/sections/Categories";

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
