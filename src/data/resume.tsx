import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akbar Idria",
  initials: "AI",
  url: "https://akbaridria.cloud",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/jakarta",
  description:
    "I’m a Software Engineer who enjoys turning ideas into seamless digital experiences. I focus on writing clean, efficient code and building web applications that are fast, reliable, and enjoyable to use.",
  summary:
    "Results-driven Software Engineer with a strong passion for developing scalable, maintainable, and user-friendly web applications. Proven ability to tackle complex interface challenges and enhance developer experience through innovative solutions. Skilled in implementing clean architecture and utilizing modern development tools to transform ideas into impactful digital products.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Vue",
    "Next.js",
    "Nuxt.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "akbaridria15@gmail.com",
    tel: "+6281398368772",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akbaridria",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akbaridria/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/a_idria",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:akbaridria15@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Infinid Indonesia",
      href: "https://infinid.com",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Frontend Engineer",
      logoUrl: "/infinid.png",
      start: "September 2024",
      end: "October 2025",
      description:
        "Designed and implemented microfrontend architecture, resulting in a 30% increase in development efficiency and faster feature deployment. Developed core frontend features using React and TypeScript, achieving a page application rendering time consistently below 500 milliseconds. Constructed observability pipelines using Loki, Grafana, Tempo, and Prometheus, reducing issue identification time by 30% and enhancing debugging efficiency.",
    },
    {
      company: "MNC Innovation Center",
      href: "https://www.mncinnovationcenter.com/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Frontend Engineer",
      logoUrl: "/mnc.png",
      start: "October 2022",
      end: "September 2024",
      description:
        "Contributed to the frontend architecture and performance optimization of large-scale React and Vue applications, implementing modern best practices like code splitting and lazy loading that improved load speed by 20%.",
    },
    {
      company: "DDTC",
      href: "https://ddtc.co.id/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Frontend Engineer",
      logoUrl: "/ddtc.png",
      start: "July 2021",
      end: "September 2022",
      description:
        "Contributed to developing a large-scale taxation portal for professionals and institutions, implementing modular frontend architecture that reduced code duplication by 40% and accelerated feature development cycles by 25%.",
    },
    {
      company: "PT Bank Mandiri (Persero) Tbk.",
      href: "https://bankmandiri.co.id/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Junior Software Engineer",
      logoUrl: "/mandiri.png",
      start: "July 2020",
      end: "June 2021",
      description:
        "Assisted in the development and maintenance of internal systems for KSM Product.",
    },
    {
      company: "Grab",
      href: "https://grab.com/",
      badges: [],
      location: "Indonesia",
      title: "Merchant Operational Analyst",
      logoUrl: "/grab.png",
      start: "December 2018",
      end: "December 2019",
      description:
        "Created automation tools using Google Script, Power BI, and Google Data Studio to improve operational efficiency. Processed and visualized merchant data using Python for performance insights and reporting.",
    },
    {
      company: "The eCEOs",
      href: "https://theeceos.com/",
      badges: [],
      location: "Indonesia",
      title: "Project Intern",
      logoUrl: "/eceos.png",
      start: "March 2018",
      end: "May 2018",
      description:
        "Crawled and summarized chat data from Instant Messenger WhatsApp using Python to analyze communication patterns and extract business insights.",
    },
  ],
  education: [
    {
      school: "Universitas Al-Azhar Indonesia Jakarta",
      href: "https://uai.ac.id/",
      degree: "Bachelor’s Degree in Informatics",
      logoUrl: "/uai.png",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Nexoar",
      href: "https://github.com/akbaridria/nexoar",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "Nexoar is a decentralized application for options trading on Stacks, featuring robust liquidity management. Users can provide liquidity to earn fees, and our locked liquidity mechanism ensures payouts are secure and predictable. The protocol includes a comprehensive, on-chain premium calculation logic designed for efficiency and transparency.",
      technologies: [
        "React.js",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "TailwindCSS",
        "Shadcn UI",
        "Stacks Blockchain",
        "Clarity",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akbaridria/nexoar",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://nexoar.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nexoar.jpeg",
      video: "",
    },
    {
      title: "Domainline",
      href: "https://github.com/akbaridria/domainline",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Domainline is an on-chain domain marketplace that allows users to register, list, and trade decentralized domain names. It integrates blockchain identity management and supports secure peer-to-peer transactions with transparent ownership records.",
      technologies: [
        "ReactJs",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
        "Solidity",
        "Viem",
        "Wagmi",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akbaridria/domainline",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://domainline.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/domainline.jpeg",
      video: "",
    },
    {
      title: "FlashBet Protocol",
      href: "https://github.com/akbaridria/flashbet-contract",
      dates: "Mar 2024 - Present",
      active: true,
      description:
        "FlashBet is a fully decentralized prediction market on Aptos that enables users to bet on short-term price movements using oracle-secured data from the Pyth Network. It features a continuous betting model, liquidity provider rewards, and fair payout mechanisms built into smart contracts.",
      technologies: [
        "TypeScript",
        "ReactJS",
        "TailwindCSS",
        "Shadcn UI",
        "Move",
        "Aptos Blockchain",
        "Pyth Network",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akbaridria/flashbet-contract",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://flashbet-contract.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/flashbet.jpeg",
      video: "",
    },
    {
      title: "GeneIP",
      href: "https://github.com/akbaridria/geneip",
      dates: "Feb 2024 - Present",
      active: true,
      description:
        "GeneIP is an NFT lineage and intellectual property graph explorer built on top of the Story Protocol. It visualizes relationships between digital assets, enabling creators and collectors to trace ownership, provenance, and derivative works across the ecosystem.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Story Protocol",
        "TailwindCSS",
        "ReactFlow",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/akbaridria/geneip",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://geneip.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/geneip.jpeg",
      video: "",
    },
  ],
} as const;
