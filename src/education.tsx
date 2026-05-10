export type EducationItem = {
  title: string;
  meta: string;
  details: string[];
  tags: string[];
};

export const educationItems: EducationItem[] = [
  {
    title: 'Bachelor of Science – Computer Science',
    meta: 'Mount Royal University · September 2020 – May 2026 · Calgary, AB',
    details: [
      'Cumulative GPA: 3.23 / 4.0.',
      'Math cognate and Go AI final project.'
    ],
    tags: ['Computer Science', 'Mathematics', 'Go AI']
  },
  {
    title: 'Robert Thirsk High School',
    meta: '2015 – 2018',
    details: ['Robotics club and science club.'],
    tags: ['Robotics', 'Science Club']
  },
  {
    title: 'Hockey Alberta - Central Zone Referee Training',
    meta: '2014 – 2015 · Mount Royal University · Calgary, AB',
    details: ['Linesman/Referee for Novice and Atom games.'],
    tags: ['Referee Training', 'Leadership']
  }
];
