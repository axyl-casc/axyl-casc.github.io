import { CardGrid } from '../components/CardGrid';
import { Section } from '../components/Section';
import { experienceItems } from '../experience';
import { featuredHobbies } from '../hobbiesCards';
import { featuredProjects } from '../projectsCards';

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
        {experienceItems.map((item) => (
          <div key={item.title} className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-2">
              <h3 className="card-title text-base">{item.title}</h3>
              <p className="text-sm opacity-70">{item.meta}</p>
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
              <div className="card-actions pt-2">
                {item.tags.map((tag, index) => (
                  <div
                    key={tag}
                    className={[
                      'badge',
                      index === 0 ? 'badge-primary' : '',
                      index === 1 ? 'badge-secondary' : '',
                      index === 2 ? 'badge-accent' : '',
                      index > 2 ? 'badge-outline' : ''
                    ].join(' ').trim()}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
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

      <CardGrid items={featuredHobbies} />
    </div>
  </div>
</Section>
    </main>
  );
}
