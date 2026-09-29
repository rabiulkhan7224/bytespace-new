import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type AuthShellProps = {
  heading: string;
  body: string;
  visual: ReactNode;
  children: ReactNode;
};

export function AuthShell({ heading, body, visual, children }: AuthShellProps) {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-primary-700">
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 mx-auto grid min-h-dvh max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:py-16">
        {/* Left — copy + visual */}
        <div className="flex flex-col">
          {/* <Link href="/" aria-label="ByteSpace — home" className="w-fit">
            <Image
              src="/Header_Logo.png"
              alt="ByteSpace"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link> */}

          <div className="mt-12 max-w-md">
            <h2 className="text-heading-xs text-white">{heading}</h2>
            <p className="text-body-m mt-4 text-primary-100">{body}</p>
          </div>

          <div className="mt-10 flex-1">{visual}</div>
        </div>

        {/* Right — form */}
        <div className="flex items-center justify-center lg:justify-end">
          {children}
        </div>
      </div>
    </div>
  );
}
