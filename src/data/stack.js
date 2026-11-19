// Skills with context: where each one was used and since when.

export const coreStack = [
  { skill: 'JavaScript', usedIn: 'SpicyTaste, Chat, EduConnect, BEE, Aura++', since: 2024 },
  { skill: 'React', usedIn: 'Chat, Aura++, EduConnect, WOW', since: 2025 },
  { skill: 'Node.js and Express', usedIn: 'Chat, BEE, Aura++', since: 2025 },
  { skill: 'MongoDB', usedIn: 'Chat, BEE, Aura++', since: 2025 },
  { skill: 'Socket.IO', usedIn: 'Chat, Aura++', since: 2025 },
  { skill: 'Next.js', usedIn: 'EduConnect, WOW', since: 2025 },
  { skill: 'TypeScript', usedIn: 'WOW, internship at Bajaj Finserv Health', since: 2026 },
  { skill: 'Java', usedIn: 'Java guide, Job portal', since: 2024 },
  { skill: 'Tailwind CSS', usedIn: 'Chat, Aura++, EduConnect, WOW', since: 2025 },
]

export const alsoShipped = [
  { area: 'frontend', items: 'Redux Toolkit, Zustand, TanStack Query, shadcn/ui' },
  { area: 'backend', items: 'Hono, Spring Boot, REST APIs, JWT auth' },
  { area: 'data', items: 'PostgreSQL, MySQL, Prisma, JPA and Hibernate' },
  { area: 'platforms', items: 'Appwrite, Clerk, Cloudinary, Vonage, Vercel, Docker, AWS' },
  { area: 'also', items: 'Python, C and C++, Git, Postman, Linux' },
]

// Non-blank lines in the five main repos, excluding dependencies,
// build output and generated UI components.
export const cloc = {
  repos: 'aura wow educonnect chat job-portal',
  rows: [
    { language: 'JavaScript', files: 161, lines: 15343 },
    { language: 'TypeScript', files: 143, lines: 8093 },
    { language: 'CSS', files: 7, lines: 1157 },
    { language: 'HTML', files: 18, lines: 764 },
    { language: 'Java', files: 14, lines: 503 },
    { language: 'Prisma', files: 1, lines: 114 },
  ],
}
