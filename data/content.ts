export const siteConfig = {
  name: "Taslim R. Anupom",
  title: "Ph.D.",
  tagline: "Building systems at the intersection of microfluidics, software, and space biology.",
  subtitle: "Engineer. Researcher. Builder.",
  location: "Wolfforth, TX",
  phone: "(713) 355-7542",
  email: "anupom458@gmail.com",
  linkedin: "https://www.linkedin.com/in/anupom458/",
  scholar: "https://scholar.google.com/citations?hl=en&user=4R_-r1EAAAAJ",
  github: "https://anupom458.github.io",
};

export const stats = {
  publications: 7,
  patents: 2,
  yearsExp: "8+",
};

export const about = {
  bio: [
    "I build systems that bridge hardware and software — from microfluidic devices deployed on the International Space Station to IoT consumer products I designed, manufactured, and shipped.",
    "As Lead Platform Developer at NemaLife Inc., I architect scalable platforms for high-throughput _C. elegans_ phenotyping, lead a 14-person cross-functional team, and built NemaStudio.ai — our data analysis web platform using React 18, Plotly.js, and MUI. My collaborations with NASA and ESA on spaceflight payloads have resulted in 7 peer-reviewed publications (105+ citations) and a granted US patent.",
    "I hold a Ph.D. in Electrical Engineering from Texas Tech University, where my dissertation on integrated microfluidic platforms led directly to the founding of NemaLife Inc.",
  ],
  quickFacts: [
    { icon: "location" as const, text: "Wolfforth, TX" },
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
    company: "NemaLife Inc.",
    role: "Lead Platform Developer",
    period: "Jan 2023 – Present",
    color: "#8b5cf6",
    isActive: true,
    bullets: [
      "Architected scalable microfluidics-integrated platforms for automated _C. elegans_ assays",
      "Led 10-phase redesign of NemaStudio.ai (React 18, MUI, Plotly.js, WebSocket)",
      "Managed 14-member cross-functional team (6 R&D engineers, 8 data analysts)",
      "Reduced platform downtime 40% through improved troubleshooting protocols",
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
    badge: "IoT Product",
    badgeColor: "amber",
    description: "Founded and built a hardware-software company. Designed the 'Prestige Wall' — a collectible card price tracking display with 25 OLEDs, Raspberry Pi, and ESP32. Built the e-commerce platform with Stripe, eBay integration, and 518+ tests.",
    tech: ["Flask", "Raspberry Pi", "ESP32", "Docker", "Stripe", "Tailwind CSS"],
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
];

export const patents = [
  { title: "Automated Microfluidic System for Lifespan and Healthspan Analysis in Nematodes", detail: "US Patent 12,529,693 · Granted 2026", status: "granted" as const },
  { title: "A Rapid Microfluidic in-vivo Bioassay for Screening Functional Ingredients for Improving Gut Health", detail: "2023 · Pending", status: "pending" as const },
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
    skills: ["Python", "JavaScript", "React", "Flask", "MATLAB", "SQL", "Tailwind CSS", "Docker", "Git", "Linux", "REST APIs", "CI/CD"],
  },
  {
    name: "Data & Visualization",
    color: "cyan",
    skills: ["Plotly.js", "Chart.js", "Image Processing", "Data Pipelines", "WebSocket", "Framer Motion"],
  },
];
