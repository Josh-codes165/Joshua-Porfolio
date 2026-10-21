import xhrine from "../assets/xhrine.jpeg";
import carefinder from "../assets/carefinder.jpeg";
import gravity from "../assets/gravity.jpeg";
import startupiq from "../assets/startupiq.jpeg";
import kingpalms from "../assets/kingpalms.jpeg";
import satiate from "../assets/satiate.jpeg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image?: string;
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
    image: carefinder,
    live: "https://carefinder-psi.vercel.app",
    github: "https://github.com/Josh-codes165/Carefinder",
    featured: false,
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
    image: startupiq,
    live: "https://startup-iq-nine.vercel.app/",
    github: "https://github.com/Josh-codes165/StartupIQ",
    featured: false,
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
    image: satiate,
    live: "https://satiate-eight.vercel.app/",
    github: "https://github.com/Josh-codes165/Satiate",
    featured: false,
  },
  {
    slug: "xhrine",
    name: "Xhrine",
    tagline: "A web project built around a distinct visual identity.",
    problem: "A project exploring a clear, accessible way to present its content online.",
    solution: "A dedicated web experience with a focused layout and responsive presentation.",
    features: [
      "Responsive page layout",
      "Clear content hierarchy",
      "Consistent visual styling",
    ],
    tech: ["React", "TypeScript", "Frontend"],
    image: xhrine,
    live: "https://xhrine.vercel.app/",
    github: "https://github.com/Josh-codes165/XHRINE",
    featured: false,
  },
  {
    slug: "gravity",
    name: "Gravity",
    tagline: "A visual web experience with its own identity.",
    problem: "Presenting a digital product clearly requires a focused interface and intuitive structure.",
    solution: "A website concept centered on visual presentation and straightforward navigation.",
    features: [
      "Responsive interface",
      "Structured content",
      "Consistent visual design",
    ],
    tech: ["React", "TypeScript", "Frontend"],
    image: gravity,
    live: "https://gravity-property.vercel.app/",
    github: "https://github.com/Josh-codes165/Gravity-Property",
    featured: false,
  },
  {
    slug: "kingpalms",
    name: "King Palms",
    tagline: "A web experience designed to present a brand online.",
    problem: "A brand needs a clear online presence to communicate its offering to visitors.",
    solution: "A web project with a dedicated visual presentation and responsive layout.",
    features: [
      "Responsive page structure",
      "Brand-focused presentation",
      "Mobile-friendly layout",
    ],
    tech: ["React", "TypeScript", "Frontend"],
    image: kingpalms,
    live: "https://kings-palms-homes-1.vercel.app/",
    github: "https://github.com/Josh-codes165/Kings-Palms-Homes",
    featured: false,
  },
];
