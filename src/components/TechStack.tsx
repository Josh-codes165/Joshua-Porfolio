import { useState } from "react";
import { techGroups } from "../data/techstack";

export default function TechStack() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="skills" className="py-28 px-6 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
          Skills
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-14">
          Tools I build with.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {techGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-faint mb-5">
                {group.label}
              </h3>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    onMouseEnter={() => setActive(item.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(item.name)}
                    onBlur={() => setActive(null)}
                    tabIndex={0}
                    className="group relative rounded-lg px-3 py-2.5 -mx-3 cursor-default hover:bg-surface-raised transition-colors"
                  >
                    <span className="text-ink text-sm">{item.name}</span>
                    <p
                      className={`font-mono text-xs text-ink-faint mt-1 transition-all duration-200 ${
                        active === item.name
                          ? "opacity-100 max-h-10"
                          : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
