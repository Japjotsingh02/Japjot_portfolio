export type Experience = {
  period: string
  company: string
  location: string
  role: string
  bullets: string[]
}

export const experiences: Experience[] = [
  {
    period: 'May 2025 — Dec 2025',
    company: 'Freelance',
    location: 'Remote',
    role: 'Full Stack Developer',
    bullets: [
      'Developed responsive, accessible UI screens for Kotak Mahindra Bank / Kotak811 fintech platform using React, Next.js, and Tailwind CSS',
      'Improved performance via SSR, preloading, and asset optimization — enhanced SEO and accessibility using semantic HTML, ARIA, and i18n for multi-language support',
    ],
  },
  {
    period: 'Sep 2023 — May 2025',
    company: 'Bizpilot',
    location: 'Noida, India',
    role: 'Software Engineer',
    bullets: [
      'Processed 100+ accounting documents using AWS Textract — reduced processing time by 60% and manual errors by 75% through automated data extraction workflows',
      'Integrated LLM agents to parse bank statements, extracting 50+ data fields and automating tax filings — saving 8 hours/week in reconciliation time',
      'Built 15+ reusable TypeScript components with lazy loading, code splitting, and memoization — 45% faster page loads',
      'Developed accounting visualization dashboard (Chart.js + Redux) tracking P&L and accounts payable/receivable with ~100% data accuracy',
      'Created Playwright test suite for critical user flows in CI/CD — reduced regression testing time by 50%',
      'Reduced frontend technical debt by 40% through refactoring and implementing pagination and virtualized lists',
    ],
  },
  {
    period: 'Aug 2021 — Oct 2021',
    company: 'Denaurlen',
    location: 'Hyderabad, India',
    role: 'Frontend Developer Intern',
    bullets: [
      'Engineered Denaurlen.com (React/Bootstrap) — social media platform with 35% mobile engagement growth via reward components',
      'Integrated 5+ REST APIs including payment and analytics endpoints — reduced data load time by 40%',
    ],
  },
]
