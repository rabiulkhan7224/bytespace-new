import { Hero } from "@/components/sections/Hero";
import HomeCourses from "@/components/sections/homeCourses";
import { Partners } from "@/components/sections/partner";
import { Features } from "./../components/sections/Features";
import { CreatorCta } from "./../components/sections/CreatorCta";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Partners />
        <HomeCourses />
        <Features />
        <CreatorCta />
      </main>
    </>
  );
}
