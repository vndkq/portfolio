import Link from "next/link";
import ProjectTimeline from "./components/ProjectTimeline";
import { featuredProjects } from "./data/projects";
import { formatRole, portfolioRoles, projectRoleMap } from "./data/projectRoles";

export default function Home() {
  return (
    <main className="portfolio-shell" id="top">
      <header className="topbar">
        <Link className="brand" href="#top">Junho Lee</Link>
        <nav aria-label="Primary navigation">
          <Link href="#info">Info</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      <section className="minimal-hero" id="info" aria-labelledby="landing-title">
        <div className="hero-title">
          <p className="section-label">INFO</p>
          <h1 id="landing-title">Junho Lee</h1>
        </div>
        <div className="hero-profile">
          <p>서울대학교 첨단융합학부 디지털헬스케어 전공 | 경영대학 벤처경영학 연합전공 | 경영대학 경영학과 복수전공</p>
          <div className="role-index" aria-label="Roles">
            {portfolioRoles.map((role) => (
              <Link href={"/projects?focus=" + encodeURIComponent(role)} key={role}>
                {formatRole(role)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-projects" id="projects" aria-labelledby="projects-title">
        <div className="section-head section-head--inline">
          <h2 id="projects-title">Projects</h2>
          <Link className="text-link" href="/projects">All Projects ↗</Link>
        </div>

        <ProjectTimeline compact />

        <div className="project-grid project-grid--home">
          {featuredProjects.map((project, index) => {
            const roles = projectRoleMap[project.slug] ?? [];
            return (
              <Link className="project-card" href={"/projects/" + project.slug} key={project.slug}>
                <div className="project-card-media">
                  {project.cover ? (
                    <img src={project.cover.src} alt={project.title + " 미리보기"} loading={index < 4 ? "eager" : "lazy"} />
                  ) : (
                    <div className="project-card-placeholder">{project.title}</div>
                  )}
                </div>
                <div className="project-card-meta">
                  <p>{project.category}</p>
                  {project.period && <p>{project.period}</p>}
                </div>
                <h3>{project.title}</h3>
                {roles.length > 0 && (
                  <div className="role-tags">
                    {roles.map((role) => <span key={role}>{formatRole(role)}</span>)}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <div className="contact-list">
          <a href="mailto:leejunho0729@gmail.com"><span>Mail</span><strong>leejunho0729@gmail.com</strong></a>
          <a href="https://www.linkedin.com/in/junho-lee-a1065b36a/" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Junho Lee</strong></a>
          <a href="https://www.instagram.com/jh.729_/" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@jh.729_</strong></a>
        </div>
      </section>

      <footer className="minimal-footer">
        <span>Junho Lee</span>
        <span>2026</span>
      </footer>
    </main>
  );
}
