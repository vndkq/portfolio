import Link from "next/link";
import type { CSSProperties } from "react";
import { projectColorMap } from "../data/projectRoles";

const months = [
  "25.06", "07", "08", "09", "10", "11", "12",
  "26.01", "02", "03", "04", "05", "06", "07", "08",
];

type TimelineProject = {
  slug?: string;
  title: string;
  start: number;
  end: number;
  color?: string;
};

const timelineProjects: TimelineProject[] = [
  { slug: "data-venture", title: "DATA VENTURE", start: 3, end: 6 },
  { slug: "cisl-club", title: "C!SL", start: 4, end: 14 },
  { slug: "student-council", title: "첨단융합학부 학생회", start: 7, end: 13 },
  { slug: "tetrapod", title: "TETRAPOD", start: 8, end: 10 },
  { slug: "venture-management", title: "연합전공 벤처경영학", start: 13, end: 15 },
  { slug: "purdue-research", title: "퍼듀대학교 해외 연구", start: 13, end: 14 },
  { slug: "iise-paper", title: "IISE Project", start: 14, end: 15 },
  { title: "청소년 창의아이디어경진대회 발표 피드백 및 평가역", start: 15, end: 15, color: "#ffd16a" },
];

export default function ProjectTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <section className={"project-timeline" + (compact ? " project-timeline--compact" : "")} aria-labelledby={compact ? undefined : "timeline-title"}>
      {!compact && (
        <div className="section-head section-head--inline">
          <h2 id="timeline-title">Timeline</h2>
          <span className="timeline-range">2025.06 — 2026.08</span>
        </div>
      )}
      <div className="project-timeline-scroll" tabIndex={0}>
        <div className="project-timeline-grid">
          <div className="timeline-corner">PROJECT</div>
          <div className="timeline-months">
            {months.map((month, index) => <span key={index}>{month}</span>)}
          </div>
          {timelineProjects.map((project) => (
            <div className="timeline-project-row" key={project.title}>
              {project.slug ? (
                <Link className="timeline-project-title" href={"/projects/" + project.slug}>{project.title}</Link>
              ) : (
                <span className="timeline-project-title">{project.title}</span>
              )}
              <div className="timeline-project-track" aria-hidden="true">
                <span
                  style={{
                    "--timeline-start": project.start,
                    "--timeline-end": project.end + 1,
                    "--timeline-color": project.color ?? (project.slug ? projectColorMap[project.slug] : "#f2f2ee"),
                  } as CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
