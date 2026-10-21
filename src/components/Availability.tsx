import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Availability() {
  return (
    <section
      id="availability"
      className="border-y border-[#355343] bg-[#203B2F] px-5 py-24 text-[#F4F1E8] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-16">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="text-sm text-[#D1DCCB]">
                Open to opportunities
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Have something
              <br className="hidden sm:block" /> worth building?
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-lg text-base leading-8 text-[#D1DCCB]">
              I'm open to frontend development roles, internships, freelance
              projects, and collaborations. If you have an idea or need a
              website for your business, let's talk.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border-b border-[#B7D88A] pb-2 text-sm font-semibold transition-colors hover:text-[#B7D88A]"
              >
                Let's talk
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 pb-2 text-sm text-[#D1DCCB] transition-colors hover:text-white"
              >
                Explore my work
                <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}