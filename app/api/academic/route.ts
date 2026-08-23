import { academicCourses } from "../../data/academics";

export async function POST(request: Request) {
  let password = "";

  try {
    const body = await request.json();
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return Response.json({ error: "올바른 요청이 아닙니다." }, { status: 400 });
  }

  if (password !== "0000") {
    return Response.json({ error: "비밀번호가 올바르지 않습니다." }, { status: 401 });
  }

  return Response.json({ grades: academicCourses.map((course) => course.grade) });
}
