import type { Link, Project, Site } from "./types";

export const SITE: Site = {
  author: "Author",
  description: "Description",
  title: "Title",
  ogImage: "og-image.png",
  ogSiteName: "og-sitename",
  ogUrl: "og-url",
  ogLocale: "og-locale",
};

export const LINKS: Link[] = [
  { label: "link #1", href: "link #1" },
  { label: "link #2", href: "link #2" },
  { label: "link #3", href: "link #3" },
  { label: "link #4", href: "link #4" },
];

export const PROJECTS: Project[] = [
  {
    href: "project-1",
    title: "Project #1",
    description: "Description",
    tags: ["tag #1", "tag #2", "tag #3"],
  },
  {
    href: "project-2",
    title: "Project #2",
    description: "Description",
    tags: ["tag #1", "tag #2"],
  },
];
