import { journey } from "../data/site";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-[#111310] px-5 py-24 text-[#f4f1e8] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm text-[#849b65]">The journey</p>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            My journey so far.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#aaa99f] sm:text-base">
            Every project, new skill, and experience has helped me grow as a
            developer. Here's a look at the progress so far.
          </p>
        </Reveal>

        <ol className="border-t border-[#30322b]">
          {journey.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              className="grid gap-3 border-b border-[#30322b] py-7 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-8 sm:py-9 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-12"
            >
              <div className="flex items-center gap-3 sm:items-start">
                <span className="font-mono text-xs text-[#849b65]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-xs uppercase tracking-[0.12em] text-[#777970] sm:pt-0.5">
                  {item.period}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#aaa99f]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}