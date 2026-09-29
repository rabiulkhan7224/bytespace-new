import { CategoryTile } from "@/components/ui/CategoryTile";
import { CATEGORIES, CATEGORIES_HEADER } from "@/content/categories";

export function Categories() {
  return (
    <section aria-labelledby="categories-heading" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-18">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="categories-heading"
            className="text-heading-s text-balance text-neutral-950 lg:text-heading-m"
          >
            {CATEGORIES_HEADER.heading}
          </h2>

          <p className="text-body-m mt-5 text-neutral-500">
            {CATEGORIES_HEADER.body}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {CATEGORIES.map((category) => (
            <CategoryTile key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
