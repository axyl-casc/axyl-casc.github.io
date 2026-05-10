export type CardItem = {
  title: string;
  description: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  projectUrl: string;
  section: 'featured' | 'other';
};
