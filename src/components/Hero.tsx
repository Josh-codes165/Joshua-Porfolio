import avatar from "../assets/avatar.jpg";

const floatingLabels = [
  { label: "React", className: "top-4 -left-6 md:-left-10" },
  { label: "TypeScript", className: "top-1/3 -right-8 md:-right-14" },
  { label: "Next.js", className: "bottom-10 -left-8 md:-left-16" },
  { label: "Vue", className: "bottom-0 -right-4 md:-right-8" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="fade-up">
          <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-6">
            Frontend Developer · Builder · Creative
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-ink">
            I build digital experiences that people remember
            <span className="text-violet-bright cursor-blink">.</span>
          </h1>
          <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-md">
            Frontend developer focused on building fast, responsive and
            beautifully crafted web experiences for startups, businesses and
            ambitious ideas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-violet-bright transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink hover:border-violet-bright hover:text-violet-bright transition-colors"
            >
              Let's Work Together
            </a>
          </div>

          <a
            href="/resume.pdf"
            className="mt-6 inline-block font-mono text-xs text-ink-faint hover:text-ink-muted underline underline-offset-4 transition-colors"
          >
            Download Resume →
          </a>
        </div>

        {/* Right — signature portrait */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--color-violet) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="inspector-frame relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-border-strong">
              <span className="ib-tl" />
              <span className="ib-br" />
              <img
                src={avatar}
                alt="Illustrated portrait of Joshua Okoronkwo, wearing glasses and a dark hoodie, lit with purple neon."
                className="w-full h-full object-cover"
              />
            </div>

            {floatingLabels.map((f) => (
              <span
                key={f.label}
                className={`hidden sm:block absolute ${f.className} font-mono text-[11px] px-2.5 py-1 rounded-full border border-border-strong bg-surface/80 backdrop-blur text-ink-muted`}
              >
                {f.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
