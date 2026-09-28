import Link from "next/link";
import ProjectTimeline from "../components/ProjectTimeline";
import { assetPath, featuredProjects } from "../data/projects";
import { formatRole, portfolioRoles, projectRoleMap } from "../data/projectRoles";

export default function ProjectsPage() {
  return (
    <main className="archive-page"><header className="topbar"><Link className="brand" href="/">Junho Lee</Link><nav aria-label="Archive navigation"><Link href="/#info">Info</Link><Link href="/projects" aria-current="page">Projects</Link><Link href="/#contact">Contact</Link></nav></header><section className="archive-hero"><h1>Projects</h1></section><ProjectTimeline /><nav className="archive-filters" aria-label="Project roles"><Link className="is-active" href="/projects">All</Link>{portfolioRoles.map((role) => <Link href="/projects" key={role}>{formatRole(role)}</Link>)}</nav><section className="archive-grid">{featuredProjects.map((project, index) => { const roles = projectRoleMap[project.slug] ?? []; return <Link className="archive-card" href={"/projects/" + project.slug} key={project.slug}><div className="archive-card-media">{project.cover ? <img src={assetPath(project.cover.src)} alt={project.title + " 미리보기"} loading={index < 4 ? "eager" : "lazy"} /> : <div className="project-card-placeholder">{project.title}</div>}</div><div className="archive-card-copy"><div><span>{project.category}</span>{project.period && <span>{project.period}</span>}</div><h2>{project.title}</h2>{project.excerpt && <p>{project.excerpt}</p>}{roles.length > 0 && <div className="role-tags">{roles.map((role) => <span key={role}>{formatRole(role)}</span>)}</div>}</div></Link>; })}</section><footer className="minimal-footer"><Link href="/">← Info</Link><span>{featuredProjects.length} Projects</span></footer></main>
  );
}
