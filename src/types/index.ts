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
