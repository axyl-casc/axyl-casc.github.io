import { CardGrid } from '../components/CardGrid';
import { Section } from '../components/Section';
import type { CardItem } from '../types';

const projects: CardItem[] = [
  { title: "Anscombe's Quartet Research", href: 'https://github.com/axyl-casc/Anscombes_Research?tab=readme-ov-file#anscombes-quartet-research-project', description: "Created a program to replicate Anscombe's Quartet, emphasizing the importance of visual data analysis." },
  { title: 'Infinite Mind Games – Wiki Docs', href: 'https://infinite-mind-pictures-inc.github.io/Infinite-Mind-Wiki/', description: 'An interactive documentation site built with Quartz, featuring guides, learning modules, and development notes for Infinite Mind Games projects.' },
  { title: 'Beginner GO AI Game', href: 'https://zxnashx.itch.io/beginner-go-game', description: 'A GO playing interface designed to teach beginners how to play the game of GO.' },
  { title: 'Fancy Pants Outfitters (React Demo)', href: 'https://acare3.github.io/4513_2_website/', description: 'A polished React storefront demo featuring curated fashion for trendsetters, workweek looks, and night-out fits. Highlights include in-stock essentials, modern silhouettes, and standout accessories for individuals, partners, and the whole crew.' },
  { title: 'Defender Remake on Atari ST', href: 'https://github.com/axyl-casc/DefenderRemake/tree/main?tab=readme-ov-file#atari-st-game---defender', description: 'Recreated a classic arcade game using C and assembly, leveraging efficient memory management on limited hardware.' },
  { title: 'Linux Shell Development', href: 'https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell', description: 'Built a custom shell in C, handling concurrent commands and inter-process communication for a streamlined command-line experience.' },
  { title: 'Other Projects', href: '/other_projects', description: 'Explore additional projects, including software tools, data visualizations, and experimental applications.' }
];

const hobbies: CardItem[] = [
  { title: 'Baduk / GO', href: 'https://online-go.com/user/view/1071783', description: 'I enjoy studying and playing GO (Baduk), from tactical puzzles to longer, strategic games online.' },
  { title: 'Rock Climbing', href: 'https://www.instagram.com/axyl.sc/', description: 'Bouldering and climbing help me stay active, solve movement problems, and keep improving technique.' },
  { title: 'Bird Watching', href: 'https://ebird.org/profile/Nzc4Nzg0NQ', description: 'I like tracking sightings, identifying species, and exploring local habitats through birding.' }
];

export function HomePage() {
  return (
    <main className="site-main space-y-16">
      <Section title="About Me">
        <div className="space-y-4">
          <p>
            I’m a Computer Science graduate from Mount Royal University with a
            Mathematics cognate focused on statistics, network science, and
            analytical problem-solving. My work combines software development,
            data analysis, game development, and technical communication, with a
            strong interest in building transparent, well-engineered systems
            that connect theoretical ideas with practical software applications.
          </p>

          <p>
            I’ve worked on projects spanning applied AI, legacy game development,
            web platforms, database-backed applications, and research-driven
            visualization. Through presentations at MRU Research Days and the
            Alberta Mathematics Dialogue, I’ve also developed experience
            explaining technical concepts clearly to both technical and
            non-technical audiences.
          </p>
        </div>
      </Section>

      <Section title="Technical Skills">
        <div className="space-y-4">
          <p>
            I have experience with C++, C, Java, Python, SQL, JavaScript, and
            React, with a focus on efficient, practical, and maintainable
            software development.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Software Development:</strong> Algorithm design,
              system-level programming, data-driven application development,
              and backend logic
            </li>

            <li>
              <strong>Web Development:</strong> React, Tailwind CSS, TSX
              component editing, Quartz 4, Node.js, and Electron
            </li>

            <li>
              <strong>Data & Visualization:</strong> MySQL, stored procedures,
              data integrity management, Matplotlib, NumPy, and SymPy
            </li>

            <li>
              <strong>Mathematics & Modelling:</strong> Linear algebra,
              discrete mathematics, calculus, statistics, network science, and
              mathematical modelling
            </li>

            <li>
              <strong>Teaching & Mentoring:</strong> Python, SQL, and Java
              instruction, curriculum development, and hands-on coding activities
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-6">
          <CardGrid items={projects} />
        </div>
      </Section>

      <Section title="Experience">
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="font-semibold">
              Web Development Intern, Infinite Mind Pictures Inc.
            </h3>

            <p className="text-sm text-neutral-600">
              June 2025 – September 2025 · Calgary, AB
            </p>

            <p>
              Helped lead the development of a new internal wiki using Quartz 4,
              a React-based framework, to improve organization, communication,
              and resource sharing across the team. My work included refining
              visual design, improving user experience, editing custom TSX
              components, and building a clearer structure for team knowledge and
              support resources.
            </p>

            <p>
              I also created a resource portal designed to support Infinite
              Mind’s neurodivergent community and partners, with an emphasis on
              accessibility, clarity, and inclusive UI/UX design. Alongside this,
              I developed a Java programming course for kids using Robocode,
              designing interactive lessons and activities that introduced core
              programming concepts through game-based learning.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">
              Programming Tutor, Launch Pad Learning
            </h3>

            <p className="text-sm text-neutral-600">
              May 2023 – January 2025 · Calgary, AB
            </p>

            <p>
              Taught programming fundamentals to students ranging from children
              to adults, with a focus on Python, SQL, Java, and practical
              problem-solving. Designed hands-on activities, custom exercises,
              and coding lessons that helped students build confidence with core
              programming concepts and best practices.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">
              Mover & IT Support, Darwin’s Moving & Deliveries
            </h3>

            <p className="text-sm text-neutral-600">
              July 2018 – August 2020 · Calgary, AB
            </p>

            <p>
              Provided technical setup and troubleshooting support for client
              devices, company computers, and hardware/software issues. This role
              strengthened my practical troubleshooting skills, communication,
              and ability to solve technical problems in real-world environments.
            </p>
          </div>
        </div>
      </Section>

      <hr className="border-neutral-300" />

      <Section title="Hobbies">
        <CardGrid items={hobbies} />
      </Section>
    </main>
  );
}