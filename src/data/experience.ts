import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Tech Lead, Backend Engineer & Full Stack",
    company: "Larael S.A.C",
    date: "2025 - Present",
    description:
      "Leading technical decisions and backend architecture while contributing as a full stack developer. Focused on scalability, code quality, and mentoring developers within the team.",
    highlights: [
      "Defined backend architecture standards and best practices for Laravel-based systems.",
      "Led refactoring initiatives for legacy systems into modular and scalable structures.",
      "Mentored developers and improved development workflows and code review processes.",
    ],
    tags: ["Laravel", "Vue 3", "Architecture", "API Design", "Leadership"],
  },
  {
    title: "Full Stack & Mobile Developer",
    company: "Larael S.A.C",
    date: "2023 - 2025",
    description:
      "Architected robust custom flows inside ERPNext and built hybrid apps with Flutter to handle field operations, ensuring total syncing and accurate payment generation.",
    highlights: [
      "Built and maintained APIs with Laravel following API-first principles.",
      "Developed frontend applications using Vue 2 and Vue 3 with Composition API.",
      "Created mobile applications with Flutter for operational and business processes.",
      "Integrated ERPNext (Frappe) for custom business workflows and automation.",
    ],
    tags: ["Laravel", "Vue 2", "Vue 3", "Flutter", "ERPNext", "REST"],
  },
  {
    title: "Backend Developer",
    company: "Overskull S.A.C",
    date: "2021 - 2023",
    description:
      "Maintained and scaled high-traffic systems running on older frameworks while establishing clean pathways to modern standards.",
    highlights: [
      "Maintained and optimized legacy logistics systems with high transactional load.",
      "Improved performance of database queries using Laravel Query Builder and MySQL optimizations.",
      "Implemented integrations and enhancements in existing monolithic systems.",
    ],
    tags: ["PHP MVC", "Laravel 5.8", "MySQL", "Legacy Systems"],
  },
];
