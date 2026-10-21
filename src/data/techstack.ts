import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiReactquery,
  SiGit,
  SiGithub,
  SiVercel,
  SiMapbox,
} from "react-icons/si";
import { Webhook } from "lucide-react";

export type Tech = {
  name: string;
  description: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const techGroups: { label: string; items: Tech[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", description: "My primary library for building interfaces.", icon: SiReact },
      { name: "TypeScript", description: "Default for anything beyond a quick prototype.", icon: SiTypescript },
      { name: "JavaScript", description: "The foundation underneath everything else.", icon: SiJavascript },
      { name: "Next.js", description: "For projects that need routing structure and SSR.", icon: SiNextdotjs },
      { name: "Vue", description: "Used for AltSchool coursework and Vue-based builds.", icon: SiVuedotjs },
      { name: "Tailwind CSS", description: "How I style almost everything, v4 included.", icon: SiTailwindcss },
      { name: "Vite", description: "My default build tool for React projects.", icon: SiVite },
    ],
  },
  {
    label: "Data & Backend Services",
    items: [
      { name: "Supabase", description: "Auth, database and storage for most of my projects.", icon: SiSupabase },
      { name: "REST APIs", description: "Integrating and consuming external data sources.", icon: Webhook },
      { name: "React Query", description: "Server state, caching and data fetching.", icon: SiReactquery },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Git", description: "Version control, every project, every day.", icon: SiGit },
      { name: "GitHub", description: "Where the code lives and ships from.", icon: SiGithub },
      { name: "Vercel", description: "My default deploy target for frontend projects.", icon: SiVercel },
      { name: "Mapbox", description: "Interactive maps, used in CareFinder.", icon: SiMapbox },
    ],
  },
];