import { useEffect, useState } from 'react';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const isOtherProjects = window.location.pathname.includes('other_projects');

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
