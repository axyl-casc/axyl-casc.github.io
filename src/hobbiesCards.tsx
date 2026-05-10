import { hobbies } from './hobbies';
import type { CardItem } from './types';

export const featuredHobbies: CardItem[] = [
  ...hobbies
    .filter((hobby) => hobby.section === 'featured')
    .map((hobby) => ({
      title: hobby.title,
      href: `/hobbies/${hobby.slug}`,
      description: hobby.description,
      tags: hobby.tags
    })),
  {
    title: 'Other Hobbies',
    href: '/other_hobbies',
    description: 'Explore additional hobbies and interests outside of software development.',
    tags: ['Interests', 'Lifestyle', 'Personal Growth']
  }
];
