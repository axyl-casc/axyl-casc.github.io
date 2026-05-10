import { CardGrid } from '../components/CardGrid';
import { Section } from '../components/Section';
import { projects } from '../projects';
import type { CardItem } from '../types';

const featuredProjects: CardItem[] = [
  ...projects
    .filter((project) => project.section === 'featured')
    .map((project) => ({
      title: project.title,
      href: `/projects/${project.slug}`,
      description: project.description
    })),
  {
    title: 'Other Projects',
    href: '/other_projects',
    description: 'Explore additional projects, including software tools, data visualizations, and experimental applications.'
  }
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
  <div className="card bg-base-200 shadow-md">
    <div className="card-body space-y-4">
      <p>
        I’m a Computer Science graduate from Mount Royal University with a
        Mathematics cognate focused on linear algebra, network science, and
        analytical problem-solving. I’m interested in building clear,
        well-engineered software that connects theoretical ideas with practical
        applications.
      </p>

      <p>
        My work spans applied AI, legacy game development, web platforms,
        database-backed applications, and research-driven visualization. For my
        final project, I built a Go AI designed to explain the reasoning behind
        its moves, reflecting my interest in transparent and understandable
        systems.
      </p>

      <p>
        Through presentations at MRU Research Days and the Alberta Mathematics
        Dialogue, I’ve developed experience communicating technical ideas clearly
        to both technical and non-technical audiences.
      </p>

      <div className="card-actions">
        <div className="badge badge-primary">Software Development</div>
        <div className="badge badge-secondary">Applied AI</div>
        <div className="badge badge-accent">Game Development</div>
        <div className="badge badge-outline">Technical Communication</div>
      </div>
    </div>
  </div>
</Section>

<Section title="Technical Skills">
  <div className="card bg-base-200 shadow-md">
    <div className="card-body space-y-4">
      <p>
        I have experience with C++, C, Java, Python, SQL, JavaScript, and React,
        with a focus on building efficient, practical, and maintainable software.
      </p>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">Software Development</h3>
          <p>
            Algorithm design, system-level programming, data-driven application
            development, and backend logic.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Web Development</h3>
          <p>
            React, Tailwind CSS, TSX component editing, Quartz 4, Node.js, and
            Electron.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Data &amp; Visualization</h3>
          <p>
            MySQL, stored procedures, data integrity management, Matplotlib,
            NumPy, and SymPy.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Mathematics &amp; Modelling</h3>
          <p>
            Linear algebra, discrete mathematics, calculus, statistics, network
            science, and mathematical modelling.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Teaching &amp; Mentoring</h3>
          <p>
            Python, SQL, and Java instruction, curriculum development, and
            hands-on coding activities.
          </p>
        </div>
      </div>

      <div className="card-actions">
        <div className="badge badge-primary">C++</div>
        <div className="badge badge-primary">Python</div>
        <div className="badge badge-secondary">React</div>
        <div className="badge badge-secondary">SQL</div>
        <div className="badge badge-accent">JavaScript</div>
        <div className="badge badge-outline">Java</div>
      </div>
    </div>
  </div>
</Section>

<Section title="Projects">
  <div className="card bg-base-200 shadow-md">
    <div className="card-body space-y-4">
      <p>
        A selection of projects spanning Go AI tools, interactive learning
        platforms, web documentation, systems programming, data visualization,
        and legacy game development.
      </p>

      <div className="divider my-1"></div>

      <CardGrid items={featuredProjects} />

      <div className="card-actions">
        <div className="badge badge-primary">Go / Baduk</div>
        <div className="badge badge-secondary">Web Development</div>
        <div className="badge badge-accent">Systems Programming</div>
        <div className="badge badge-outline">Data Visualization</div>
      </div>
    </div>
  </div>
</Section>
<Section title="Experience">
  <div className="card bg-base-200 shadow-md">
    <div className="card-body space-y-6">
      <p>
        Experience across web development, teaching, technical support, and
        hands-on problem-solving, with a focus on clear communication and
        practical software work.
      </p>

      <div className="divider my-1"></div>

      <div className="space-y-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-2">
            <h3 className="card-title text-base">
              Web Development Intern
            </h3>

            <p className="text-sm opacity-70">
              Infinite Mind Pictures Inc. · June 2025 – September 2025 ·
              Calgary, AB
            </p>

            <p>
              Helped lead the development of an internal wiki using Quartz 4, a
              React-based framework, to improve organization, communication, and
              resource sharing across the team. My work included refining visual
              design, improving user experience, editing custom TSX components,
              and building a clearer structure for team knowledge and support
              resources.
            </p>

            <p>
              I also created a resource portal for Infinite Mind’s
              neurodivergent community and partners, with an emphasis on
              accessibility, clarity, and inclusive UI/UX design. Alongside this,
              I developed a Java programming course for kids using Robocode,
              designing interactive lessons and activities that introduced core
              programming concepts through game-based learning.
            </p>

            <div className="card-actions pt-2">
              <div className="badge badge-primary">Quartz 4</div>
              <div className="badge badge-secondary">React</div>
              <div className="badge badge-accent">UI/UX</div>
              <div className="badge badge-outline">Education</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-2">
            <h3 className="card-title text-base">
              Programming Tutor
            </h3>

            <p className="text-sm opacity-70">
              Launch Pad Learning · May 2023 – January 2025 · Calgary, AB
            </p>

            <p>
              Taught programming fundamentals to students ranging from children
              to adults, with a focus on Python, SQL, Java, and practical
              problem-solving. Designed hands-on activities, custom exercises,
              and coding lessons that helped students build confidence with core
              programming concepts and best practices.
            </p>

            <div className="card-actions pt-2">
              <div className="badge badge-primary">Python</div>
              <div className="badge badge-secondary">SQL</div>
              <div className="badge badge-accent">Java</div>
              <div className="badge badge-outline">Mentoring</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body space-y-2">
            <h3 className="card-title text-base">
              Mover &amp; IT Support
            </h3>

            <p className="text-sm opacity-70">
              Darwin’s Moving &amp; Deliveries · July 2018 – August 2020 ·
              Calgary, AB
            </p>

            <p>
              Provided technical setup and troubleshooting support for client
              devices, company computers, and hardware/software issues. This role
              strengthened my practical troubleshooting skills, communication,
              and ability to solve technical problems in real-world environments.
            </p>

            <div className="card-actions pt-2">
              <div className="badge badge-primary">IT Support</div>
              <div className="badge badge-secondary">Troubleshooting</div>
              <div className="badge badge-accent">Hardware</div>
              <div className="badge badge-outline">Communication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Section>

      <hr className="border-neutral-300" />

<Section title="Hobbies">
  <div className="card bg-base-200 shadow-md">
    <div className="card-body space-y-4">
      <p>
        Outside of software development, I enjoy hobbies that combine strategy,
        focus, observation, and steady improvement.
      </p>

      <div className="divider my-1"></div>

      <CardGrid items={hobbies} />

      <div className="card-actions">
        <div className="badge badge-primary">Baduk / Go</div>
        <div className="badge badge-secondary">Rock Climbing</div>
        <div className="badge badge-accent">Bird Watching</div>
        <div className="badge badge-outline">Strategy</div>
      </div>
    </div>
  </div>
</Section>
    </main>
  );
}
