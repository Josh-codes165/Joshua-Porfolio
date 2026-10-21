import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-[#30322b] bg-[#111310]/95"
          : "bg-[#111310]"
      }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Name */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-tight text-[#f4f1e8]"
          aria-label="Joshua Okoronkwo, home"
        >
          Joshua<span className="text-[#b7d88a]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#aaa99f] transition-colors duration-200 hover:text-[#f4f1e8]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Availability + contact */}
        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#b7d88a]"
              aria-hidden="true"
            />
            <span className="text-xs text-[#aaa99f]">
              Open to opportunities
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#f4f1e8] transition-colors hover:text-[#b7d88a]"
          >
            Let's talk
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-[#f4f1e8] md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {open && (
        <div
          id="mobile-navigation"
          className="menu-panel absolute inset-x-0 top-full border-b border-[#30322b] bg-[#111310] px-5 pb-8 pt-4 sm:px-8 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((link, index) => (
              <li
                key={link.href}
                className="border-b border-[#30322b] last:border-b-0"
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg text-[#f4f1e8] transition-colors hover:text-[#b7d88a]"
                >
                  {link.label}
                  <span className="text-xs text-[#777970]">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-2">
            <span className="text-sm text-[#aaa99f]">
              Open to opportunities
            </span>
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#b7d88a]"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  );
}