// Monthly commit counts per repository, taken from git history (July 2024 – May 2026).
// Rows are ordered by each project's first commit, oldest first.

export const activityMonths = [
  '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12',
  '2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06',
  '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12',
  '2026-01', '2026-02', '2026-03', '2026-04', '2026-05',
]

export const activityRows = [
  { repo: 'spicytaste', counts: [6, 21, 23, 25, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { repo: 'java-guide', counts: [0, 0, 0, 0, 4, 12, 10, 8, 14, 11, 11, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { repo: 'chat', counts: [0, 0, 0, 0, 0, 0, 0, 0, 25, 18, 16, 14, 9, 0, 0, 9, 0, 0, 1, 0, 0, 0, 0] },
  { repo: 'educonnect', counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 3, 1, 0, 0, 0, 0, 5, 0, 0, 2, 0] },
  { repo: 'bee', counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 36, 12, 3, 8, 6, 1, 0, 0, 0, 0, 0] },
  { repo: 'aura', counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 26, 11, 0, 11, 1, 1, 0, 0] },
  { repo: 'job-portal', counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0] },
  { repo: 'wow', counts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 35, 6, 7] },
]

export const activitySummary = [
  { value: '535', label: 'commits' },
  { value: '8', label: 'solo repos' },
  { value: '23', label: 'months in a row with commits' },
]

export const activityDescription =
  'Commit activity by month from July 2024 to May 2026. SpicyTaste ran from July 2024 to March 2025, the Java guide from November 2024 to July 2025, Chat from March 2025 to January 2026, EduConnect from June 2025 to April 2026, BEE from June to December 2025, Aura++ from September 2025 to March 2026, the Job portal in December 2025, and WOW from February to May 2026.'
