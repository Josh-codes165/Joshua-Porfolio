import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
          Projects
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
          Things I've built.
        </h2>
        <p className="mt-4 text-ink-muted max-w-lg">
          Real projects, experiments and products I've built while growing as
          a developer.
        </p>

        <div className="mt-16 space-y-6">
          {featured.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => setSelected(project)}
              className={`group w-full text-left grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-border p-6 sm:p-8 hover:border-violet transition-colors ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-video rounded-xl bg-surface-raised border border-border overflow-hidden flex items-center justify-center">
                <span className="font-mono text-xs text-ink-faint">
                  {project.name}
                </span>
                <div className="absolute inset-0 bg-violet/0 group-hover:bg-violet/10 transition-colors" />
              </div>

              <div>
                <h3 className="font-display font-semibold text-2xl text-ink group-hover:text-violet-bright transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 text-ink-muted">{project.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 rounded-full border border-border-strong text-ink-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-5 font-mono text-xs">
                  <span className="inline-flex items-center gap-1 text-violet-bright opacity-0 group-hover:opacity-100 transition-opacity">
                    View details <ArrowUpRight size={14} />
                  </span>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"
                    >
                      Live demo <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-ink-muted hover:text-ink"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {rest.map((project) => (
              <button
                key={project.slug}
                onClick={() => setSelected(project)}
                className="group text-left rounded-2xl border border-border p-6 hover:border-violet transition-colors"
              >
                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-violet-bright transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{project.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-1 rounded-full border border-border-strong text-ink-faint"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
