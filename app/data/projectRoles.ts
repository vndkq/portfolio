export const portfolioRoles = [
  "Leader",
  "Product Manager",
  "Presenter",
  "Researcher",
  "Student",
  "Designer",
] as const;

export type PortfolioRole = (typeof portfolioRoles)[number];

export const projectRoleMap: Record<string, PortfolioRole[]> = {
  "data-venture": ["Product Manager", "Leader", "Presenter", "Designer"],
  tetrapod: ["Product Manager", "Designer", "Leader", "Presenter"],
  "venture-management": ["Product Manager", "Student"],
  "cisl-club": ["Leader", "Presenter", "Student", "Designer"],
  "youth-idea-feedback": ["Presenter"],
  "startup-side-projects": [],
  "student-council": ["Leader", "Student", "Designer"],
  "purdue-research": ["Leader", "Student", "Researcher", "Presenter"],
  "iise-paper": ["Leader", "Student", "Researcher"],
  "academic-status": ["Student"],
};

export const projectColorMap: Record<string, string> = {
  "data-venture": "#9bd4b0",
  tetrapod: "#70d8bf",
  "venture-management": "#d0b86d",
  "cisl-club": "#6f86ff",
  "youth-idea-feedback": "#f0a06f",
  "startup-side-projects": "#a8aaa4",
  "student-council": "#6f8ed8",
  "purdue-research": "#73b8ef",
  "iise-paper": "#65c8b1",
  "academic-status": "#d5bd78",
};

export function formatRole(role: PortfolioRole) {
  return role === "Product Manager" ? "PM" : role;
}
