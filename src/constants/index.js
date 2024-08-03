import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  vrnas,
  workInProgress,
  questionMark,
  portfolioImage,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Mauris eu interdum libero",
    icon: questionMark,
    iconBg: "#101c30",
    date: "",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum cursus libero sit amet nisl accumsan sodales. Phasellus sed nunc in turpis interdum tincidunt.",
      "Nulla varius leo et ipsum fringilla, non sodales tellus lacinia.",
      "Praesent pulvinar at tellus sed ultricies.",
      "Donec mollis sit amet lectus vitae tristique. Quisque lobortis ipsum in justo scelerisque, nec accumsan lacus aliquet. Mauris vitae odio a enim tincidunt hendrerit nec quis felis.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description: "Just a 3D portfolio.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "react three fiber",
        color: "green-text-gradient",
      },
      {
        name: "emailjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "yellow-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink",
      },
    ],
    image: portfolioImage,
    project_link: "",
    source_code_link: "https://github.com/SolisTenebrum/3D-Portfolio",
  },
  {
    name: "VRNas",
    description:
      "Platform providing VR services, including virtual reality experiences, augmented reality, and virtual worlds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css-modules",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: vrnas,
    project_link: "https://solistenebrum-vrnas.vercel.app/",
    source_code_link: "https://github.com/SolisTenebrum/VRNas",
  },
  {
    name: "Work in progress",
    description:
      "Lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "wip1",
        color: "blue-text-gradient",
      },
      {
        name: "wip2",
        color: "green-text-gradient",
      },
      {
        name: "wip3",
        color: "pink-text-gradient",
      },
    ],
    image: workInProgress,
    project_link: "",
    source_code_link: "",
  },
  {
    name: "Work in progress",
    description:
      "Lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "wip1",
        color: "blue-text-gradient",
      },
      {
        name: "wip2",
        color: "green-text-gradient",
      },
      {
        name: "wip3",
        color: "pink-text-gradient",
      },
    ],
    image: workInProgress,
    project_link: "",
    source_code_link: "",
  },
];

export { services, technologies, experiences, projects };
