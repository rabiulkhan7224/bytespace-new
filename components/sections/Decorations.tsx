import Image from "next/image";
import { cn } from "@/lib/utils";

type DecorationsProps = {
  variant: "hero" | "cta";
  className?: string;
};

export function Decorations({ variant, className }: DecorationsProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {variant === "hero" && <HeroAssets />}
      {variant === "cta" && <CtaAssets />}
    </div>
  );
}

function HeroAssets() {
  return (
    <>
      <Image
        src="/images/spring-white.png"
        alt=""
        width={180}
        height={180}
        className="absolute left-[13%] top-[52%] hidden w-[120px] lg:block"
      />
      <Image
        src="/images/ring-white.png"
        alt=""
        width={240}
        height={240}
        className="absolute left-[6%] top-[74%] hidden w-[180px] lg:block"
      />
      <Image
        src="/images/box-cone.png"
        alt=""
        width={160}
        height={160}
        className="absolute right-[15%] top-[55%] hidden w-[110px] lg:block"
      />
      <Image
        src="/images/Cone-white.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-[8%] top-[48%] hidden w-[150px] lg:block"
      />
      <Image
        src="/images/spring-lime.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-[10%] top-[76%] hidden w-[150px] lg:block"
      />
    </>
  );
}

function CtaAssets() {
  return (
    <>
      {/* Top-left: lime spring + white zigzag */}
      <Image
        src="/images/spring-lime.png"
        alt=""
        width={220}
        height={220}
        className="absolute -left-[4%] -top-[12%] hidden w-[180px] md:block"
      />
      <Image
        src="/images/spring-white.png"
        alt=""
        width={140}
        height={140}
        className="absolute left-[13%] top-[10%] hidden w-[100px] md:block"
      />

      {/* Top-right: lime triangle + white cone */}
      <Image
        src="/images/Cone-lime.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-[16%] top-[10%] hidden w-[160px] md:block"
      />
      <Image
        src="/images/box-white.png"
        alt=""
        width={240}
        height={240}
        className="absolute -right-[3%] -top-[8%] hidden w-[180px] md:block"
      />

      {/* Bottom-left: white cone + lime ring */}
      <Image
        src="/images/Cone-white.png"
        alt=""
        width={180}
        height={180}
        className="absolute -left-[3%] bottom-[8%] hidden w-[130px] md:block"
      />
      <Image
        src="/images/ring-lime.png"
        alt=""
        width={240}
        height={240}
        className="absolute left-[10%] -bottom-[2%] hidden w-[180px] md:block"
      />

      {/* Bottom-right: lime spring */}
      <Image
        src="/images/spring-lime.png"
        alt=""
        width={200}
        height={200}
        className="absolute right-[8%] -bottom-[18%] hidden w-[160px] md:block"
      />
    </>
  );
}
