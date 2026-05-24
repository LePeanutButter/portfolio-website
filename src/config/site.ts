import type { ContactLink } from "@/src/types";

export const siteConfig = {
  name: "Santiago Botero Garcia",
  handle: "santiago.dev",
  title: "Santiago Botero Garcia | Full-Stack Technologist",
  description:
    "Systems Engineering student building scalable, human-centered digital platforms across full-stack development, cloud, AI automation, and software architecture.",
  url: "https://github.com/LePeanutButter",
} as const;

export const navigationItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/LePeanutButter",
    kind: "github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/santiago-botero-garcia-86991335b/",
    kind: "linkedin",
  },
];
