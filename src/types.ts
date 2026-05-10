export type CardItem = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  projectUrl: string;
  section: 'featured' | 'other';
  tags: string[];
};
