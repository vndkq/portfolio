import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademicRecord from "../../components/AcademicRecord";
import { academicCourses, academicSummary } from "../../data/academics";
import { getProject } from "../../data/projects";
import { formatRole, projectRoleMap } from "../../data/projectRoles";

type ProjectParams = { params: Promise<{ slug: string }> };

function projectDescription(excerpt: string, content: string, title: string) {
  const source = excerpt || content || title + " — Junho Lee Portfolio";
  return source.length > 155 ? source.slice(0, 152) + "…" : source;
}

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = project.title + " — Junho Lee";
  const description = projectDescription(project.excerpt, project.content, project.title);
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3002";
  const protocol = host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https";
  const image = project.cover ? new URL(project.cover.src, protocol + "://" + host).toString() : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextProject = project.nextSlug ? getProject(project.nextSlug) : undefined;
  const roles = projectRoleMap[project.slug] ?? [];
  const isAcademic = project.slug === "academic-status";
  const publicCourses = academicCourses.map((course) => ({
    major: course.major,
    credits: course.credits,
    name: course.name,
  }));

  return (
    <main className="case-page">
      <header className="topbar">
        <Link className="brand" href="/">Junho Lee</Link>
        <nav aria-label="Project navigation">
          <Link href="/#info">Info</Link>
          <Link href="/projects" aria-current="page">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="case-hero">
        <Link className="back-link" href="/projects">← Projects</Link>
        <div className="case-meta">
          <span>{project.category}</span>
          {project.period && <span>{project.period}</span>}
        </div>
        <h1>{project.title}</h1>
        {roles.length > 0 && (
          <div className="role-tags">{roles.map((role) => <span key={role}>{formatRole(role)}</span>)}</div>
        )}
      </section>

      {project.content && !isAcademic && (
        <section className="case-story">
          <p className="section-label">PROJECT</p>
          <p>{project.content}</p>
        </section>
      )}

      {isAcademic && <AcademicRecord summary={academicSummary} courses={publicCourses} />}

      {project.documents && project.documents.length > 0 && (
        <section className="case-documents" aria-labelledby="documents-title">
          <div className="section-head section-head--inline">
            <h2 id="documents-title">Archive</h2>
          </div>
          <div className="document-list">
            {project.documents.map((document) => (
              <article className="document-item" key={document.src}>
                <a href={document.src} target="_blank" rel="noreferrer" className="document-link">
                  <span>{document.type}</span>
                  <strong>{document.label}</strong>
                  <b>원본 열기 ↗</b>
                </a>
                {document.previewSrc && (
                  <div className="document-preview-wrap">
                    <p>PDF PREVIEW</p>
                    <iframe
                      className="document-preview"
                      src={document.previewSrc + "#view=FitH"}
                      title={document.label + " PDF 미리보기"}
                      loading="lazy"
                    />
                    <a href={document.previewSrc} target="_blank" rel="noreferrer">PDF 새 창에서 열기 ↗</a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      )}

      {project.files.length > 0 && project.slug !== "purdue-research" && (
        <section className="case-gallery" aria-labelledby="gallery-title">
          <div className="section-head section-head--inline">
            <h2 id="gallery-title">Archive</h2>
            <p className="gallery-note">이미지 클릭 시 원본 열기</p>
          </div>
          <div className="gallery-rail">
            {project.files.map((file, index) => (
              <a href={file.src} target="_blank" rel="noreferrer" className="gallery-item" key={file.src}>
                <div><img src={file.src} alt={file.alt} loading={index < 2 ? "eager" : "lazy"} /></div>
                <span>{file.label} ↗</span>
              </a>
            ))}
          </div>
        </section>
      )}

      {nextProject && (
        <Link className="next-project" href={"/projects/" + nextProject.slug}>
          <span>NEXT PROJECT</span>
          <strong>{nextProject.title}</strong>
          <b>↗</b>
        </Link>
      )}

      <footer className="minimal-footer">
        <Link href="/">Junho Lee</Link>
        <Link href="/#contact">Contact ↗</Link>
      </footer>
    </main>
  );
}
