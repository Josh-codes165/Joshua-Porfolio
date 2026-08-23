import { journey } from "../data/site";

export default function Journey() {
  return (
    <section id="journey" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
          Journey
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-14">
          My journey so far.
        </h2>

        <ol className="relative border-l border-border pl-8 space-y-12">
          {journey.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-bright" />
              <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                {item.period}
              </span>
              <h3 className="font-display font-semibold text-lg text-ink mt-1.5">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed max-w-lg">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
