import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiAngular,
} from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { RiVuejsFill } from "react-icons/ri";

export const techLogos = [
  {
    node: <DiJsBadge className="text-yellow-500" />,
    title: "Js",
    href: "https://developer.mozilla.org/en-US/",
  },
  {
    node: <SiReact className="text-blue-400" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiAngular className="text-red-500" />,
    title: "Angular",
    href: "https://angular.dev",
  },
  {
    node: <RiVuejsFill className="text-green-800" />,
    title: "VUE",
    href: "https://vuejs.org",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-blue-400" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-blue-400" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNestjs className="text-red-500" />,
    title: "Nest.js",
    href: "https://nestjs.com",
  },
];
