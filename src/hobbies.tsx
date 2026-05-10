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
    slug: 'sports-history',
    title: 'Sports & Athletics',
    hobbyUrl: '',
    description: 'Long-term participation in Calgary minor hockey (Timbits to Midget, 2005–2016), Saracens Rugby (2014), Track Team (2012–2014), and Robert Thirsk Cross Country (2016–2017).',
    section: 'other',
    tags: ['Hockey', 'Rugby', 'Track', 'Cross Country']
  },
  {
    slug: 'reading-travel-robotics',
    title: 'Reading, Travel & Robotics',
    hobbyUrl: '',
    description: 'I enjoy reading, travel, robotics tinkering, programming side projects, and new adventures outdoors.',
    section: 'other',
    tags: ['Reading', 'Travel', 'Robotics', 'Adventures']
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
