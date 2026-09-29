"use client";

import { NAV_LINKS } from "@/content/nav";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" aria-label="ByteSpace home">
          <Image
            src="/Header_Logo.png"
            alt="ByteSpace"
            width={170}
            height={40}
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-m text-white transition-colors hover:text-secondary-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-label-m rounded-full px-5 py-2.5 text-white transition-colors hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-label-m rounded-full bg-secondary-400 px-5 py-2.5 font-medium text-neutral-950 transition-colors hover:bg-secondary-300"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden rounded-lg border border-white/20 p-2 text-white"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="mx-4 rounded-2xl border border-white/10 bg-primary-950/95 p-5 backdrop-blur md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-label-m text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex gap-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-label-m flex-1 rounded-full border border-white/20 px-5 py-2 text-center text-white"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="text-label-m flex-1 rounded-full bg-secondary-400 px-5 py-2 text-center font-medium text-neutral-950"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
