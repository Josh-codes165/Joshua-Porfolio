import Reveal from "./Reveal";

const capabilities = [
  "Responsive interfaces",
  "React & TypeScript",
  "API integration",
  "Performance & accessibility",
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Development capabilities"
      className="border-y border-[#30322b] bg-[#111310] px-5 sm:px-8 lg:px-12"
    >
      <Reveal className="mx-auto flex max-w-7xl flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[#777970]">
          What I focus on
        </p>

        <ul className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end sm:gap-x-8">
          {capabilities.map((capability) => (
            <li
              key={capability}
              className="text-sm text-[#aaa99f] transition-colors duration-200 hover:text-[#f4f1e8]"
            >
              {capability}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}