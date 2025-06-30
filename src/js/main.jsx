const Header = ({ title }) => (
  <header>
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">Aspiring Software Developer & Data Enthusiast</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://axyl-casc.github.io/" className="underline">Home</a>
        <a href="https://github.com/axyl-casc" className="underline">GitHub</a>
        <a href="https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/" className="underline">LinkedIn</a>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="mt-8 text-center bg-gray-900 text-white p-4">
    <p>&copy; 2025 Axyl Carefoot-Schulz</p>
  </footer>
);

const Home = () => (
  <main className="container mx-auto p-8 space-y-12">
    <section>
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>
        I'm a dedicated computer science student at Mount Royal University, set to graduate in 2026. My expertise lies in software development,
        data-driven applications, and systems programming. I'm passionate about crafting efficient, scalable solutions and have applied these skills in various projects.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <p>Proficient in C++, Java, Python, and SQL with a focus on:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Software Development:</strong> Algorithm design, systems programming</li>
        <li><strong>Data &amp; Visualization:</strong> MySQL, Matplotlib, NumPy</li>
        <li><strong>Operating Systems:</strong> Linux, Unix, Windows</li>
        <li><strong>Teaching &amp; Mentoring:</strong> Experience in guiding students through Python and SQL concepts</li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-6">
        <a href="https://github.com/axyl-casc/DefenderRemake/tree/main?tab=readme-ov-file#atari-st-game---defender" className="project-card">
          <h3 className="font-semibold text-blue-600">Defender Remake on Atari ST</h3>
          <p className="text-gray-700">Recreated a classic arcade game using C and assembly, leveraging efficient memory management on limited hardware.</p>
        </a>
        <a href="https://github.com/axyl-casc/linux-shell?tab=readme-ov-file#linux-shell" className="project-card">
          <h3 className="font-semibold text-blue-600">Linux Shell Development</h3>
          <p className="text-gray-700">Built a custom shell in C, handling concurrent commands and inter-process communication for a streamlined command-line experience.</p>
        </a>
        <a href="https://github.com/axyl-casc/Anscombes_Research?tab=readme-ov-file#anscombes-quartet-research-project" className="project-card">
          <h3 className="font-semibold text-blue-600">Anscombe's Quartet Research</h3>
          <p className="text-gray-700">Created a program to replicate Anscombe's Quartet, emphasizing the importance of visual data analysis.</p>
        </a>
        <a href="https://axyl-casc.github.io/Infinite-Mind-Wiki/" className="project-card">
          <h3 className="font-semibold text-blue-600">Infinite Mind Games – Wiki Docs</h3>
          <p className="text-gray-700">An interactive documentation site built with Quartz, featuring guides and development notes for Infinite Mind Games projects.</p>
        </a>
        <a href="https://zxnashx.itch.io/beginner-go-game" className="project-card">
          <h3 className="font-semibold text-blue-600">Beginner GO AI Game</h3>
          <p className="text-gray-700">A GO playing interface designed to teach beginners how to play the game of GO.</p>
        </a>
        <a href="./other_projects.html" className="project-card">
          <h3 className="font-semibold text-blue-600">Other Projects</h3>
          <p className="text-gray-700">Explore additional projects, including software tools, data visualizations, and experimental applications.</p>
        </a>
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Programming Tutor, Launch Pad Learning</h3>
          <p>Guided students in programming fundamentals, designed hands-on coding activities, and fostered problem-solving skills.</p>
        </div>
        <div>
          <h3 className="font-semibold">Mover &amp; IT Support, Darwins Moving &amp; Deliveries</h3>
          <p>Managed technical setup for clients and provided hardware/software support, developing strong troubleshooting skills.</p>
        </div>
      </div>
    </section>
  </main>
);

const Projects = () => (
  <main className="container mx-auto p-8 space-y-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <a href="https://axyl-casc.github.io/WebDevelopment/Assignment%202/" className="project-card">
        <h3 className="font-semibold text-blue-600">F1 - Race Dashboard</h3>
        <p className="text-gray-700">View different races by season. Save your favourite constructors and drivers as well.</p>
      </a>
      <a href="https://axyl-casc.github.io/Scheduler-Designer/" className="project-card">
        <h3 className="font-semibold text-blue-600">CPU Scheduler</h3>
        <p className="text-gray-700">Run different CPU scheduling algorithms interactively and view the results afterwards.</p>
      </a>
      <a href="https://github.com/axyl-casc/AirplaneGraphProject?tab=readme-ov-file#readme" className="project-card">
        <h3 className="font-semibold text-blue-600">Airplane Package Scheduler</h3>
        <p className="text-gray-700">Effectively calculates possible routes for airplanes to deliver packages with a version made in Javascript and Haskell.</p>
      </a>
    </div>
  </main>
);

const App = () => {
  const page = document.getElementById('root').dataset.page;
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal tracking-normal min-h-screen flex flex-col">
      <Header title={page === 'projects' ? 'Projects' : 'Axyl Carefoot-Schulz'} />
      {page === 'projects' ? <Projects /> : <Home />}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
