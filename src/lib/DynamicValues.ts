import {
  ICombinedInformation,
  IDirectMessageItem,
  IInitialInformation,
  IListItem,
  IOpenSourceContribution,
  IEducation,
  ISkillCategory,
} from "./Models";

class DynamicValues {
  static initialInformation: IInitialInformation = {
    name: "shreehari.",
    intro:
      "i build and scale ai systems and infrastructure. i'm focused on engineering robust, production-ready software that handles complexity at scale.",
    email: "shreehari.vaasishta@gmail.com",
  };

  static directMessageItems: Array<IDirectMessageItem> = [
    {
      name: "github",
      link: "https://github.com/Shreeharivaasishta/",
    },
    {
      name: "linkedin",
      link: "https://linkedin.com/in/shreehari-vaasistha-l/",
    },
    {
      name: "X (twitter)",
      link: "https://x.com/Hary86389970",
    },
    {
      name: "medium",
      link: "https://medium.com/@shreehari9481",
    },
    {
      name: "email",
      link: "mailto:shreehari9481@gmail.com",
    },
  ];

  static experience: Array<IListItem> = [
    {
      title: "Limbik • AI & Systems Engineer",
      date: "Sep 2024 — Present",
      desc: "Leading LLM Development & Infrastructure. Architected provider-agnostic gateways, managed integrations, and engineered scalable inference systems. Achieved a 90% reduction in resource footprint without compromising system speed or stability.",
      techStack: [
        "LLM Ops",
        "Python",
        "Systems Programming",
        "Distributed Systems",
        "Kubernetes",
        "Architecture",
      ],
    },
    {
      title: "AI Planet • Founding Engineer",
      date: "Oct 2021 — Aug 2024",
      desc: "Led engineering for a platform serving 300k+ users. Optimized inference APIs by 60% and reduced cloud costs by 12%.",
      techStack: [
        "GenAI",
        "Infrastructure",
        "Scale",
        "Python",
        "Kubernetes",
      ],
    },
  ];

  static openSource: Array<IOpenSourceContribution> = [
    {
      title: "OpenAI Python SDK",
      link: "https://github.com/openai/openai-python/commits?author=shreehariVaasishta",
      role: "Contributor",
      description:
        "Fixed critical bugs in response parsing logic to support raw response handling.",
      techStack: ["Library Design", "SDKs"],
    },
    {
      title: "Netflix/Metaflow",
      link: "https://github.com/Netflix/metaflow/commits?author=ShreehariVaasishta",
      role: "Contributor",
      description:
        "Optimized Kubernetes rendering logic & fixed Markdown accessibility bugs.",
      techStack: ["Orchestration", "MLOps Tooling"],
    },
    {
      title: "KServe",
      link: "https://github.com/kserve/kserve/pull/2924",
      role: "Contributor",
      description:
        "Integrated support for dictionary-based Kubernetes config loading.",
      techStack: ["Model Serving", "Kubernetes"],
    },
    {
      title: "DjangoPackages",
      link: "https://github.com/djangopackages/djangopackages/commits?author=shreehariVaasishta",
      role: "Contributor",
      description:
        "Implemented dual licensing capabilities and advanced package features.",
      techStack: ["Ecosystem", "Open Source"],
    },
  ];

  static operatingPrinciples: string[] = [
    "simplicity over complexity always wins.",
    "don't wait to see it to believe it. believe it to see it.",
    "we all serve a unique purpose. keep moving until you find yours.",
  ];

  static competencies: ISkillCategory[] = [
    {
      title: "Practices",
      skills: ["System Design", "Microservices", "Scalability", "LLM Ops"],
    },
    {
      title: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "Rust"],
    },
    {
      title: "Backend",
      skills: ["FastAPI", "Django", "Node.js", "Spring Boot", "REST APIs"],
    },
    {
      title: "Infrastructure",
      skills: ["Kubernetes", "AWS", "Docker", "Terraform", "CI/CD"],
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "Redis", "MySQL", "MongoDB", "ETL Pipelines"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "React Native"],
    },
  ];

  static education: IEducation[] = [
    {
      institution: "University of Mysore",
      degree: "Master of Computer Applications",
      description: "GPA: 9.2/10 • 2023-2025",
      isAccent: true,
    },
    {
      institution: "Bangalore University",
      degree: "Bachelor's Degree",
      description: "GPA: 8.18/10 • 2018-2021",
    },
  ];
}

export const combinedInformation: ICombinedInformation = {
  initialInformation: DynamicValues.initialInformation,
  directMessageItems: DynamicValues.directMessageItems,
  experience: DynamicValues.experience,
  openSource: DynamicValues.openSource,
  operatingPrinciples: DynamicValues.operatingPrinciples,
  competencies: DynamicValues.competencies,
  education: DynamicValues.education,
};
