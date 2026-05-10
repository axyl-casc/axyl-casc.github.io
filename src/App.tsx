import { useEffect, useState } from 'react';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';
import { ProjectPage } from './pages/ProjectPage';
import { projects } from './projects';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const path = window.location.pathname;
  const isOtherProjects = path.includes('other_projects');
  const projectMatch = path.match(/^\/projects\/([^/]+)\/?$/);
  const project = projectMatch ? projects.find((item) => item.slug === projectMatch[1]) : undefined;

  if (project) {
    return (
      <Layout title="Project" subtitle="Project details and links." theme={theme} onThemeChange={setTheme}>
        <ProjectPage project={project} />
      </Layout>
    );
  }

  if (isOtherProjects) {
    return (
      <Layout title="Projects" subtitle="Explore my other projects." theme={theme} onThemeChange={setTheme}>
        <OtherProjectsPage />
      </Layout>
    );
  }

  return (
    <Layout
      title="Axyl Carefoot-Schulz"
      subtitle="Software Developer | Building Scalable and User Focused Applications | Full Stack Development"
      theme={theme}
      onThemeChange={setTheme}
    >
      <HomePage />
    </Layout>
  );
}

export default App;
