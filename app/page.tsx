import { Hero } from "@/components/sections/Hero";
import Navbar from "./../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Courses } from "@/components/sections/Courses";
import { Partners } from "@/components/sections/partner";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Partners />
      </main>
    </>
  );
}
