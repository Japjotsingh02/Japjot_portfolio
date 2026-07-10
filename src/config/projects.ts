export type Project = {
  num: string;
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  previewImage?: string;
  isLive: boolean;
  liveUrl?: string;
  githubUrl?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
    name: "Coindra",
    category: "Fintech",
    year: "2025",
    description:
      "Real-time crypto market explorer with interactive calendar heatmaps across 500+ trading pairs.",
    tags: ["Next.js", "PostgreSQL", "Websockets", "Redis"],
    isLive: true,
    liveUrl: "https://coindra.vercel.app",
    githubUrl: "https://github.com/Japjotsingh02/coindra",
    previewImage: "/previews/asset-coindra-preview.png",
  },
  {
    num: "02",
    name: "Bizpilot",
    category: "AI Tool",
    year: "2025",
    description:
      "AI accounting pipeline processing 100+ documents with AWS Textract and LLM agents.",
    tags: ["React", "Typescript", "Node.js", "AWS"],
    isLive: false,
    private: true,
    liveUrl: "https://app.bizpilot.in",
    previewImage: "/previews/asset-bizpilot-preview.png",
  },
  {
    num: "03",
    name: "Denaurlen",
    category: "Social",
    year: "2024",
    description:
      "Social platform with reward components and integrated payment and analytics APIs.",
    tags: ["React", "GraphQL", "HTML/CSS", "Payments"],
    isLive: true,
    liveUrl: "https://denaurlen.com",
    previewImage: "/previews/asset-denaurlen-preview.png",
  },
];
