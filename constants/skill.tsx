import {
    SiNextdotjs,
    SiTypescript,
    SiReact,
    SiTailwindcss,
    SiAngular,
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
    SiDocker,
    SiGit,
    SiGithub,
    SiVercel,
    SiLinux,
    SiRedux,
    SiJavascript,
    SiPython,
    SiDjango,
    SiFlask,
    SiGraphql,
    SiRedis,
    SiMysql,
    SiPrisma,
    SiGo,
    SiKubernetes,
    SiGooglecloud,
    SiPostman,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { RiVuejsFill } from "react-icons/ri";
import { Skill } from "@/types/types";


export const frontend: Skill[] = [
    { name: "Next.js", icon: <SiNextdotjs className="w-10 h-10 text-white" /> },
    { name: "React", icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-10 h-10 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" /> },
    { name: "Angular", icon: <SiAngular className="w-10 h-10 text-[#DD0031]" /> },
    { name: "Redux", icon: <SiRedux className="w-10 h-10 text-[#764ABC]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-[#F7DF1E]" /> },
    { name: "Vue.js", icon: <RiVuejsFill className="w-10 h-10 text-[#42b883]" /> },
];

export const backend: Skill[] = [
    { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10 text-[#339933]" /> },
    { name: "Nest.js", icon: <SiNestjs className="w-10 h-10 text-[#E0234E]" /> },
    { name: "Express", icon: <SiExpress className="w-10 h-10 text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-10 h-10 text-[#4169E1]" /> },
    { name: "Firebase", icon: <SiFirebase className="w-10 h-10 text-[#FFCA28]" /> },
    { name: "Docker", icon: <SiDocker className="w-10 h-10 text-[#2496ED]" /> },
    { name: "Python", icon: <SiPython className="w-10 h-10 text-[#3776AB]" /> },
    { name: "Django", icon: <SiDjango className="w-10 h-10 text-[#092E20]" /> },
    { name: "Flask", icon: <SiFlask className="w-10 h-10 text-white" /> },
    { name: "GraphQL", icon: <SiGraphql className="w-10 h-10 text-[#E10098]" /> },
    { name: "Redis", icon: <SiRedis className="w-10 h-10 text-[#DC382D]" /> },
    { name: "MySQL", icon: <SiMysql className="w-10 h-10 text-[#4479A1]" /> },
    { name: "Prisma", icon: <SiPrisma className="w-10 h-10 text-white" /> },
    { name: "Go", icon: <SiGo className="w-10 h-10 text-[#00ADD8]" /> },
];

export const tools: Skill[] = [
    { name: "Git", icon: <SiGit className="w-10 h-10 text-[#F05032]" /> },
    { name: "GitHub", icon: <SiGithub className="w-10 h-10 text-white" /> },
    { name: "Vercel", icon: <SiVercel className="w-10 h-10 text-white" /> },
    { name: "Linux", icon: <SiLinux className="w-10 h-10 text-[#FCC624]" /> },
    { name: "CI/CD", icon: <VscAzureDevops className="w-10 h-10 text-[#0078D7]" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="w-10 h-10 text-[#326CE5]" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="w-10 h-10 text-[#4285F4]" /> },
    { name: "Postman", icon: <SiPostman className="w-10 h-10 text-[#FF6C37]" /> },
];
