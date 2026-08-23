export type AcademicCourse = {
  major: boolean;
  credits: number;
  grade: string;
  name: string;
};

export const academicSummary = {
  totalCredits: 69,
  majorCredits: 17,
};

export const academicCourses: AcademicCourse[] = [
  { major: false, credits: 3, grade: "A+", name: "대학영어 2: 글쓰기" },
  { major: false, credits: 2, grade: "A-", name: "수학 1" },
  { major: false, credits: 1, grade: "A+", name: "수학연습 1" },
  { major: false, credits: 3, grade: "A+", name: "물리학 1" },
  { major: false, credits: 1, grade: "S", name: "물리학실험 1" },
  { major: false, credits: 3, grade: "A+", name: "컴퓨팅 기초: 처음 만나는 컴퓨팅" },
  { major: true, credits: 3, grade: "S", name: "첨단융합전공과 나의 미래 1: 탐색" },
  { major: false, credits: 3, grade: "S", name: "베리타스 강좌 1: 도시와 예술" },
  { major: false, credits: 3, grade: "A0", name: "철학개론" },
  { major: false, credits: 2, grade: "A+", name: "대학 글쓰기 1" },
  { major: false, credits: 2, grade: "A+", name: "수학 2" },
  { major: false, credits: 1, grade: "A+", name: "수학연습 2" },
  { major: false, credits: 3, grade: "A0", name: "물리학 2" },
  { major: false, credits: 1, grade: "S", name: "물리학실험 2" },
  { major: false, credits: 3, grade: "A+", name: "컴퓨팅 핵심: 컴퓨터로 생각하기" },
  { major: true, credits: 1, grade: "S", name: "첨단융합전공과 나의 미래 2: 디지털헬스케어전공 체험" },
  { major: true, credits: 1, grade: "S", name: "첨단융합전공과 나의 미래 2: 융합데이터과학전공 체험" },
  { major: false, credits: 3, grade: "S", name: "베리타스 실천: 연극적 표현과 실천" },
  { major: false, credits: 3, grade: "A0", name: "선형대수학" },
  { major: false, credits: 3, grade: "A+", name: "북한학개론" },
  { major: false, credits: 3, grade: "S", name: "(공유)빅데이터 캡스톤 디자인" },
  { major: false, credits: 3, grade: "A+", name: "교육의 이해" },
  { major: false, credits: 3, grade: "A0", name: "공학수학 1" },
  { major: true, credits: 3, grade: "A0", name: "물리화학의 기초" },
  { major: true, credits: 2, grade: "S", name: "첨단융합전공과 나의 미래 3: 개척" },
  { major: true, credits: 3, grade: "A0", name: "데이터과학개론" },
  { major: true, credits: 4, grade: "A+", name: "기초회로 이론 및 실습" },
  { major: false, credits: 3, grade: "S", name: "고급빅데이터(특수연구)" },
];
