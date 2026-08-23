import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { contactLinks } from "../data/site";

const links = [
  { key: "github", icon: GithubIcon, href: contactLinks.github },
  { key: "linkedin", icon: LinkedinIcon, href: contactLinks.linkedin },
  { key: "twitter", icon: XIcon, href: contactLinks.twitter },
  { key: "email", icon: Mail, href: contactLinks.email ? `mailto:${contactLinks.email}` : "" },
].filter((l) => l.href);

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-ink">Joshua Okoronkwo</p>
          <p className="text-sm text-ink-muted mt-1">
            Frontend developer building modern digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {links.map(({ key, icon: Icon, href }) => (
            <a
              key={key}
              href={href}
              target={key === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="text-ink-faint hover:text-violet-bright transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="max-w-6xl mx-auto mt-8 font-mono text-xs text-ink-faint">
        © 2026 Joshua Okoronkwo. All rights reserved.
      </p>
    </footer>
  );
}
