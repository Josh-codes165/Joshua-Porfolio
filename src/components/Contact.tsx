import { useState } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { contactLinks } from "../data/site";

const directLinks = [
  { key: "email", icon: Mail, label: "Email", href: contactLinks.email ? `mailto:${contactLinks.email}` : "" },
  { key: "github", icon: GithubIcon, label: "GitHub", href: contactLinks.github },
  { key: "linkedin", icon: LinkedinIcon, label: "LinkedIn", href: contactLinks.linkedin },
  { key: "twitter", icon: XIcon, label: "X / Twitter", href: contactLinks.twitter },
].filter((l) => l.href);

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO(Joshua): wire this up to Formspree, Resend, or your API of choice.
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-violet-bright uppercase mb-4">
            Contact
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink leading-tight">
            Let's build something useful.
          </h2>

          {directLinks.length > 0 && (
            <div className="mt-10 flex flex-col gap-3">
              {directLinks.map(({ key, icon: Icon, label, href }) => (
                <a
                  key={key}
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-ink-muted hover:text-violet-bright transition-colors w-fit"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {sent ? (
            <p className="text-sm text-ink-muted font-mono" role="status">
              Message received — I'll get back to you soon.
            </p>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-bright outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-bright outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="type" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                  Project type
                </label>
                <input
                  id="type"
                  name="type"
                  className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-bright outline-none transition-colors"
                  placeholder="Freelance, internship, collaboration…"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-ink-faint mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-violet-bright outline-none transition-colors resize-none"
                  placeholder="What are you building?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-sm font-medium text-white hover:bg-violet-bright transition-colors"
              >
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
