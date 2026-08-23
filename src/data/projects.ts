export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  live?: string;
  github?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "carefinder",
    name: "CareFinder",
    tagline: "Find healthcare facilities across Nigeria, fast.",
    problem:
      "Finding a nearby, trustworthy hospital or clinic in Nigeria is harder than it should be — information is scattered, outdated, or missing entirely.",
    solution:
      "A civic health discovery platform that lets people search, filter and locate healthcare facilities on an interactive map, with ratings, reviews and shareable results.",
    features: [
      "Interactive Mapbox facility search with radius filtering",
      "Supabase backend with role-based access via RLS",
      "Facility ratings and reviews",
      "CSV export and email sharing of results",
      "Admin tools for managing facility data",
    ],
    tech: ["React", "TypeScript", "Supabase", "Mapbox", "React Query", "Vercel"],
    live: "https://carefinder-psi.vercel.app",
    github: "https://github.com/Josh-codes165/Carefinder",
    featured: true,
  },
  {
    slug: "startup-iq",
    name: "Startup IQ",
    tagline: "Validate a startup idea before you build it.",
    problem:
      "Founders often build before they've stress-tested whether an idea is worth building — feedback comes too late.",
    solution:
      "An interactive idea-validation tool that uses AI to analyze a startup concept and surface strengths, risks and market signal through a clean, dashboard-style interface.",
    features: [
      "AI-powered idea analysis via the Gemini API",
      "Interactive charts for scoring and breakdowns",
      "Supabase-backed auth and saved ideas",
      "Responsive dashboard UI built with App Router",
    ],
    tech: ["Next.js", "React", "TypeScript", "Gemini API", "Recharts", "Supabase"],
    featured: true,
  },
  {
    slug: "satiate",
    name: "Satiate Restaurant",
    tagline: "A digital storefront for a local restaurant.",
    problem:
      "Many local restaurants have no real web presence beyond a social media page, which limits how new customers discover and trust them.",
    solution:
      "A fast, conversion-focused restaurant website concept with a clear menu, strong visual hierarchy and mobile-first layout.",
    features: [
      "Menu presentation built for scanning, not reading",
      "Mobile-first responsive layout",
      "Content centralized in a single data file for easy updates",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    live: "https://satiate-eight.vercel.app/",
    featured: true,
  },
  {
    slug: "weather-app",
    name: "Weather App",
    tagline: "Real-time weather, handled gracefully.",
    problem:
      "Weather widgets are easy to get wrong — slow loads, broken states, and no feedback while data is fetching.",
    solution:
      "A frontend project focused on doing the fundamentals well: clean API integration, proper loading and error states, and a responsive UI.",
    features: [
      "Live weather data from a public API",
      "Loading and error states handled explicitly",
      "Responsive layout across breakpoints",
    ],
    tech: ["React", "TypeScript", "REST API"],
    featured: false,
  },
  {
    slug: "northwood",
    name: "NorthWood School",
    tagline: "An institutional website, built with structure in mind.",
    problem:
      "School websites often bury the information visitors actually need under cluttered navigation.",
    solution:
      "A polished institutional website concept with clear information architecture and a modern, structured navigation system.",
    features: [
      "Semantic, structured content sections",
      "Modern navigation system",
      "Responsive frontend architecture",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
];
