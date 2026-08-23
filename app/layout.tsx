import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junho Lee — Portfolio",
  description: "이준호의 창업, 연구, 리더십 프로젝트 포트폴리오",
  openGraph: {
    title: "Junho Lee — Portfolio",
    description: "이준호의 창업, 연구, 리더십 프로젝트 포트폴리오",
  },
  twitter: {
    card: "summary",
    title: "Junho Lee — Portfolio",
    description: "이준호의 창업, 연구, 리더십 프로젝트 포트폴리오",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
