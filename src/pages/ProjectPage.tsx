import type { Project } from '../types';

export function ProjectPage({ project }: { project: Project }) {
  return (
    <main className="site-main flex-1">
      <section className="max-w-3xl mx-auto card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body space-y-4">
          <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
          <p className="text-base-content/80">{project.description}</p>
          <div className="pt-2">
            <a href={project.projectUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Visit Project</a>
          </div>
        </div>
      </section>
    </main>
  );
}
