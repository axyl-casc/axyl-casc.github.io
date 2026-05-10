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
      'Program GPA: 3.3 / 4.0.',
      'Graduate of Mount Royal University with a degree in Computer Science and a Mathematics cognate focused on statistics, network science, and analytical problem-solving. Experienced in research-driven projects, including data analysis presentations at MRU Research Days and the Alberta Mathematics Dialogue, alongside applied AI, web development, and game development work. Completed a senior project focused on developing a Go AI, with a strong interest in building transparent, well-engineed systems that connect theoretical concepts with practical software applications.'
    ],
    tags: ['Computer Science', 'Mathematics', 'Go AI']
  },
  {
    title: 'Robert Thirsk High School',
    meta: 'Graduated Grade 12 · June 2018 · Calgary, AB',
    details: ['Completed Computer Science, Robotics, and Mathematics to the 30 level.', 'Participated in robotics club and science club.'],
    tags: ['Robotics', 'Science Club']
  },
  {
    title: 'Hockey Alberta - Central Zone Referee Training',
    meta: '2014 – 2015 · Mount Royal University · Calgary, AB',
    details: ['Linesman/Referee for Novice and Atom games.'],
    tags: ['Referee Training', 'Leadership']
  }
];
