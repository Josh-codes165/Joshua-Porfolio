const currently = [
  {
    label: "Currently learning",
    value: "React / Vue advanced patterns and frontend architecture",
  },
  {
    label: "Currently building",
    value: "Modern web products and client-ready websites",
  },
  {
    label: "Open to",
    value: "Frontend roles, internships, freelance projects, collaborations",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-14">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
            About
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink leading-tight">
            More than just writing code.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-ink-muted text-lg leading-relaxed">
            I'm a Computer Engineering student at FUTO and a frontend
            developer who enjoys turning ideas, designs and problems into
            functional digital experiences. Most of what I know, I've learned
            by building — shipping real projects, breaking things, and
            fixing them properly.
          </p>
          <p className="text-ink-muted text-lg leading-relaxed">
            I care about the details that make an interface feel right: how
            it responds, how it reads, how it performs on a slower
            connection. I work mainly with React, TypeScript and Tailwind,
            and I'm continuously picking up new tools — from Vue and Next.js
            to Web3 fundamentals — because frontend doesn't stand still.
          </p>

          <dl className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-border pt-8">
            {currently.map((c) => (
              <div key={c.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-faint mb-2">
                  {c.label}
                </dt>
                <dd className="text-sm text-ink">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
