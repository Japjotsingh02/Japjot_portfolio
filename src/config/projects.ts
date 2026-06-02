export type Project = {
  num: string
  name: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  private?: boolean
}

export const projects: Project[] = [
  {
    num: '01',
    name: 'Coindra',
    description:
      'A real-time crypto market explorer visualizing 500+ trading pairs as interactive calendar heatmaps. Each day shows volatility patterns, liquidity scores, and performance trends — built to answer when to trade, not just what.',
    tags: [
      'Next.js',
      'TypeScript',
      'WebSockets',
      'ECharts',
      'React Query',
      'Zustand',
      'Redis',
      'PostgreSQL',
      'Framer Motion',
    ],
    liveUrl: 'https://coindra.vercel.app',
    githubUrl: 'https://github.com/YOUR_USERNAME/coindra',
    featured: true,
  },
  {
    num: '02',
    name: 'Bizpilot — LLM Document Automation',
    description:
      'AI-powered accounting pipeline processing 100+ documents using AWS Textract and LLM agents. Extracted 50+ data fields per document, automated tax filings, and reduced reconciliation time by 8 hours/week.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'AWS Textract',
      'LLM Agents',
      'Chart.js',
      'Redux',
    ],
    private: true,
  },
  {
    num: '03',
    name: 'Denaurlen',
    description:
      'Social media platform driving 35% mobile engagement growth via reward components. Integrated 5+ REST APIs including payment and analytics endpoints, reducing data load time by 40%.',
    tags: ['React', 'Bootstrap', 'REST APIs', 'Payments'],
    liveUrl: 'https://denaurlen.com',
  },
]
