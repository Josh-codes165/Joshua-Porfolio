import { useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, TiktokIcon, WhatsappIcon } from "./icons";
import { contactLinks } from "../data/site";
import Reveal from "./Reveal";

const directLinks = [
  {
    key: "email",
    icon: Mail,
    label: "Email",
    href: contactLinks.email ? `mailto:${contactLinks.email}` : "",
  },
  { key: "github", icon: GithubIcon, label: "GitHub", href: contactLinks.github },
  { key: "linkedin", icon: LinkedinIcon, label: "LinkedIn", href: contactLinks.linkedin },
  { key: "twitter", icon: XIcon, label: "X / Twitter", href: contactLinks.twitter },
  { key: "tiktok", icon: TiktokIcon, label: "Tiktok", href: contactLinks.tiktok },
  { key: "whatsapp", icon: WhatsappIcon, label: "WhatsApp", href: contactLinks.whatsapp },
].filter((link) => link.href);

export default function Contact() {
  const [prepared, setPrepared] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactLinks.email) {
      window.alert("Please use one of the social links to contact me.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const type = String(formData.get("type") ?? "General enquiry");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio enquiry: ${type}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nEnquiry: ${type}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${contactLinks.email}?subject=${subject}&body=${body}`;

    setPrepared(true);
  };

  return (
    <section
      id="contact"
      className="border-t border-[#D8D8CC] bg-[#F4F1E8] px-5 py-24 text-[#111310] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20 lg:gap-28">
          <Reveal>
            <p className="mb-4 text-sm font-medium text-[#6E8058]">
              Get in touch
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#65665E] sm:text-base">
              Whether you need a website for your business, want to discuss a
              frontend role, or have an idea worth exploring, I'd like to hear
              about it.
            </p>

            <div className="mt-9 border-t border-[#D8D8CC]">
              {directLinks.map(({ key, icon: Icon, label, href }) => (
                <a
                  key={key}
                  href={href}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between gap-4 border-b border-[#D8D8CC] py-4 text-sm text-[#65665E] transition-colors hover:text-[#203B2F]"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />
                    {label}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-7 border-b border-[#D8D8CC] pb-5">
              <h3 className="text-lg font-semibold tracking-tight">
                Send me a message
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#65665E]">
                Tell me a little about what you have in mind.
              </p>
            </div>

            {prepared ? (
              <div
                role="status"
                className="border-l-2 border-[#6E8058] py-2 pl-5"
              >
                <p className="text-sm font-semibold">Your message is ready.</p>
                <p className="mt-2 text-sm leading-6 text-[#65665E]">
                  Your email app should open with your details filled in.
                  Review the message and send it to complete your enquiry.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs text-[#65665E]"
                    >
                      Your name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full border-b border-[#C8C8BA] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#929187] focus:border-[#6E8058]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs text-[#65665E]"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full border-b border-[#C8C8BA] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[#929187] focus:border-[#6E8058]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="mb-2 block text-xs text-[#65665E]"
                  >
                    What is this about?
                  </label>
                  <select
                    id="type"
                    name="type"
                    defaultValue=""
                    className="w-full border-b border-[#C8C8BA] bg-[#F4F1E8] px-0 py-3 text-sm outline-none focus:border-[#6E8058]"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="Business website">Business website</option>
                    <option value="Frontend role">Frontend development role</option>
                    <option value="Internship">Internship</option>
                    <option value="Freelance project">Freelance project</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs text-[#65665E]"
                  >
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, goals, or opportunity..."
                    className="w-full resize-y border-b border-[#C8C8BA] bg-transparent px-0 py-3 text-sm leading-7 outline-none transition-colors placeholder:text-[#929187] focus:border-[#6E8058]"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border-b border-[#6E8058] pb-3 pt-2 text-sm font-semibold transition-colors hover:text-[#526442]"
                >
                  Prepare message
                  <Send
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-xs leading-5 text-[#777970]">
                  Your email app opens so you can review and send the message.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}