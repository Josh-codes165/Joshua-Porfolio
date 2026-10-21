import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "I start by understanding the goal, the people using the product, and the problem we're trying to solve.",
  },
  {
    n: "02",
    title: "Plan the interface",
    body: "I map out the content, user flow, and layout so the experience feels clear before development begins.",
  },
  {
    n: "03",
    title: "Build",
    body: "I turn the plan into a responsive interface using modern frontend tools and maintainable code.",
  },
  {
    n: "04",
    title: "Test and refine",
    body: "I check the experience across screen sizes, fix issues, improve the details, and prepare it for launch.",
  },
];

export default function HowIWork() {
  return (
    <section
      id="process"
      className="bg-[#FAF9F5] px-5 py-24 text-[#111310] sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 grid gap-5 sm:grid-cols-[1fr_0.7fr] sm:items-end">
          <div>
            <p className="mb-4 text-sm font-medium text-[#6E8058]">
              How I work
            </p>
            <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              A thoughtful process. A better result.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#65665E] sm:justify-self-end">
            Good frontend work is more than writing code. It's about
            understanding the problem and making the experience work for the
            people who use it.
          </p>
        </Reveal>

        <div className="grid border-t border-[#D8D8CC] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              as="article"
              key={step.n}
              delay={index * 80}
              className="border-b border-[#D8D8CC] py-7 sm:px-5 sm:py-8 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="font-mono text-xs text-[#6E8058]">
                {step.n}
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#65665E]">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}