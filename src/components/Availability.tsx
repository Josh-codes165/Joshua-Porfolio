export default function Availability() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted border border-border-strong rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </span>

        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-ink leading-tight">
          Have a project in mind?
          <br /> Let's build it.
        </h2>
        <p className="mt-6 text-ink-muted text-lg max-w-xl mx-auto">
          I'm currently open to frontend development opportunities, freelance
          projects, internships, collaborations and interesting products.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-violet-bright transition-colors"
          >
            Start a Conversation
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-ink hover:border-violet-bright hover:text-violet-bright transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
