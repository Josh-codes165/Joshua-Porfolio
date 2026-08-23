const steps = [
  {
    n: "01",
    title: "Understand",
    body: "Understand the idea, the users, and what the project actually needs to succeed.",
  },
  {
    n: "02",
    title: "Design",
    body: "Translate the idea into a clean, intuitive interface before writing a line of code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Develop the frontend with modern tools and a responsive, maintainable architecture.",
  },
  {
    n: "04",
    title: "Refine",
    body: "Test, optimize, polish the details, and deploy.",
  },
];

export default function HowIWork() {
  return (
    <section className="py-28 px-6 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
          Process
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-14">
          From idea to interface.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-ground p-7">
              <span className="font-mono text-sm text-violet-bright">{s.n}</span>
              <h3 className="font-display font-semibold text-lg text-ink mt-3">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
