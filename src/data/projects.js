// Featured projects (shown as editor windows) and the full archive table.
// Commit counts and dates come from each repository's git history.

export const projects = [
  {
    id: 'aura',
    name: 'Aura++',
    live: true,
    eager: true,
    tagline: 'Instagram-style social platform',
    built: 'solo build · 76 commits · Sep 2025 – Mar 2026',
    description:
      'Photo posts, likes, comments, bookmarks, follows and direct messages, with every interaction pushed to the other user in real time.',
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary', 'JWT'],
    flow: ['React + Redux', '⇄', 'Express API', '⇄', 'MongoDB', '+', 'Socket.IO', '+', 'Cloudinary'],
    views: [
      {
        file: 'app.png',
        src: 'assets/aura-app.webp',
        width: 770,
        height: 330,
        alt: 'Aura++ profile page with the sidebar, profile header and a post grid',
      },
      {
        file: 'architecture.png',
        src: 'assets/aura-arch.webp',
        width: 1600,
        height: 873,
        fit: 'contain',
        alt: 'Aura++ high-level architecture: Vite React client, Node and Express backend, Socket.IO server, MongoDB, Cloudinary and auth service',
      },
      {
        file: 'chat-sequence.png',
        src: 'assets/aura-seq.webp',
        width: 1600,
        height: 873,
        fit: 'contain',
        alt: 'Sequence diagram of a live chat message travelling through Socket.IO, the Express API and MongoDB',
      },
    ],
    readme: [
      {
        title: 'what it does',
        items: [
          'Photo posts with likes, comments, bookmarks and a profile grid',
          'Follows, private accounts and follower lists',
          'Real-time direct messages, online status and live notifications',
          'Admin tools to remove users and filter comments',
        ],
      },
      {
        title: 'how it works',
        items: [
          'React client with Redux Toolkit, persisted across reloads',
          'Express and Mongoose API, with Socket.IO for messages, presence and notifications',
          'Uploads pass through Multer, get resized by Sharp and are stored on Cloudinary',
          'JWT in HTTP-only cookies, bcrypt hashing and protected routes',
        ],
      },
      { title: 'documented', text: "8 diagrams and 22 component walkthroughs in the repo's docs folder." },
    ],
    demo: 'https://sparshaura.vercel.app',
    links: [
      { label: 'Live demo', href: 'https://sparshaura.vercel.app' },
      { label: 'Source', href: 'https://github.com/sparshsharma81/Aura' },
      { label: 'Design docs', href: 'https://github.com/sparshsharma81/Aura/tree/main/docs' },
    ],
    keywords: 'aura social react socket',
  },
  {
    id: 'wow',
    name: 'WOW',
    live: true,
    tagline: 'Jira-style workspace and task manager',
    built: 'solo build · 49 commits · Feb – May 2026',
    description:
      'Teams create workspaces, invite members, plan projects and move tasks across Kanban, table and calendar views, with analytics on top.',
    tags: ['Next.js', 'TypeScript', 'Hono', 'Appwrite', 'TanStack Query', 'Zod', 'Recharts'],
    flow: ['Next.js App Router', '⇄', 'Hono RPC', '⇄', 'Appwrite'],
    views: [
      {
        file: 'dashboard.png',
        src: 'assets/wow-app.webp',
        width: 1400,
        height: 762,
        alt: 'WOW workspace dashboard with task counts, tasks, projects and members',
      },
      {
        file: 'architecture.png',
        src: 'assets/wow-arch.webp',
        width: 1600,
        height: 873,
        fit: 'contain',
        alt: 'WOW container architecture: Next.js App Router, Hono RPC server, domain modules and Appwrite services',
      },
      {
        file: 'erd.png',
        src: 'assets/wow-erd.webp',
        width: 1600,
        height: 873,
        fit: 'contain',
        alt: 'WOW domain data model showing users, workspaces, members, projects and tasks',
      },
    ],
    readme: [
      {
        title: 'what it does',
        items: [
          'Workspaces with invites, member roles and permissions',
          'Tasks in drag-and-drop Kanban, table and calendar views',
          'Bulk status and position updates as tasks move',
          'Workspace and project analytics charts',
        ],
      },
      {
        title: 'how it works',
        items: [
          'A Hono API mounted inside a Next.js catch-all route, called through a typed RPC client',
          'Zod validates requests, and TanStack Query caches server state',
          'Appwrite provides auth, database and file storage',
          'Code is split by feature: auth, workspaces, projects, tasks and members',
        ],
      },
      {
        title: 'documented',
        text: '18 diagrams, including C4 containers, an ERD, auth and invite sequences, and a task state machine.',
      },
    ],
    demo: 'https://sparshwow.vercel.app',
    links: [
      { label: 'Live demo', href: 'https://sparshwow.vercel.app' },
      { label: 'Source', href: 'https://github.com/sparshsharma81/WOW' },
      { label: 'Design docs', href: 'https://github.com/sparshsharma81/WOW/tree/main/docs' },
    ],
    keywords: 'wow jira nextjs typescript hono',
  },
  {
    id: 'educonnect',
    name: 'EduConnect',
    live: true,
    tagline: 'Student and mentor platform',
    built: 'solo build · 97 commits · Jun 2025 – Apr 2026',
    description:
      'Students browse verified mentors, book slots with credits and join one-click video sessions. Mentors manage availability and get paid out.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk', 'Vonage Video', 'Zod'],
    flow: ['Next.js server actions', '⇄', 'Prisma', '⇄', 'PostgreSQL', '+', 'Clerk', '+', 'Vonage'],
    views: [
      {
        file: 'landing.png',
        src: 'assets/edu-app.webp',
        width: 876,
        height: 436,
        alt: 'EduConnect landing page titled Connect with Expert Mentors',
      },
      {
        file: 'architecture.png',
        src: 'assets/edu-arch.webp',
        width: 1600,
        height: 893,
        fit: 'contain',
        alt: 'EduConnect high-level system architecture: Next.js route and server action layers, domain services, PostgreSQL, Clerk and Vonage',
      },
    ],
    readme: [
      {
        title: 'what it does',
        items: [
          'Students browse verified mentors and book open slots',
          'Credits with tiered plans pay for sessions',
          'One-click video consultations through the Vonage Video API',
          'Admins verify mentors and manage payouts',
        ],
      },
      {
        title: 'how it works',
        items: [
          'Next.js 15 and React 19 with server actions',
          'Prisma over PostgreSQL, modelling users, availability, appointments, credit transactions and payouts',
          'Clerk handles sign-in and role-based access',
        ],
      },
      {
        title: 'next',
        tone: 'nxt',
        items: [
          'Payment gateway with Stripe or Razorpay',
          'Availability calendar view and appointment reminders',
          'Analytics dashboard',
        ],
      },
    ],
    demo: 'https://sparsh2.vercel.app',
    links: [
      { label: 'Live demo', href: 'https://sparsh2.vercel.app' },
      { label: 'Source', href: 'https://github.com/sparshsharma81/EduConnect' },
    ],
    keywords: 'edu mentor nextjs prisma vonage',
  },
  {
    id: 'chat',
    name: 'Chat',
    live: true,
    tagline: 'Privacy-first real-time messenger',
    built: 'solo build · 92 commits · Mar 2025 – Jan 2026',
    description:
      "Built for college groups, hostels and events where people shouldn't have to share a phone number. Sign up with email, then chat, share media and ask a built-in AI assistant.",
    tags: ['React', 'Zustand', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Cloudinary'],
    flow: ['React + Zustand', '⇄', 'Socket.IO', '⇄', 'Express', '⇄', 'MongoDB'],
    views: [
      {
        file: 'gemini.png',
        src: 'assets/chat-ai.webp',
        width: 1400,
        height: 764,
        alt: 'Chatnow conversation view with a Gemini AI assistant panel open beside the chat',
      },
      {
        file: 'themes.png',
        src: 'assets/chat-themes.webp',
        width: 1400,
        height: 770,
        alt: 'Chatnow theme picker with more than thirty colour themes and a live preview',
      },
    ],
    readme: [
      {
        title: 'problem',
        text: "Most messengers ask for a phone number or expose your profile, which doesn't suit college groups, hostels or one-off events.",
      },
      {
        title: 'how it works',
        items: [
          'Sign-up needs only an email and password, hashed with bcrypt at 10 salt rounds',
          'A JWT in an HTTP-only cookie guards every protected route',
          'The server maps each user to a socket, saves each message to MongoDB, then pushes it to the receiver',
          'Images go to Cloudinary, and MongoDB keeps only the secure URL',
        ],
      },
      {
        title: 'extras',
        items: [
          'Gemini AI assistant and YouTube Shorts inside the app',
          'More than thirty colour themes and browser notifications',
        ],
      },
      {
        title: 'known limits',
        tone: 'lim',
        items: [
          'The free-tier server sleeps, so the first load is slow',
          'One profile image per user, and no group chats yet',
        ],
      },
      {
        title: 'next',
        tone: 'nxt',
        items: [
          'Group chats, typing indicators and read receipts',
          'Voice and video calls over WebRTC',
          'End-to-end encryption',
        ],
      },
    ],
    demo: 'https://sparshsharma.vercel.app',
    links: [
      { label: 'Live demo', href: 'https://sparshsharma.vercel.app', note: 'first load ≈30 s' },
      { label: 'Source', href: 'https://github.com/sparshsharma81/chat' },
    ],
    keywords: 'chat socket gemini mern',
  },
  {
    id: 'job-portal',
    name: 'Job portal',
    live: false,
    diagram: true,
    tagline: 'Spring Boot hiring platform',
    built: 'solo build · Dec 2025',
    description:
      'Employers post and manage jobs, applicants browse and apply, and admins oversee users, listings and applications, each behind their own role.',
    tags: ['Java 17', 'Spring Boot 3', 'Spring MVC', 'JPA and Hibernate', 'MySQL', 'Thymeleaf'],
    flow: ['Thymeleaf', '⇄', 'Spring MVC', '⇄', 'JPA', '⇄', 'MySQL'],
    views: [],
    readme: [
      {
        title: 'how it works',
        items: [
          'Spring MVC controllers render Thymeleaf views on the server',
          'Session-based login with ADMIN, EMPLOYER and EMPLOYEE roles',
          'Services hold the business rules, and JPA repositories map entities to MySQL',
        ],
      },
    ],
    links: [{ label: 'Source', href: 'https://github.com/sparshsharma81/Job-Application-' }],
    keywords: 'java spring job',
  },
]

// Every project, newest first, in the style of a project archive.
export const archive = [
  { year: 2026, name: 'WOW', stack: ['Next.js', 'TypeScript', 'Hono', 'Appwrite'], commits: 49, live: 'https://sparshwow.vercel.app', code: 'https://github.com/sparshsharma81/WOW' },
  { year: 2025, name: 'Job portal', stack: ['Spring Boot', 'JPA', 'MySQL', 'Thymeleaf'], commits: 2, code: 'https://github.com/sparshsharma81/Job-Application-' },
  { year: 2025, name: 'Aura++', stack: ['React', 'Redux', 'Express', 'MongoDB', 'Socket.IO'], commits: 76, live: 'https://sparshaura.vercel.app', code: 'https://github.com/sparshsharma81/Aura' },
  { year: 2025, name: 'BEE', stack: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'], commits: 70, code: 'https://github.com/sparshsharma81/BEE' },
  { year: 2025, name: 'EduConnect', stack: ['Next.js', 'Prisma', 'PostgreSQL', 'Clerk', 'Vonage'], commits: 97, live: 'https://sparsh2.vercel.app', code: 'https://github.com/sparshsharma81/EduConnect' },
  { year: 2025, name: 'Chat', stack: ['React', 'Zustand', 'Express', 'Socket.IO', 'MongoDB'], commits: 92, live: 'https://sparshsharma.vercel.app', code: 'https://github.com/sparshsharma81/chat' },
  { year: 2024, name: 'Java guide', stack: ['Java', 'data structures', 'interview prep'], commits: 71, code: 'https://github.com/sparshsharma81/JAVA' },
  { year: 2024, name: 'SpicyTaste', stack: ['HTML', 'CSS', 'JavaScript', 'React'], commits: 78, live: 'https://evaluation-1-eta.vercel.app', code: 'https://github.com/sparshsharma81/evaluation-1' },
]
