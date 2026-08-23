"use client";

import { FormEvent, useState } from "react";
import type { AcademicCourse } from "../data/academics";

type PublicCourse = Omit<AcademicCourse, "grade">;

export default function AcademicRecord({
  summary,
  courses,
}: {
  summary: { totalCredits: number; majorCredits: number };
  courses: PublicCourse[];
}) {
  const [password, setPassword] = useState("");
  const [grades, setGrades] = useState<string[] | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/academic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setGrades(null);
        setStatus(data.error ?? "비밀번호를 확인해 주세요.");
        return;
      }

      setGrades(data.grades);
      setPassword("");
      setStatus("성적을 표시했습니다.");
    } catch {
      setStatus("조회 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="academic-section" aria-labelledby="academic-table-title">
      <div className="academic-summary">
        <article>
          <span>전체 학점</span>
          <strong>{summary.totalCredits}</strong>
        </article>
        <article>
          <span>전공 학점</span>
          <strong>{summary.majorCredits}</strong>
        </article>
      </div>

      <div className="academic-lock">
        <div>
          <strong>성적 비공개</strong>
          <span>비밀번호 입력 시 성적을 조회할 수 있습니다.</span>
        </div>
        <form onSubmit={unlock}>
          <label className="sr-only" htmlFor="academic-password">성적 조회 비밀번호</label>
          <input
            id="academic-password"
            type="password"
            inputMode="numeric"
            autoComplete="off"
            maxLength={4}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            disabled={loading || grades !== null}
          />
          <button type="submit" disabled={loading || grades !== null || password.length === 0}>
            {grades ? "조회 완료" : loading ? "확인 중" : "조회"}
          </button>
        </form>
        <p role="status">{status}</p>
      </div>

      <div className="academic-table-wrap">
        <table>
          <thead>
            <tr>
              <th scope="col">전공여부</th>
              <th scope="col">학점</th>
              <th scope="col">성적</th>
              <th scope="col" id="academic-table-title">과목이름</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.name + index}>
                <td><span className={course.major ? "is-major" : ""}>{course.major ? "전공" : "비전공"}</span></td>
                <td>{course.credits}</td>
                <td>{grades?.[index] ?? "비공개"}</td>
                <td>{course.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
