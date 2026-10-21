import avatar from "../assets/Joshua.png";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#111310] px-5 pb-20 pt-32 text-[#f4f1e8] sm:px-8 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.85fr] lg:gap-20">
        <div className="order-2 md:order-1">
          <Reveal className="mb-8 flex items-center gap-3">
            <p className="text-sm text-[#aaa99f]">
              Frontend developer · Open to opportunities
            </p>
          </Reveal>

          <Reveal
            as="h1"
            delay={80}
            className="max-w-3xl text-[2.75rem] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]"
          >
            I build for the web,{" "}
            <span className="text-[#aaa99f]">with people in mind.</span>
          </Reveal>

          <Reveal
            as="p"
            delay={160}
            className="mt-7 max-w-xl text-base leading-8 text-[#aaa99f] sm:text-lg"
          >
            I'm Joshua, a frontend developer who turns ideas into thoughtful,
            responsive websites. I work with React, TypeScript and Next.js to
            build useful digital experiences for businesses and people.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border-b border-[#b7d88a] pb-2 text-sm font-semibold text-[#f4f1e8] transition-colors hover:text-[#b7d88a]"
            >
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 pb-2 text-sm text-[#aaa99f] transition-colors hover:text-[#f4f1e8]"
            >
              Get in touch
              <ArrowDownRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={300} className="mt-9">
            <a
              href="/Joshua-Okoronkwo-Resume.pdf"
              download="Joshua-Okoronkwo-Resume.pdf"
              className="inline-block text-sm text-[#777970] underline decoration-[#41443a] underline-offset-4 transition-colors hover:text-[#f4f1e8]"
            >
              Download résumé
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="order-1 md:order-2">
          <div className="relative mx-auto w-full max-w-[460px] md:ml-auto">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-full w-full rounded-[28px] border border-[#b7d88a]/40"
            />

            <div className="relative rounded-[28px] border border-[#30322b] bg-[#181a15] p-3">
              <div className="relative overflow-hidden rounded-[20px]">
                <img
                  src={avatar}
                  alt="Joshua Okoronkwo"
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-[#f4f1e8]/10"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#111310]/50 to-transparent"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-4 border-t border-[#30322b] px-1 pb-1 pt-4">
                <p className="text-sm text-[#f4f1e8]">Joshua Okoronkwo</p>
                <p className="text-right text-xs leading-5 text-[#777970]">
                  Frontend developer
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}