import Reveal from "./Reveal";

const details = [
  {
    label: "Learning",
    value: "Frontend architecture and better ways to build for the web",
  },
  {
    label: "Working with",
    value: "React, TypeScript, Next.js and Tailwind CSS",
  },
  {
    label: "Interested in",
    value: "Frontend roles, internships and freelance projects",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#111310] px-5 py-24 text-[#f4f1e8] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">
        <Reveal>
          <p className="mb-5 text-sm text-[#777970]">A little about me</p>

          <h2 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            I enjoy making the web work better for people.
          </h2>
        </Reveal>

        <div>
          <Reveal
            delay={100}
            className="max-w-2xl space-y-5 text-base leading-8 text-[#aaa99f] sm:text-lg"
          >
            <p>
              I'm Joshua, a frontend developer and Computer Engineering student
              at FUTO. I enjoy taking an idea and working through the details
              that turn it into a website people can actually use.
            </p>

            <p>
              Most of my learning happens through building. I've worked on
              projects that involve interfaces, APIs, authentication and data,
              and each one has taught me something new about making web
              applications more useful and reliable.
            </p>

            <p>
              I'm still growing as a developer, and that's part of what I enjoy
              about this field. I want to work on meaningful products, learn
              from people with more experience, and help businesses bring their
              ideas online.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-[#30322b]">
            {details.map((detail, index) => (
              <Reveal
                key={detail.label}
                delay={index * 80}
                className="grid gap-2 border-b border-[#30322b] py-5 sm:grid-cols-[140px_1fr] sm:gap-6"
              >
                <dt className="text-sm text-[#777970]">{detail.label}</dt>

                <dd className="text-sm leading-6 text-[#f4f1e8]">
                  {detail.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}