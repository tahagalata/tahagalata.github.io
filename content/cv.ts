/**
 * All site content. Sourced verbatim from memory-bank/cvContent.md.
 * Edit here, never in components. Do not add facts absent from the CV.
 */

export const profile = {
  name: "Taha Galata",
  title: "Data Analytics Consultant",
  location: "Istanbul, Türkiye",
  summary:
    "Data Analytics Consultant with a degree in Industrial Engineering and a strong foundation in designing ETL pipelines, complex data models and business intelligence reports for financial and supply chain processes. Experienced in managing full-cycle SAP Data Analytics projects and executing end-to-end SAP BW/4HANA migrations. Broad expertise spans both the SAP ecosystem and modern cloud architectures, featuring practical knowledge in AWS Data Analytics and Engineering services, including Redshift, SageMaker and QuickSight.",
  email: "contact@tahagalata.com",
  linkedin: "https://linkedin.com/in/tahagalata",
  linkedinHandle: "linkedin.com/in/tahagalata",
  photo: "photo.png",
} as const;

export type Role = {
  /** Machine-style node identifier shown in mono, as in a lineage graph. */
  id: string;
  role: string;
  org: string;
  orgNote?: string;
  start: string;
  end: string;
  current?: boolean;
  bullets: string[];
  /** What propagated forward out of this role into the one above it. */
  carried?: string[];
  /** True when this role is not part of the data lineage above it. */
  detached?: boolean;
};

/** Ordered newest first: the graph is read top-down, edges point upward. */
export const roles: Role[] = [
  {
    id: "novadsa",
    role: "Data Analytics Consultant",
    org: "NovaDSA",
    start: "September 2024",
    end: "Present",
    current: true,
    bullets: [
      "Engineered and optimized SAP BW/4HANA data models, SAP HANA views, ABAP routines and advanced SAP PaPM functions to conduct deep data analysis and deliver consolidated financial reporting for large-scale enterprise clients such as Turkish Airlines, OPET and Eczacıbaşı VitrA Karo.",
      "Collaborated closely with global stakeholders to manage and deliver two full-cycle SAP PaPM (Profitability and Performance Management) implementations for international subsidiaries, VitrA Plitka in Russia and Villeroy & Boch in Germany.",
      "Currently working on an enterprise data lake for Vakko, utilizing AWS SageMaker to aggregate and harmonize sales related data from diverse global sources, establishing a centralized foundation for AI/ML workflows and predictive analytics.",
    ],
  },
  {
    id: "ntt_data",
    role: "SAP BW Consultant",
    org: "NTT DATA Business Solutions",
    orgNote: "BSH Data Analytics",
    start: "July 2023",
    end: "August 2024",
    carried: ["BW/4HANA migration", "Native HANA views", "DWH pipelines"],
    bullets: [
      "Taken end to end responsibility for SAP BW/4HANA migration of various analytics report sets for supply chain planning and after sales services.",
      "Worked with international business users across Turkey, Germany, Spain and China to facilitate user acceptance testing (UAT), validate data accuracy, and ensure seamless go-live transitions for upgraded analytics reports.",
      "Developed, maintained and supported DWH structures and data pipelines by using SAP BW/4HANA objects, Native HANA views and procedures.",
      "Created processes and documentations for the operation & management of new data models, reports and dashboards.",
    ],
  },
  {
    id: "bsh",
    role: "Data Analytics Project Student",
    org: "Bosch & Siemens Home Appliances",
    orgNote: "BSH",
    start: "March 2022",
    end: "June 2023",
    carried: ["Supply chain reporting", "BW/4HANA migration"],
    bullets: [
      "Taken role in SAP BW/4HANA migration and technical support of various analytics report sets and dashboards for supply chain planning.",
      "Directed a 5-person initiative to communicate the value of data analytics in achieving business objectives, effectively cultivating stronger technical ownership and strategic awareness among team members.",
    ],
  },
  {
    id: "freelance",
    role: "Freelance Web Design & Development",
    org: "Independent",
    start: "August 2020",
    end: "October 2020",
    detached: true,
    bullets: [
      "Designed and developed websites for individuals and startups to help them grow their brands and publicize their products, using modern tools and technologies such as Figma, Webflow and React.js.",
    ],
  },
];

/** The terminal edge out of the current role — the direction of travel. */
export const trajectory = {
  from: "SAP ecosystem",
  to: "AWS data engineering",
  note: "Enterprise data lake on AWS SageMaker, built on a decade-old SAP reporting estate.",
};

export const expertise = [
  {
    group: "SAP",
    items: ["SAP BW", "SAP BW/4HANA", "SAP PaPM", "SAP Analytics Cloud", "Native HANA views", "ABAP routines"],
  },
  {
    group: "AWS",
    items: ["Redshift", "SageMaker", "QuickSight", "Glue", "Athena", "S3"],
  },
  {
    group: "Languages & libraries",
    items: ["SQL", "Python", "NumPy", "pandas", "PySpark"],
  },
];

export const education = [
  {
    institution: "Istanbul Technical University",
    field: "Industrial Engineering",
    start: "2019",
    end: "2023",
    detail: "GPA 3.63 / 4.00",
  },
  {
    institution: "Koç High School",
    field: null,
    start: "2014",
    end: "2019",
    detail: null,
  },
];

export const languages = [
  { name: "Turkish", level: "Native", detail: null },
  { name: "English", level: "Advanced", detail: "TOEFL iBT 98" },
  { name: "Spanish", level: "Beginner", detail: null },
];
