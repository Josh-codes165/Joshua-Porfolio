import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ground/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-semibold text-lg tracking-tight text-ink">
          Joshua<span className="text-violet-bright">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink hover:border-violet-bright hover:text-violet-bright transition-colors"
        >
          Let's Work Together
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ground border-t border-border px-6 py-6 fade-up">
          <ul className="flex flex-col gap-5 font-mono text-sm text-ink-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-ink"
          >
            Let's Work Together
          </a>
        </div>
      )}
    </header>
  );
}
