import { Check } from "lucide-react";
import { FeatureRow } from "./FeatureRow";
import { ManComposition } from "./feature-visuals/ManComposition";
import { GirlComposition } from "./feature-visuals/GirlComposition";
import { PATH_TO_GROWTH, CREATE_MANAGE } from "@/content/features";

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="bg-features-radial">
      <h2 id="features-heading" className="sr-only">
        Why ByteSpace
      </h2>

      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-20 lg:gap-32 lg:py-28">
        <FeatureRow text={<PathToGrowthText />} visual={<ManComposition />} />
        <FeatureRow
          reverse
          text={<CreateManageText />}
          visual={<GirlComposition />}
        />
      </div>
    </section>
  );
}

function PathToGrowthText() {
  return (
    <div>
      <h3 className="text-heading-s font-heading text-balance text-neutral-950 lg:text-heading-m">
        {PATH_TO_GROWTH.heading}
      </h3>

      <p className="text-body-l mt-6 max-w-xl text-neutral-600">
        {PATH_TO_GROWTH.body}
      </p>

      <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
        {PATH_TO_GROWTH.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-heading-s text-primary-700">{stat.value}</dd>
            <dd className="text-body-s mt-1 text-neutral-500">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function CreateManageText() {
  return (
    <div>
      <h3 className="text-heading-s text-balance font-sans text-neutral-950 lg:text-heading-m">
        {CREATE_MANAGE.heading}
      </h3>

      <p className="text-body-l mt-6 max-w-xl text-neutral-600">
        <span className="font-medium text-neutral-950">ByteSpace</span>{" "}
        {CREATE_MANAGE.body.replace(/^ByteSpace\s/, "")}
      </p>

      <ul className="mt-8 flex flex-col gap-4">
        {CREATE_MANAGE.checklist.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-700">
              <Check
                className="size-3.5 text-white"
                strokeWidth={3}
                aria-hidden
              />
            </span>
            <span className="text-body-m text-neutral-950">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
