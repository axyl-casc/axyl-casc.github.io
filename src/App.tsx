import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { OtherProjectsPage } from './pages/OtherProjectsPage';

function App() {
  const isOtherProjects = window.location.pathname.includes('other_projects');

  if (isOtherProjects) {
    return (
      <Layout title="Projects" subtitle="Explore my other projects.">
        <OtherProjectsPage />
      </Layout>
    );
  }

  return (
    <Layout
      title="Axyl Carefoot-Schulz"
      subtitle="Software Developer | Building Scalable and User Focused Applications | Full Stack Development"
    >
      <HomePage />
    </Layout>
  );
}

export default App;
