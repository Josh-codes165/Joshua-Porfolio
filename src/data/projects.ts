import carefinderImg from "../assets/projects/carefinder.webp";
import startupiqImg from "../assets/projects/startupiq.webp";
import kingspalmImg from "../assets/projects/kingspalm.webp";
import satiateImg from "../assets/projects/satiate.webp";
import gravityImg from "../assets/projects/gravity.webp";
import xhrineImg from "../assets/projects/xhrine.webp";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  image: string;
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
      "Interactive Mapbox facility search with specialty and ownership filters",
      "Supabase backend with role-based access via RLS",
      "Facility ratings and reviews",
      "CSV export and email sharing of results",
      "Admin tools for managing facility data",
    ],
    tech: ["React", "TypeScript", "Supabase", "Mapbox", "React Query", "Vercel"],
    image: carefinderImg,
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
      "An AI founder workspace that validates startup ideas, tracks health and investor-readiness scores, and surfaces market size and competition data through a clean dashboard.",
    features: [
      "AI-powered idea validation and scoring",
      "Startup health, success probability and investor-readiness metrics",
      "Market size and competition-level analysis",
      "Analysis activity tracked over time",
      "Supabase-backed auth and saved ideas",
    ],
    tech: ["Next.js", "React", "TypeScript", "Gemini API", "Recharts", "Supabase"],
    image: startupiqImg,
    live: "https://idea-muse-11.lovable.app",
    featured: true,
  },
  {
    slug: "satiate",
    name: "Satiate Restaurant",
    tagline: "A digital storefront for a local restaurant.",
    problem:
      "Many local restaurants have no real web presence beyond a social media page, which limits how new customers discover and trust them.",
    solution:
      "A fast, conversion-focused restaurant website with a clear menu, strong visual hierarchy and mobile-first layout.",
    features: [
      "Menu presentation built for scanning, not reading",
      "Mobile-first responsive layout",
      "Content centralized in a single data file for easy updates",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: satiateImg,
    live: "https://satiate-eight.vercel.app",
    github: "https://github.com/Josh-codes165/Satiate",
    featured: true,
  },
  {
    slug: "kings-palm-homes",
    name: "Kings Palm Homes",
    tagline: "Luxury real estate, presented like it.",
    problem:
      "Real estate listings in Owerri often live on generic templates that undersell the properties they're meant to showcase.",
    solution:
      "A premium real estate website for luxury homes and investment properties, built to feel as considered as the properties themselves.",
    features: [
      "Editorial-style property presentation",
      "Property, development and services sections",
      "Inspection scheduling call-to-action throughout",
      "Fully responsive, image-led layout",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: kingspalmImg,
    live: "https://kings-palms-homes-1.vercel.app",
    github: "https://github.com/Josh-codes165/Kings-Palms-Homes",
    featured: true,
  },
  {
    slug: "gravity-properties",
    name: "Gravity Properties",
    tagline: "Property search built around what buyers actually filter by.",
    problem:
      "Property seekers need to narrow results fast — by location, type, purpose and price — without wading through a cluttered interface.",
    solution:
      "A real estate platform for land, homes and investment opportunities in Owerri, with a structured search built around the filters buyers actually use.",
    features: [
      "Location, property type, purpose and price-range search",
      "Clean, trust-forward hero and CTA structure",
      "Responsive property browsing experience",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: gravityImg,
    live: "https://gravity-property.vercel.app",
    github: "https://github.com/Josh-codes165/Gravity-Property",
    featured: false,
  },
  {
    slug: "xhrine",
    name: "Xhrine x De Angels",
    tagline: "A 24-hour dining and nightlife venue, online.",
    problem:
      "A 24-hour dining and nightlife venue needs a site that carries the same energy as the physical space, not a generic restaurant template.",
    solution:
      "A bold, editorial website concept for a 24-hour dining and nightlife venue in New Owerri, built around dramatic typography and venue photography.",
    features: [
      "Large-format editorial typography and full-bleed imagery",
      "WhatsApp ordering and table reservation CTAs",
      "Menu, events and gallery sections",
      "Content centralized in a single data file, deployed via Vercel",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: xhrineImg,
    live: "https://xhrine.vercel.app",
    github: "https://github.com/Josh-codes165/XHRINE",
    featured: false,
  },
];
