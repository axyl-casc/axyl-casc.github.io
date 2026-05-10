export type ExperienceItem = {
  title: string;
  meta: string;
  details: string[];
  tags: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    title: 'Web Development Intern',
    meta: 'Infinite Mind Pictures Inc. · June 2025 – September 2025 · Calgary, AB',
    details: [
      'Helped lead the development of an internal wiki using Quartz 4, a React-based framework, to improve organization, communication, and resource sharing across the team. My work included refining visual design, improving user experience, editing custom TSX components, and building a clearer structure for team knowledge and support resources.',
      'I also created a resource portal for Infinite Mind’s neurodivergent community and partners, with an emphasis on accessibility, clarity, and inclusive UI/UX design. Alongside this, I developed a Java programming course for kids using Robocode, designing interactive lessons and activities that introduced core programming concepts through game-based learning.'
    ],
    tags: ['Quartz 4', 'React', 'UI/UX', 'Education']
  },
  {
    title: 'Programming Tutor',
    meta: 'Launch Pad Learning · May 2023 – January 2025 · Calgary, AB',
    details: [
      'Taught programming fundamentals to students ranging from children to adults, with a focus on Python, SQL, Java, and practical problem-solving. Designed hands-on activities, custom exercises, and coding lessons that helped students build confidence with core programming concepts and best practices.'
    ],
    tags: ['Python', 'SQL', 'Java', 'Mentoring']
  },
  {
    title: 'Mover & IT Support',
    meta: 'Darwin’s Moving & Deliveries · July 2018 – August 2020 · Calgary, AB',
    details: [
      'Provided technical setup and troubleshooting support for client devices, company computers, and hardware/software issues. This role strengthened my practical troubleshooting skills, communication, and ability to solve technical problems in real-world environments.'
    ],
    tags: ['IT Support', 'Troubleshooting', 'Hardware', 'Communication']
  }
];
