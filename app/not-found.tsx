import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Page not found — ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="relative isolate flex flex-1 flex-col overflow-hidden bg-primary-700">
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
          <p
            aria-hidden
            className="font-heading text-[clamp(8rem,22vw,18rem)] font-semibold leading-none text-secondary-400"
          >
            404
          </p>

          <h1 className="text-heading-s mt-4 text-balance text-white lg:text-heading-m">
            The page you are looking for doesn&rsquo;t exist
          </h1>

          <p className="text-body-m mt-6 max-w-xl text-primary-100">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="text-label-m mt-10 inline-flex h-12 items-center rounded-full bg-secondary-400 px-8 text-neutral-950 transition-colors hover:bg-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
          >
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
