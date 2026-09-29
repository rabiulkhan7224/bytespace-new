import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/content/categories";

type CategoryTileProps = {
  category: Category;
};

export function CategoryTile({ category }: CategoryTileProps) {
  return (
    <Link
      href={`/courses?category=${category.id}`}
      className="group flex flex-col items-center justify-center gap-5 rounded-2xl border border-neutral-100 bg-white px-6 py-8 transition-all hover:-translate-y-0.5 hover:border-neutral-200 hover:shadow-[0_16px_32px_-20px_rgb(0_0_0_/_0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 focus-visible:ring-offset-2"
    >
      <span className="grid size-14 place-items-center rounded-full bg-secondary-400">
        <Image
          src={category.icon}
          alt=""
          width={60}
          height={60}
          className="size-12 object-contain"
        />
      </span>

      <span className="text-label-m text-center text-neutral-950">
        {category.label}
      </span>
    </Link>
  );
}
