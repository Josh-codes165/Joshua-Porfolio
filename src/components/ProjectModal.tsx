import { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "../data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/75 p-4 sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <div className="modal-panel my-6 w-full max-w-2xl border border-[#30322b] bg-[#191b17] p-6 text-[#f4f1e8] sm:my-8 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#849b65]">
              Project details
            </p>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="shrink-0 p-1 text-[#aaa99f] transition-colors hover:text-[#f4f1e8]"
          >
            <X size={21} />
          </button>
        </div>

        <p className="mt-3 text-sm leading-7 text-[#aaa99f]">
          {project.tagline}
        </p>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} website screenshot`}
            className="mt-6 aspect-[16/9] w-full object-cover object-top"
          />
        )}

        <div className="mt-8 space-y-7">
          <div>
            <h4 className="mb-2 text-sm font-semibold">The problem</h4>
            <p className="text-sm leading-7 text-[#aaa99f]">
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold">My approach</h4>
            <p className="text-sm leading-7 text-[#aaa99f]">
              {project.solution}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">What it includes</h4>
            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-6 text-[#aaa99f]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#849b65]" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {project.tech.map((technology) => (
                <span key={technology} className="text-sm text-[#aaa99f]">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {(project.live || project.github) && (
          <div className="mt-8 flex flex-wrap gap-5 border-t border-[#30322b] pt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b border-[#b7d88a] pb-2 text-sm hover:text-[#b7d88a]"
              >
                Visit live website
                <ArrowUpRight size={15} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 pb-2 text-sm text-[#aaa99f] hover:text-[#b7d88a]"
              >
                <GithubIcon size={15} />
                View source code
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}