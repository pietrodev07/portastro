export interface Link {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description?: string;
  href?: string;
  tags?: string[];
}

export interface Site {
  title?: string;
  author?: string;
  description?: string;
  ogImage?: string;
  ogUrl: string;
  ogLocale: string;
  ogSiteName: string;
}
