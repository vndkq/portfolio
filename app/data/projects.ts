export type ActivityKind = "MAIN" | "SIDE";
export type Activity = { name: string; role: string; result: string; kind: ActivityKind };

export type ProjectDocument = {
  src: string;
  label: string;
  type: "PDF" | "PPTX";
  previewSrc?: string;
};

export type ProjectFile = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  year: string;
  period: string;
  accent: string;
  cover?: ProjectFile;
  files: ProjectFile[];
  documents?: ProjectDocument[];
  nextSlug?: string;
};

export function assetPath(src: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return basePath ? `${basePath}${src}` : src;
}

function makeFrameFiles(folder: string, project: string, count = 25): ProjectFile[] {
  return [
    { src: `/images/${folder}/Frame.webp`, alt: `${project} 자료 표지`, label: "ARCHIVE 01" },
    ...Array.from({ length: count - 1 }, (_, index) => ({
      src: `/images/${folder}/Frame-${index + 1}.webp`,
      alt: `${project} 자료 ${index + 2}`,
      label: `ARCHIVE ${String(index + 2).padStart(2, "0")}`,
    })),
  ];
}

function makeNamedFiles(folder: string, project: string, names: string[]): ProjectFile[] {
  return names.map((name, index) => ({
    src: `/images/${folder}/${name}`,
    alt: `${project} 자료 ${index + 1}`,
    label: `ARCHIVE ${String(index + 1).padStart(2, "0")}`,
  }));
}

function withCover(project: Omit<Project, "cover">): Project {
  return { ...project, cover: project.files[0] };
}

const dataVentureFiles = makeFrameFiles("data-venture-webp", "DATA VENTURE 공모전");
const tetrapodFiles = makeFrameFiles("tetrapod-webp", "TETRAPOD 프로젝트", 23);
const ventureManagementFiles = makeNamedFiles("venture-management", "연합전공 벤처경영학", ["venture-management.webp"]);
const cislClubFiles = makeNamedFiles("cisl-club", "C!SL 프레젠테이션 동아리 활동", [
  "cisl-01.webp",
  "cisl-02.webp",
  "cisl-03.webp",
  "cisl-04.webp",
  "cisl-05.webp",
  "cisl-06.webp",
]);
const studentCouncilFiles = makeNamedFiles("student-council", "첨단융합학부 학생회 바다 디자인소통국 부국장", ["student-council.webp"]);
const purdueFiles = makeNamedFiles("purdue-research", "퍼듀대학교 해외 연구 프로그램", [
  "purdue-opt-01.jpg",
  "purdue-opt-02.jpg",
  "purdue-opt-03.jpg",
  "purdue-opt-04.jpg",
  "purdue-opt-05.jpg",
  "purdue-opt-06.jpg",
  "purdue-opt-07.jpg",
  "purdue-opt-08.jpg",
  "purdue-doc-01.jpg",
  "purdue-doc-02.jpg",
  "purdue-doc-03.jpg",
  "purdue-doc-04.jpg",
  "purdue-doc-05.jpg",
  "purdue-doc-06.jpg",
]);
const iiseFiles = makeNamedFiles("iise-paper", "IISE 논문 준비 프로젝트", ["iise-01.webp"]);

export const featuredProjects: Project[] = [
  withCover({
    slug: "data-venture",
    title: "DATA VENTURE 공모전",
    category: "창업 관련 활동",
    excerpt: "2025년 8월 초부터 11월 말까지, 실리콘밸리 연수에서 구체화한 창업에 대한 관심을 실제 사업 아이디어로 발전시키기 위해 DATA VENTURE 공모전에 참여하였습니다.",
    content: `2025년 8월 초부터 11월 말까지, 실리콘밸리 연수에서 구체화한 창업에 대한 관심을 실제 사업 아이디어로 발전시키기 위해 DATA VENTURE 공모전에 참여하였습니다. 동기 두 명과 함께 반복되는 통학·출퇴근 경로를 배송 자원으로 활용하는 P2P 배송 플랫폼 ‘겸사겸사’를 기획하였고, 시장 조사와 인터뷰·설문, 참가자 모집을 거쳐 파일럿 테스트를 운영했습니다. 플랫폼 설계, 프로젝트에서 실제 배송 수행 데이터 수집, 이동 루틴 기반 매칭 구조 구체화, 피치덱 구성과 결선 발표를 주도적으로 진행하였습니다. 파일럿 기간 동안 26건의 배송을 수행했으며 배송자 긍정 평가 88.5%, 의뢰인 긍정 평가 80.8%, 재이용 의향 89%를 확인했습니다. 이러한 시장 검증 결과를 바탕으로 2025 DATA VENTURE 문제해결 Challenge에서 최우수상 및 AWS 특별상을 수상하였고, 아이디어를 현장에서 검증하고 데이터로 설득하는 창업 역량을 키울 수 있었습니다.`,
    year: "2025",
    period: "2025.08 — 2025.11",
    accent: "#d9f27f",
    files: dataVentureFiles,
    nextSlug: "tetrapod",
  }),
  withCover({
    slug: "tetrapod",
    title: "TETRAPOD 프로젝트",
    category: "창업 관련 활동",
    excerpt: "2026년 1월 초부터 3월 중순까지, DATA VENTURE에서 검증한 ‘겸사겸사’를 실제 서비스로 발전시키기 위해 TETRAPOD 프로젝트에 참여하였습니다.",
    content: `2026년 1월 초부터 3월 중순까지, DATA VENTURE에서 검증한 ‘겸사겸사’를 실제 서비스로 발전시키기 위해 TETRAPOD 프로젝트에 참여하였습니다. 기획자 2명, 디자이너 3명, 프론트엔드 개발자 2명, 백엔드 개발자 3명으로 구성된 10인 팀에서 기획 역할을 맡았습니다. 배송 요청 생성부터 루틴 기반 매칭, 수락, 채팅, 사진 인증, 완료와 정산으로 이어지는 사용자 흐름을 정리하고, 제한된 개발 기간 안에 구현할 핵심 기능과 운영 규칙을 구체화했습니다. 이후 3월 초 진행된 데모데이에서 실제 벤처캐피탈 투자자, 자산운용사들을 대상으로 피칭 및 제품 설명 진행하였습니다. MVP를 완성해 원스토어에 출시하였으며, 아이디어를 제품으로 전환하는 과정과 다직군 협업에서 필요한 제품 기획 역량을 배울 수 있었습니다.`,
    year: "2026",
    period: "2026.01 — 2026.03",
    accent: "#8ee8d4",
    files: tetrapodFiles,
    nextSlug: "venture-management",
  }),
  withCover({
    slug: "venture-management",
    title: "연합전공 벤처경영학",
    category: "창업 관련 활동",
    excerpt: "2026년 6월 이후 벤처경영학 연합전공과 경영학과에서 창업과 경영에 관한 학습을 이어가고 있습니다.",
    content: `2026년 6월 이후 벤처경영학 연합전공과 경영학과에서 창업과 경영에 관한 학습을 이어가고 있습니다. 여러 창업 프로젝트를 직접 수행하면서 실행력은 키웠지만, 시장 검증과 사업모델 설계, 재무, 조직 운영에 대한 이론적 기반이 부족하면 경험을 일관된 의사결정으로 연결하기 어렵다는 한계를 느꼈습니다. 이에 수업에서 배운 개념을 익혀 현장의 감각에만 의존하기보다 고객 가치와 수익 구조, 성장 가능성, 조직의 실행력을 함께 검토할 수 있는 창업가로 성장하는 것이 목표입니다.`,
    year: "2026",
    period: "2026.06 — PRESENT",
    accent: "#e4b7ff",
    files: ventureManagementFiles,
    nextSlug: "cisl-club",
  }),
  withCover({
    slug: "cisl-club",
    title: "C!SL 프레젠테이션 동아리",
    category: "창업 관련 활동",
    excerpt: "2025년 9월 초부터 2026년 7월 초까지 약 10개월간 서울대학교 프레젠테이션 연구회 C!SL에서 활동하였습니다.",
    content: `2025년 9월 초부터 2026년 7월 초까지 약 10개월간 서울대학교 프레젠테이션 연구회 C!SL에서 활동하였습니다. 정기 세션을 통해 문제 정의, 해결방안, 시장 분석과 데이터 검증을 하나의 이야기로 구성하는 방법을 익혔고, 다양한 주제의 발표를 직접 진행하고 피드백을 주고받았습니다. SKY 연합 프레젠테이션 학회 협업 프로젝트에서는 팀장을 맡아 한 달간 창업 아이템의 기획과 피치덱 제작을 주도하며 투자자 관점에서 메시지를 다듬었습니다. 이 경험을 통해 복잡한 아이디어를 청중이 이해할 수 있는 논리로 바꾸는 능력을 키웠고, 이후 회장으로서 다른 구성원의 발표 성장을 돕는 단계까지 역할을 확장했습니다.`,
    year: "2025 — 2026",
    period: "2025.09 — 2026.07",
    accent: "#ffb8b1",
    files: cislClubFiles,
    nextSlug: "student-council",
  }),
  withCover({
    slug: "student-council",
    title: "첨단융합학부 학생회",
    category: "프로젝트/커뮤니티 리드",
    excerpt: "2025년 12월 중순부터 2026년 6월 말까지 첨단융합학부 학생회에서 활동했으며, 2026년 2월 말부터 임기 종료 시점까지 디자인소통국 부국장을 맡았습니다.",
    content: `2025년 12월 중순부터 2026년 6월 말까지 첨단융합학부 학생회에서 활동했으며, 2026년 2월 말부터 임기 종료 시점까지 디자인소통국 부국장을 맡았습니다. 부국장으로서 10명의 국원과 주간 회의를 진행하고, 게시판·월간 일정·홈페이지·콘텐츠 요청과 같은 정기 업무가 원활하게 진행되도록 업무를 조율했습니다. 의견이 충돌하거나 논의가 정체될 때는 주도적으로 정리하고 대안을 제시하며 구성원 간 합의점을 찾았고, 예산 관리와 외부 기관 연락, 회의 진행 등 국장단의 실무도 담당했습니다.이 경험을 통해 여러 사람의 업무를 연결하고 자원과 일정을 관리하며, 다양한 사람들과 실무적 회의를 진행하는 역량을 키웠습니다.`,
    year: "2025 — 2026",
    period: "2025.12 — 2026.06",
    accent: "#8ad3ff",
    files: studentCouncilFiles,
    nextSlug: "purdue-research",
  }),
  withCover({
    slug: "purdue-research",
    title: "퍼듀대학교 해외 연구 프로그램",
    category: "연구 관련 활동",
    excerpt: "2026년 6월 중순부터 7월 중순까지 해외 대학 생활과 연구 프로젝트를 경험하기 위해 빅데이터혁신융합대학사업단에서 주최한 퍼듀대학교 해외 연구 프로그램에 참여하였습니다.",
    content: `2026년 6월 중순부터 7월 중순까지 해외 대학 생활과 연구 프로젝트를 경험하기 위해 빅데이터혁신융합대학사업단에서 주최한 퍼듀대학교 해외 연구 프로그램에 참여하였습니다. 약 한 달간 현지 수업을 수강하고, 전국에서 모인 4명의 팀원과 함께 NTSB 항공 사고 데이터를 활용한 팀 연구 프로젝트를 진행했습니다. 프로젝트에서는 텍스트와 정형 데이터를 활용하는 병렬 머신러닝 파이프라인을 설계하고, 예측 확률에 최적화 방식을 적용해 사고 위험 예측과 의사결정 보조 프로세스를 구성했습니다. 저는 주제 구체화, 전체 연구 파이프라인과 코드 구조 설계, 발표 흐름 구성 등을 주도적으로 맡았습니다. 해외 교수진 앞에서 결과를 발표하는 과정까지 경험하며 연구 설계와 기술적 의사소통 역량을 키웠고, 프로젝트를 후속 연구와 논문 준비로 발전시키고자 하는 계기를 얻었습니다.`,
    year: "2026",
    period: "2026.06 — 2026.07",
    accent: "#c9b7ff",
    files: purdueFiles,
    documents: [
      { src: "/documents/purdue/Optimization-Project.pdf", previewSrc: "/documents/purdue/Optimization-Project.pdf", label: "Optimization Project", type: "PDF" },
      { src: "/documents/purdue/ML-Project.pptx", previewSrc: "/documents/purdue/ML-Project.pdf", label: "ML Project", type: "PPTX" },
    ],
    nextSlug: "iise-paper",
  }),
  withCover({
    slug: "iise-paper",
    title: "IISE Project",
    category: "연구 관련 활동",
    excerpt: "2026년 7월 중순부터 퍼듀대학교 연구 경험을 일회성 프로젝트로 끝내지 않고 논문 수준의 연구로 발전시키기 위해 퍼듀에서 만난 사람들과 함께 IISE 논문 준비 프로젝트를 이어가고 있습니다.",
    content: `2026년 7월 중순부터 퍼듀대학교 연구 경험을 일회성 프로젝트로 끝내지 않고 논문 수준의 연구로 발전시키기 위해 퍼듀에서 만난 사람들과 함께 IISE 논문 준비 프로젝트를 이어가고 있습니다. 세계적 산업공학 학회 IISE 투고를 목표로, 머신러닝 예측을 실제 산업 운영의 최적화 문제와 연결할 수 있는 주제를 탐색하고 연구 범위를 구체화했습니다. 현재는 AcmeTrace 데이터를 활용해 GPU의 고장 위험 순위를 예측하고, 이를 예방정비 우선순위와 작업 배치 의사결정에 활용하는 파이프라인을 중심으로 설계하고 있습니다.`,
    year: "2026",
    period: "2026.07 — PRESENT",
    accent: "#a8e6cf",
    files: iiseFiles,
    nextSlug: "academic-status",
  }),
  {
    slug: "academic-status",
    title: "학업 이수 현황",
    category: "학업",
    excerpt: "",
    content: ``,
    year: "",
    period: "",
    accent: "#d8d8d2",
    files: [],
    nextSlug: "data-venture",
  },
];

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}



