import { ArrowUpRight } from "lucide-react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { contactLinks } from "../data/site";

const links = [
  { key: "github", label: "GitHub", icon: GithubIcon, href: contactLinks.github },
  { key: "linkedin", label: "LinkedIn", icon: LinkedinIcon, href: contactLinks.linkedin },
  { key: "twitter", label: "X", icon: XIcon, href: contactLinks.twitter },
  {
    key: "email",
    label: "Email",
    icon: Mail,
    href: contactLinks.email ? `mailto:${contactLinks.email}` : "",
  },
].filter((link) => link.href);

export default function Footer() {
  return (
    <footer className="border-t border-[#30322b] bg-[#111310] px-5 py-8 text-[#f4f1e8] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="group w-fit">
            <span className="text-base font-semibold tracking-[-0.035em]">
              Joshua<span className="text-[#b7d88a]">.</span>
            </span>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#777970]">
              Frontend developer building thoughtful, useful experiences for the web.
            </p>
          </a>

          <nav aria-label="Social links" className="flex flex-wrap items-center gap-5">
            {links.map(({ key, label, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                title={label}
                className="inline-flex items-center gap-2 text-sm text-[#aaa99f] transition-colors hover:text-[#b7d88a]"
              >
                <Icon size={17} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#30322b] pt-5 text-xs text-[#777970] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Joshua Okoronkwo. All rights reserved.</p>

          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-[#f4f1e8]"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}