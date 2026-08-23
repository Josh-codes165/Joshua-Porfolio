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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} project details`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fade-up my-8 w-full max-w-2xl rounded-2xl border border-border-strong bg-surface p-7 sm:p-9"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display font-semibold text-2xl text-ink">
            {project.name}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close project details"
            className="text-ink-faint hover:text-ink shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-2 text-ink-muted">{project.tagline}</p>

        <div className="mt-8 space-y-6">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wide text-violet-bright mb-2">
              Problem
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wide text-violet-bright mb-2">
              Solution
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed">{project.solution}</p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wide text-violet-bright mb-2">
              Features
            </h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-ink-muted flex gap-2">
                  <span className="text-violet-bright mt-1.5 block w-1 h-1 rounded-full bg-violet-bright shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wide text-violet-bright mb-2">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-1 rounded-full border border-border-strong text-ink-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {(project.live || project.github) && (
          <div className="mt-9 flex flex-wrap gap-4 border-t border-border pt-6">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-violet px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-bright transition-colors"
              >
                Live Demo <ArrowUpRight size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-ink hover:border-violet-bright transition-colors"
              >
                <GithubIcon size={15} /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
