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
      'Graduated from Mount Royal University with a Bachelor of Science in Computer Science and a Mathematics cognate emphasizing statistics, network science, graph theory, and analytical problem-solving.',
      'Worked on research-driven and technical projects involving artificial intelligence, data visualization, software engineering, game development, and web technologies.',
      'Presented research and technical work at MRU Research Days and the Alberta Mathematics Dialogue, focusing on data analysis, modeling, and computational systems.',
      'Completed a senior capstone project centered around developing a Go (Baduk) AI, combining strategic search, machine learning concepts, and game theory with practical software engineering.',
      'Developed experience across full-stack web development, Python tooling, AI experimentation, systems design, and interactive application development using technologies such as Godot, TypeScript, and modern web frameworks.',
      'Strong academic interest in building transparent, well-engineered systems that bridge theoretical computer science concepts with practical real-world applications.'
    ],
    tags: [
      'Computer Science',
      'Mathematics',
      'Artificial Intelligence',
      'Go AI',
      'Research',
      'Software Engineering',
      'Data Analysis'
    ]
  },
  {
    title: 'Robert Thirsk High School',
    meta: 'Graduated Grade 12 · June 2018 · Calgary, AB',
    details: [
      'Completed Grade 12 studies with coursework and extracurricular involvement focused on technology and applied sciences.',
      'Completed Computer Science and Robotics courses, developing early programming, hardware, and engineering problem-solving skills.',
      'Participated in robotics and science clubs, contributing to collaborative technical projects and STEM-focused activities.',
      'Built foundational interests in software development, systems thinking, and technology that later continued into university studies and personal projects.'
    ],
    tags: [
      'Computer Science',
      'Robotics',
      'Science Club',
      'STEM',
      'Technology'
    ]
  },
  {
    title: 'Hockey Alberta - Central Zone Referee Training',
    meta: '2014 – 2015 · Mount Royal University · Calgary, AB',
    details: [
      'Completed referee and officiating training through Hockey Alberta’s Central Zone referee development program.',
      'Worked as a linesman and referee for Novice and Atom hockey games, managing gameplay, enforcing rules, and supporting safe competition environments.',
      'Developed communication, conflict management, leadership, and decision-making skills while working in fast-paced team sports environments.'
    ],
    tags: [
      'Referee Training',
      'Leadership',
      'Communication',
      'Teamwork',
      'Decision Making'
    ]
  }
];