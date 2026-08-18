import citations from "./citations.json";

export const siteConfig = {
  name: "Taslim R. Anupom",
  title: "Ph.D.",
  tagline: "Building systems at the intersection of microfluidics, software, and space biology.",
  subtitle: "Engineer. Researcher. Builder.",
  location: "Lubbock, TX",
  phone: "(713) 355-7542",
  email: "anupom458@gmail.com",
  linkedin: "https://www.linkedin.com/in/anupom458/",
  scholar: "https://scholar.google.com/citations?hl=en&user=4R_-r1EAAAAJ",
  github: "https://anupom458.github.io",
  dyneralabs: "https://dyneralabs.com",
};

export const stats = {
  publications: 7,
  patents: 3,
  yearsExp: "9+",
};

export const about = {
  bio: [
    "I build systems that bridge hardware and software — from microfluidic devices deployed on the International Space Station to IoT consumer products I designed, manufactured, and shipped. As Founder of Dynera Labs, I bring ideas from concept to manufactured product.",
    `As Lead Platform Developer at NemaLife Inc., I architect scalable platforms for high-throughput _C. elegans_ phenotyping, lead a 14-person cross-functional team, and built NemaStudio.ai — our data analysis web platform using React 18, Plotly.js, and MUI. My collaborations with NASA and ESA on spaceflight payloads have resulted in 7 peer-reviewed publications (${citations.total_citations}+ citations) and a granted US patent.`,
    "I hold a Ph.D. in Electrical Engineering from Texas Tech University, where my dissertation on integrated microfluidic platforms led directly to the founding of NemaLife Inc.",
  ],
  quickFacts: [
    { icon: "location" as const, text: "Lubbock, TX" },
    { icon: "education" as const, text: "Ph.D., Electrical Engineering" },
    { icon: "work" as const, text: "Lead Platform Developer, NemaLife" },
  ],
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  color: string;
  bullets: string[];
  isActive?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "Dynera Labs",
    role: "Founder",
    period: "2026 – Present",
    color: "#f59e0b",
    isActive: true,
    bullets: [
      "Founded an engineering and technology company specializing in integrated hardware-software product development",
      "Built the Prestige Wall — a smart display system with 25 OLEDs, Raspberry Pi, ESP32, and real-time price tracking from multiple marketplaces",
      "Developed the Vault web platform (Flask + SQLite) — a collection tracker supporting 7 grading companies, with ML-powered grading via GradeLab (YOLO/Ultralytics)",
      "Shipped an iOS app to the App Store using Capacitor, with push notifications (APNs), WidgetKit home screen widgets, and SwiftUI components",
      "Built e-commerce platform at dyneralabs.com with Stripe Checkout, eBay OAuth 2.0 integration, and social automation",
      "Containerized with Docker Compose (Flask/Gunicorn + Nginx + Cloudflared), 400+ automated tests",
    ],
  },
  {
    company: "NemaLife Inc.",
    role: "Lead Platform Developer",
    period: "Jan 2023 – Present",
    color: "#8b5cf6",
    bullets: [
      "Built PILOT, the company's lab operations platform — project tracking, QC review, inventory, scheduling, analytics and notifications — used daily by all 17 staff; 385 releases and ~1,980 automated tests since June 2026",
      "Integrated PILOT across the lab's systems: NemaStudio.ai, NemaQC (PILOT serves as its SSO provider), Project Planning, and Microsoft Teams",
      "Led 10-phase redesign of NemaStudio.ai (React 18, MUI, Plotly.js, WebSocket)",
      "Architected microfluidics platforms for automated _C. elegans_ assays",
      "Managed 14-member cross-functional team",
    ],
  },
  {
    company: "NemaLife Inc.",
    role: "Microsystems Engineer",
    period: "Mar 2022 – Dec 2022",
    color: "#06b6d4",
    bullets: [
      "Led development and scale-up of microsystem technologies for the screening platform",
      "Established lithography and 3D printing facility with comprehensive SOPs",
      "Installed platforms at client sites and delivered on-site training",
    ],
  },
  {
    company: "Texas Tech University",
    role: "Graduate Research Assistant",
    period: "Jan 2017 – Feb 2022",
    color: "#10b981",
    bullets: [
      "Built 3 microfluidic systems from concept to journal publication; 90%+ efficiency improvement",
      "Developed MATLAB image processing software analyzing 6M+ images",
      "Collaborated with NASA/ESA on ISS-deployed payloads for space biology research",
      "Filed patent that led to founding of NemaLife Inc. (2018)",
    ],
  },
];

export const education = [
  { degree: "Ph.D., Electrical Engineering", year: "May 2022", school: "Texas Tech University", dissertation: "Development of Integrated Microfluidic Platforms for Phenotyping Studies in _C. elegans_" },
  { degree: "M.S., Electrical Engineering", year: "May 2020", school: "Texas Tech University" },
  { degree: "B.S., Electrical Engineering", year: "Dec 2017", school: "Texas Tech University" },
];

export interface FeaturedProject {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  tech: string[];
  footer: string;
  gradient: string;
}

export const featuredWork: FeaturedProject[] = [
  {
    title: "NemaStudio.ai",
    badge: "Web Platform",
    badgeColor: "purple",
    description: "NemaLife's data analysis platform. Led a complete 10-phase redesign with interactive data visualization, real-time WebSocket updates, and performance optimization.",
    tech: ["React 18", "MUI v5", "Plotly.js", "Framer Motion", "WebSocket"],
    footer: "NemaLife Inc. · Internal Platform",
    gradient: "from-purple/20 to-cyan/20",
  },
  {
    title: "ISS Spaceflight Hardware",
    badge: "Space Biology",
    badgeColor: "emerald",
    description: "Collaborated with NASA and ESA to design, validate, and deploy microfluidics-integrated hardware for measuring _C. elegans_ muscle strength aboard the International Space Station.",
    tech: ["Microfluidics", "NASA", "ESA", "PDMS", "PCB Design"],
    footer: "Published in npj Microgravity",
    gradient: "from-emerald-500/20 to-accent/20",
  },
  {
    title: "Dynera Labs",
    badge: "Hardware + Software",
    badgeColor: "amber",
    description: "Founded an engineering and technology company specializing in integrated hardware-software product development. Built the Prestige Wall (25-OLED display system with RPi + ESP32), the Vault web platform (collection tracker for 7 grading companies), an iOS app (live on App Store via Capacitor), and GradeLab — an ML-powered card grading model using YOLO/Ultralytics.",
    tech: ["Flask", "Raspberry Pi", "ESP32", "Capacitor/iOS", "YOLO/ML", "Docker", "Stripe", "SQLite", "WebSocket", "APNs"],
    footer: "dyneralabs.com · Founder",
    gradient: "from-amber-500/20 to-accent/20",
  },
];

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  keyword: string;
}

export const publications: Publication[] = [
  {
    title: "Mitochondrial hydrogen sulfide supplementation improves health in the _C. elegans_ Duchenne muscular dystrophy model",
    authors: "Ellwood, R.A.; Hewitt, J.E.; ...; Anupom, T.; et al.",
    journal: "Proc. Natl. Acad. Sci. (PNAS), vol. 118, no. 9, 2021",
    keyword: "hydrogen sulfide supplementation",
  },
  {
    title: "Mitochondrial sulfide promotes life span and health span through distinct mechanisms in developing versus adult treated _C. elegans_",
    authors: "Vintila, A.R.; Slade, L.; ...; Anupom, T.; et al.",
    journal: "Proc. Natl. Acad. Sci. (PNAS), Vol. 120, No. 32, 2023",
    keyword: "Mitochondrial sulfide promotes life span",
  },
  {
    title: "Microfluidics-integrated spaceflight hardware for measuring muscle strength of _C. elegans_ on the ISS",
    authors: "Soni, P.; Anupom, T.; Lesanpezeshki, L.; Rahman, M.; et al.",
    journal: "npj Microgravity, vol. 8, no. 1, 2022",
    keyword: "Microfluidics-integrated spaceflight hardware",
  },
  {
    title: "Spaceflight induces strength decline in Caenorhabditis elegans",
    authors: "Soni, P.; Edwards, H.; Anupom, T.; Rahman, M.; et al.",
    journal: "Cells, vol. 12, no. 20, 2023",
    keyword: "Spaceflight induces strength decline",
  },
  {
    title: "A compact imaging platform for conducting _C. elegans_ phenotypic assays on Earth and in spaceflight",
    authors: "Anupom, T.; Vanapalli, S.A.",
    journal: "Life, Vol. 13, no. 1, 2023",
    keyword: "compact imaging platform",
  },
  {
    title: "Senotherapeutic peptide reduces skin biological age and improves skin health markers",
    authors: "Zonari, A.; Brace, L.E.; ...; Anupom, T. (listed); et al.",
    journal: "bioRxiv, 2020",
    keyword: "Senotherapeutic peptide",
  },
  {
    title: "NemaLife Machine: An automated microfluidic system for whole-life studies in _C. elegans_",
    authors: "Anupom, T.; et al.",
    journal: "Conference Contribution, Lancaster University EPrints, 2019",
    keyword: "NemaLife Machine",
  },
];

export const patents = [
  { title: "Automated Microfluidic System for Lifespan and Healthspan Analysis in Nematodes", detail: "US Patent 12,529,693 · Granted 2026", status: "granted" as const },
  { title: "A Rapid Microfluidic in-vivo Bioassay for Screening Functional Ingredients for Improving Gut Health", detail: "2023 · Pending", status: "pending" as const },
  { title: "Smart Multi-Display System for Dynamic Trading Card Presentation", detail: "Provisional · Filed November 2025", status: "pending" as const },
];

export interface SkillCategory {
  name: string;
  color: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Engineering",
    color: "accent",
    skills: ["Microfluidics", "MEMS", "Lab Automation", "PCB Design", "Embedded Systems", "IoT", "Lithography", "3D Printing", "Eagle", "LTspice"],
  },
  {
    name: "Software",
    color: "purple",
    skills: ["Python", "JavaScript", "React", "Flask", "MATLAB", "SQL", "Tailwind CSS", "Docker", "Git", "Linux", "REST APIs", "CI/CD", "Capacitor/iOS", "SwiftUI", "SQLite", "Three.js"],
  },
  {
    name: "Data & Visualization",
    color: "cyan",
    skills: ["Plotly.js", "Chart.js", "Image Processing", "Data Pipelines", "WebSocket", "Framer Motion", "OpenCV", "YOLO/ML"],
  },
  {
    name: "DevOps & Tools",
    color: "amber",
    skills: ["Docker", "CI/CD", "Shell/Bash", "Cloudflare", "Shapr3D (CAD)", "Nginx", "APNs"],
  },
];
