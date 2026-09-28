"use client";

import { FormEvent, useState } from "react";

type PublicCourse = { major: boolean; credits: number; name: string };

export default function AcademicRecord({
  summary,
  courses,
}: {
  summary: { totalCredits: number; majorCredits: number };
  courses: PublicCourse[];
}) {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("공개 GitHub Pages 버전에서는 성적을 제공하지 않습니다.");
    setPassword("");
  }

  return (
    <section className="academic-section" aria-labelledby="academic-table-title">
      <div className="academic-summary">
        <article><span>전체 학점</span><strong>{summary.totalCredits}</strong></article>
        <article><span>전공 학점</span><strong>{summary.majorCredits}</strong></article>
      </div>
      <div className="academic-lock">
        <div><strong>성적 비공개</strong><span>공개 사이트에서는 성적을 제공하지 않습니다.</span></div>
        <form onSubmit={submit}>
          <label className="sr-only" htmlFor="academic-password">성적 조회 비밀번호</label>
          <input id="academic-password" type="password" inputMode="numeric" autoComplete="off" maxLength={4} placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button type="submit" disabled={password.length === 0}>조회</button>
        </form>
        <p role="status">{status}</p>
      </div>
      <div className="academic-table-wrap"><table><thead><tr><th scope="col">전공여부</th><th scope="col">학점</th><th scope="col">성적</th><th scope="col" id="academic-table-title">과목이름</th></tr></thead><tbody>{courses.map((course, index) => <tr key={course.name + index}><td><span className={course.major ? "is-major" : ""}>{course.major ? "전공" : "비전공"}</span></td><td>{course.credits}</td><td>비공개</td><td>{course.name}</td></tr>)}</tbody></table></div>
    </section>
  );
}
