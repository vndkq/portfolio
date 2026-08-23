import Link from "next/link";
import ProjectTimeline from "../components/ProjectTimeline";
import { featuredProjects } from "../data/projects";
import {
  formatRole,
  portfolioRoles,
  projectRoleMap,
  type PortfolioRole,
} from "../data/projectRoles";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ focus?: string }>;
}) {
  const { focus } = await searchParams;
  const selectedRole = portfolioRoles.includes(focus as PortfolioRole)
    ? (focus as PortfolioRole)
    : undefined;
  const projects = selectedRole
    ? featuredProjects.filter((project) => projectRoleMap[project.slug]?.includes(selectedRole))
    : featuredProjects;

  return (
    <main className="archive-page">
      <header className="topbar">
        <Link className="brand" href="/">Junho Lee</Link>
        <nav aria-label="Archive navigation">
          <Link href="/#info">Info</Link>
          <Link href="/projects" aria-current="page">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="archive-hero">
        <h1>Projects</h1>
      </section>

      <ProjectTimeline />

      <nav className="archive-filters" aria-label="Filter projects by role">
        <Link className={!selectedRole ? "is-active" : ""} href="/projects">All</Link>
        {portfolioRoles.map((role) => (
          <Link
            className={selectedRole === role ? "is-active" : ""}
            href={"/projects?focus=" + encodeURIComponent(role)}
            key={role}
          >
            {formatRole(role)}
          </Link>
        ))}
      </nav>

      <section className="archive-grid" aria-live="polite">
        {projects.map((project, index) => {
          const roles = projectRoleMap[project.slug] ?? [];
          return (
            <Link className="archive-card" href={"/projects/" + project.slug} key={project.slug}>
              <div className="archive-card-media">
                {project.cover ? (
                  <img src={project.cover.src} alt={project.title + " 미리보기"} loading={index < 4 ? "eager" : "lazy"} />
                ) : (
                  <div className="project-card-placeholder">{project.title}</div>
                )}
              </div>
              <div className="archive-card-copy">
                <div><span>{project.category}</span>{project.period && <span>{project.period}</span>}</div>
                <h2>{project.title}</h2>
                {project.excerpt && <p>{project.excerpt}</p>}
                {roles.length > 0 && (
                  <div className="role-tags">
                    {roles.map((role) => <span key={role}>{formatRole(role)}</span>)}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </section>

      <footer className="minimal-footer">
        <Link href="/">← Info</Link>
        <span>{projects.length} Projects</span>
      </footer>
    </main>
  );
}
