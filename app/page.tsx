import { Hero } from "@/components/sections/Hero";
import HomeCourses from "@/components/sections/homeCourses";
import { Partners } from "@/components/sections/partner";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Partners />
        <HomeCourses />
      </main>
    </>
  );
}
