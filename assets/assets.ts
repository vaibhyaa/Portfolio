import { IconType } from "react-icons";

import {
  FaReact,
  FaNodeJs,
  FaMicrosoft,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaGithub,
  FaJava,
  FaPython,
  FaFigma,
  FaJira,
  FaCode,
  FaBriefcase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiBun,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiSupabase,
  SiPostman,
} from "react-icons/si";

import { BiSolidSchool } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { TbBriefcase } from "react-icons/tb";

/* =========================
   TYPES
========================= */

type WorkItem = {
  title: string;
  description: string;
};

export type Tool = {
  name: string;
  icon: IconType;
};

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
};

type InfoItem = {
  icon: IconType;
  title: string;
  description: string;
};

export type ExperienceItem = {
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

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  tech: string[];
  icon: IconType;
  featured?: boolean;
}

/* =========================
   PROJECTS
========================= */

export const projectList: ProjectItem[] = [
  {
    title: "MERN Full-Stack Booking System",
    description:
      "Full-stack MERN application with JWT authentication, booking workflow, and admin dashboard for resource management.",
    image: "/projects/mern.png",
    githubUrl: "https://github.com/vaibhyaa/MERN-Project",
    liveUrl: "https://mern-live-link.com",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: FaNodeJs,
    featured: true,
  },
  {
    title: "React Projects Collection",
    description:
      "Collection of practical React applications including Todo App, Pagination system, and API-driven dashboards.",
    image: "/projects/react.png",
    githubUrl: "https://github.com/vaibhyaa/React",
    tech: ["React", "Hooks", "REST API"],
    icon: FaReact,
  },
  {
    title: "JavaScript Logic Projects",
    description:
      "Vanilla JavaScript projects focused on DOM manipulation, asynchronous logic, and API integrations.",
    image: "/projects/js.png",
    githubUrl: "https://github.com/vaibhyaa/Javascript",
    tech: ["JavaScript", "DOM", "ES6+"],
    icon: FaCode,
  },
];

/* =========================
   EXPERIENCE
========================= */

export const experienceData: ExperienceItem[] = [
  {
    icon: TbBriefcase,
    position: "System Engineer Trainee",
    companyName: "Infosys",
    duration: "May 2022 – March 2023",
    description: [
      "Completed a 5–6 month training program covering Java, Web Development, and Software Testing fundamentals.",
      "Learned HTML, CSS, JavaScript, React basics, and database concepts through hands-on projects and internal assignments.",
      "Assisted the team in basic development tasks and functional testing activities to gain practical experience.",
      "Supported defect identification and documentation during testing cycles.",
    ],
  },
  {
    icon: TbBriefcase,
    position: "System Engineer",
    companyName: "Infosys",
    duration: "April 2023 – June 2024",
    description: [
      "Assisted in the development of web applications using JavaScript and React, contributing to backend logic and database interactions with MySQL",
      "Implemented UI automation testing using Python and the Robot Framework, increasing regression test coverage by ~40% and significantly reducing manual testing effort.",
      "Designed and executed comprehensive test plans, test cases, and validation scenarios, improving functional test coverage by ~30% across application modules.",
      "Automated functional and regression test cases for key UI workflows, improving testing efficiency and reducing repetitive testing cycles by ~35%.",
      "Identified, documented, and tracked defects during manual testing using JIRA, improving issue resolution turnaround and collaboration with development teams.",
    ],
  },
  {
    icon: TbBriefcase,
    position: "Senior System Engineer",
    companyName: "Infosys",
    duration: "July 2024 – Sep 2025",
    description: [
      "Developed and optimized React-based UI components, improving page responsiveness and reducing frontend load time by ~30% through component reusability and efficient state management",
      "Built reusable component architecture and integrated REST APIs, reducing development effort for new UI features by ~25% and improving maintainability.",
      "Performed frontend performance optimization and debugging, improving application stability and reducing UI-related production issues.",
    ],
  },
  {
    icon: TbBriefcase,
    position: "Technology Analyst",
    companyName: "Infosys",
    duration: "Oct 2025 – Present",
    description: [
      "•	Contributed to a 6-member engineering team migrating a legacy Meteor.js EMS platform to a React-based micro-frontend architecture using Webpack Module Federation, introducing a component-driven UI layer that improved frontend performance and responsiveness by ~40%.",
      "Enabled cross-framework interoperability by integrating React modules with existing Meteor templates through WebSocket-based communication, ensuring seamless interaction with Java backend services.",
      "Implemented an incremental migration strategy, modernizing 2 of 8 core modules while allowing legacy Meteor templates and new React components to operate together in production.",
      "Contributed to CI/CD pipeline improvements, helping reduce frontend deployment time by ~60% and enabling faster and more reliable releases during the migration process",
    ],
  },
];

/* =========================
   EDUCATION
========================= */

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering ",
    institution: "Shivaji University",
    duration: "2017 – 2021",
    description:
      "Focused on software engineering, data structures, databases, and full-stack web development.",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "Maharashtra State Board",
    duration: "2014 – 2016",
    description:
      "Built a strong academic foundation in mathematics and computer science fundamentals.",
  },
];

/* =========================
   INFO CARDS
========================= */

export const infoList: InfoItem[] = [
  {
    icon: FaCode,
    title: "Languages",
    description: "HTML, CSS, JavaScript, TypeScript, React, Next.js",
  },
  {
    icon: BiSolidSchool,
    title: "Education",
    description: "Bachelor of Engineering",
  },
  {
    icon: FaBriefcase,
    title: "Experience",
    description: "3.5 Years Industry Experience",
  },
];

/* =========================
   TOOLS
========================= */

export const toolsData: Tool[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "REST API", icon: SiPostman },
  { name: "Supabase", icon: SiSupabase },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "Git", icon: FaGit },
  { name: "GitHub", icon: FaGithub },
  // { name: "Figma", icon: FaFigma },
  { name: "Jira", icon: FaJira },
  { name: "MS Office", icon: FaMicrosoft },
];

/* =========================
   CERTIFICATES
========================= */

export const certificateList: CertificateItem[] = [
  {
    icon: FaReact,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "React - The Complete Guide",
    description:
      "Built scalable frontend applications using React, hooks, context API, and advanced state management patterns.",
    completedAt: "Dec 2025",
    skills: ["React", "Hooks", "Context API", "Routing", "State Management"],
  },
  {
    icon: SiJavascript,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "Modern JavaScript Mastery",
    description:
      "Mastered ES6+, asynchronous programming, closures, and DOM manipulation techniques.",
    completedAt: "Nov 2025",
    skills: ["JavaScript", "ES6+", "Async/Await", "Closures", "DOM"],
  },
  {
    icon: SiExpress,
    credentialUrl:
      "https://www.udemy.com/certificate/UC-8ed3b46f-fea2-444a-9951-774649523eed/",
    name: "Node.js & Express Backend Development",
    description:
      "Developed RESTful APIs with authentication, middleware, and MongoDB integration.",
    completedAt: "Oct 2025",
    skills: ["Node.js", "Express", "REST API", "JWT", "MongoDB"],
  },
  {
    icon: SiBun,
    credentialUrl: "#",
    name: "Bun.js Fundamentals",
    description:
      "Explored high-performance backend development using Bun.js runtime and tooling.",
    completedAt: "Sep 2025",
    skills: ["Bun.js", "Backend", "Performance", "Runtime"],
  },
];
