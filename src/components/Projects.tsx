import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type Project } from "../data/projects";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

/* Shows the live site's hostname in the frame's address bar, falls back to the slug */
function getDisplayUrl(project: Project) {
  try {
    return new URL(project.live ?? "").hostname.replace(/^www\./, "");
  } catch {
    return project.slug;
  }
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const orderedProjects = [
    ...projects.filter((project) => project.featured),
    ...projects.filter((project) => !project.featured),
  ];

  return (
    <section
      id="projects"
      className="bg-[#111310] px-5 py-24 text-[#f4f1e8] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-5 border-b border-[#30322b] pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-sm text-[#849b65]">Selected work</p>
            <h2 className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#aaa99f]">
            A selection of projects I've worked on, from solving practical
            problems to exploring new ideas through code.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {orderedProjects.map((project, index) => (
            <Reveal
              as="article"
              key={project.slug}
              delay={(index % 2) * 100}
              className="min-w-0"
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`View ${project.name} project details`}
                className="group block w-full overflow-hidden rounded-xl border border-[#30322b] bg-[#191b17] text-left transition-colors duration-300 hover:border-[#b7d88a]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b7d88a]"
              >
                {/* Window bar */}
                <span className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-[#30322b] bg-[#111310] px-4 py-2.5">
                  <span aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#30322b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#30322b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#30322b]" />
                  </span>

                  <span className="max-w-full justify-self-center truncate rounded-md bg-[#191b17] px-3 py-1 text-[11px] text-[#777970]">
                    {getDisplayUrl(project)}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#b7d88a] text-[#111310] transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </span>

                <span className="relative block overflow-hidden bg-[#111310]">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`${project.name} website screenshot`}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="block h-auto w-full"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#f4f1e8]/5"
                      />
                    </>
                  ) : (
                    <span className="flex aspect-[16/10] items-center justify-center text-sm text-[#777970]">
                      Screenshot coming soon
                    </span>
                  )}
                </span>
              </button>

              <div className="flex items-start justify-between gap-4 pt-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                      {project.name}
                    </h3>

                    {project.featured && (
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#849b65]">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#aaa99f]">
                    {project.tagline}
                  </p>
                </div>

                <span className="shrink-0 pt-1 font-mono text-xs text-[#777970]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                {project.tech.slice(0, 4).map((technology) => (
                  <li key={technology} className="text-xs text-[#777970]">
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#30322b] pt-4">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-2 text-sm text-[#f4f1e8] transition-colors hover:text-[#b7d88a]"
                >
                  Project details
                  <Plus size={15} />
                </button>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#aaa99f] transition-colors hover:text-[#b7d88a]"
                  >
                    Live website
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#aaa99f] transition-colors hover:text-[#b7d88a]"
                  >
                    <GithubIcon size={14} />
                    Source code
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}