import type { Hobby } from './types';

export const hobbies: Hobby[] = [
  {
    slug: 'baduk-go',
    title: 'Baduk / GO',
    hobbyUrl: 'https://online-go.com/user/view/1071783',
    description: 'I enjoy studying and playing GO (Baduk), from tactical puzzles to longer, strategic games online.',
    section: 'featured',
    tags: ['Baduk / Go', 'Strategy', 'Pattern Recognition']
  },
  {
    slug: 'rock-climbing',
    title: 'Rock Climbing',
    hobbyUrl: 'https://www.instagram.com/axyl.sc/',
    description: 'Bouldering and climbing help me stay active, solve movement problems, and keep improving technique.',
    section: 'featured',
    tags: ['Bouldering', 'Problem Solving', 'Fitness']
  },
  {
    slug: 'bird-watching',
    title: 'Bird Watching',
    hobbyUrl: 'https://ebird.org/profile/Nzc4Nzg0NQ',
    description: 'I like tracking sightings, identifying species, and exploring local habitats through birding.',
    section: 'other',
    tags: ['Observation', 'Nature', 'Tracking']
  }
];
