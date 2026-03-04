import { StaticImageData } from "next/image";
import user_image from "./user-image.png";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiExpress, SiBun } from "react-icons/si";

import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";

import profile_img from "./profile-img.png";
import { FaCode } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { IconType } from "react-icons";
import { TbBriefcase } from "react-icons/tb";

/* =========================
   TYPES
========================= */

type WorkItem = {
  title: string;
  description: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  // grade: number;
};

type InfoItem = {
  icon: IconType;
  title: string;
  description: string;
};

type ExperienceItem = {
  icon: IconType;
  duration: string;
  position: string;
  companyName: string;
  description: string[];
};

export interface CertificateItem {
  icon: IconType;
  credentialUrl: string;
  name: string;
  description: string;
  completedAt: string;
  skills: string[];
}
/* =========================
   ASSETS
========================= */

export const assets = {
  user_image,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  profile_img,
};

/* =========================
   DATA
========================= */

export const experienceData: ExperienceItem[] = [
  {
    icon: TbBriefcase,
    position: "System Engineer",
    companyName: "Infosys",
    duration: "Dec 2022 – Dec 2023",
    description: [
      "Assisted in the development of web applications using JavaScript and Python, contributing to backend logic and database interactions with MySQL.",
      " Conducted thorough testing and debugging of applications to ensure high-quality deliverables, including regression testing of features after updates. ",
      "Collaborated with QA teams to develop testing strategies and contribute to test case design.",
    ],
  },
  {
    icon: TbBriefcase,
    position: "Senior System Engineer",
    companyName: "Infosys",
    duration: "Jan 2024 – July 2025",
    description: [
      "Developed and maintained scalable web applications using HTML, CSS, JavaScript, TypeScript, and React.",
      " Collaborated with cross-functional teams to design and implement RESTful APIs, enhancing system integration and functionality. Conducted regression testing to ensure the stability and performance of applications post-deployment, identifying and resolving defects.",
      "Implemented automated testing frameworks, reducing manual testing time by 40% and improving overall testing accuracy.",
    ],
  },
  {
    icon: TbBriefcase,
    position: "Technology Analyst",
    companyName: "Infosys",
    duration: "August 2025 – Present",
    description: [
      "Contributed to the migration of a legacy Meteor.js template-based EMS application to a React-based micro-frontend architecture using Webpack Module Federation, enabling incremental module-by-module transition (2 of 8 modules migrated).",
      " Ensured seamless interoperability between newly developed React modules and existing Meteor components within a single running application, leveraging WebSockets for real-time communication and maintaining integration with Java backend services.",
      "Improved frontend performance and reduced architectural complexity by adopting a lightweight React UI layer without introducing additional full-stack frameworks, while maintaining stable cross-framework navigation and deployment.",
    ],
  },
];

export const workData: WorkItem[] = [
  {
    title: "Frontend project",
    description: "Web Design",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
  },
  {
    title: "Photography site",
    description: "Web Design",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Shivaji University",
    duration: "2017 – 2021",
    description:
      "Focused on software development, data structures, databases, and web technologies. Completed multiple academic and practical projects.",
    // grade: 61,
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Maharashtra State Board",
    duration: "2014 – 2016",
    description:
      "Completed higher secondary education with a science stream, building a strong foundation in mathematics and computer science.",
    // grade: 62,
  },
];

export const infoList: InfoItem[] = [
  {
    icon: FaCode,
    title: "Languages",
    description: "HTML, CSS, JavaScript, React Js, Next Js",
  },
  {
    icon: BiSolidSchool,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: GoProjectSymlink,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData: StaticImageData[] = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const certificateList: CertificateItem[] = [
  {
    icon: FaReact,
    credentialUrl: "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "React - The Complete Guide",
    description:
      "Built modern, scalable frontend applications using React, hooks, context API, routing, and state management.",
    completedAt: "Dec 2025",
    skills: ["React", "Hooks", "Context API", "Routing", "State Management"],
  },
  {
    icon: SiJavascript,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "Modern JavaScript Mastery",
    description:
      "Strengthened core JavaScript fundamentals including ES6+, asynchronous programming, closures, and DOM manipulation.",
    completedAt: "Nov 2025",
    skills: ["JavaScript", "ES6+", "Async/Await", "Closures", "DOM"],
  },
  {
    icon: SiExpress,
    credentialUrl: "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "Node.js & Express Backend Development",
    description:
      "Developed RESTful APIs using Node.js and Express, implemented authentication, middleware, and database integration.",
    completedAt: "Oct 2025",
    skills: ["Node.js", "Express.js", "REST API", "JWT", "MongoDB"],
  },
  {
    icon: SiBun,
    credentialUrl: "kjsdbvld",
    name: "Bun.js Fundamentals",
    description:
      "Explored high-performance backend development using Bun.js, including server setup, routing, and package management.",
    completedAt: "Sep 2025",
    skills: ["Bun.js", "Runtime", "Backend", "Performance", "Tooling"],
  },
];
