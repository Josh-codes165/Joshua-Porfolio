export type Tech = {
  name: string;
  description: string;
};

export const techGroups: { label: string; items: Tech[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", description: "My primary library for building interfaces." },
      { name: "TypeScript", description: "Default for anything beyond a quick prototype." },
      { name: "JavaScript", description: "The foundation underneath everything else." },
      { name: "Next.js", description: "For projects that need routing structure and SSR." },
      { name: "Vue", description: "Used for AltSchool coursework and Vue-based builds." },
      { name: "Nuxt", description: "Vue's answer to Next — explored alongside Vue." },
      { name: "Tailwind CSS", description: "How I style almost everything, v4 included." },
      { name: "Vite", description: "My default build tool for React projects." },
    ],
  },
  {
    label: "Data & Backend Services",
    items: [
      { name: "Supabase", description: "Auth, database and storage for most of my projects." },
      { name: "REST APIs", description: "Integrating and consuming external data sources." },
      { name: "React Query", description: "Server state, caching and data fetching." },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", description: "Version control, every project, every day." },
      { name: "GitHub", description: "Where the code lives and ships from." },
      { name: "Vercel", description: "My default deploy target for frontend projects." },
      { name: "Mapbox", description: "Interactive maps, used in CareFinder." },
    ],
  },
];
