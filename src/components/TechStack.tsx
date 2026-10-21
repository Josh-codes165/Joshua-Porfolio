import { techGroups } from "../data/techstack";
import Reveal from "./Reveal";

const technologies = techGroups.flatMap((group) => group.items);
const reverseTechnologies = [...technologies].reverse();

type TechRowProps = {
  items: typeof technologies;
  direction: "left" | "right";
  label: string;
};

function TechRow({ items, direction, label }: TechRowProps) {
  return (
    <div className="tech-marquee relative" aria-label={label}>
      <div
        className={`tech-marquee-track ${
          direction === "right" ? "tech-marquee-reverse" : ""
        }`}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-3 pr-3"
            aria-hidden={copy === 1 ? true : undefined}
          >
            {items.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <li
                  key={`${copy}-${tech.name}-${index}`}
                  title={tech.description}
                  className="tech-marquee-item"
                >
                  <span className="group/tech inline-flex items-center gap-2.5">
                    <Icon
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 opacity-80"
                    />
                    <span>{tech.name}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="skills"
      className="overflow-hidden border-y border-[#30322b] bg-[#191b17] py-20 text-[#f4f1e8] sm:py-24"
    >
      <Reveal className="mx-auto mb-10 max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="mb-4 text-sm text-[#777970]">
          The tools behind my work
        </p>

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Tools I build with.
          </h2>

          <p className="max-w-sm text-sm leading-6 text-[#aaa99f]">
            A growing toolkit for building, connecting and shipping web
            experiences.
          </p>
        </div>
      </Reveal>

      <div className="space-y-3">
        <TechRow
          items={technologies}
          direction="left"
          label="Technologies moving from right to left"
        />

        <TechRow
          items={reverseTechnologies}
          direction="right"
          label="Technologies moving from left to right"
        />
      </div>

      <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-[#777970] sm:px-8 lg:px-12">
        My toolkit evolves as I build and learn.
      </p>
    </section>
  );
}