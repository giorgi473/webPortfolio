import { Card, CardContent } from "@/components/ui/card";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiAngular,
} from "react-icons/si";
import HighlightStats from "./HighlightStats";

const skills = [
  { name: "NEXT JS", icon: <SiNextdotjs className="w-10 h-10" /> },
  { name: "TYPESCRIPT", icon: <SiTypescript className="w-10 h-10" /> },
  { name: "REACT", icon: <SiReact className="w-10 h-10" /> },
  { name: "NODE JS", icon: <SiNodedotjs className="w-10 h-10" /> },
  { name: "NEST JS", icon: <SiNestjs className="w-10 h-10" /> },
  { name: "ANGULAR", icon: <SiAngular className="w-10 h-10" /> },
  { name: "EXPRESS", icon: <SiExpress className="w-10 h-10" /> },
  { name: "TAILWIND", icon: <SiTailwindcss className="w-10 h-10" /> },
  { name: "MONGODB", icon: <SiMongodb className="w-10 h-10" /> },
  { name: "POSTGRESQL", icon: <SiPostgresql className="w-10 h-10" /> },
  { name: "FIREBASE", icon: <SiFirebase className="w-10 h-10" /> },
  { name: "DOCKER", icon: <SiDocker className="w-10 h-10" /> },
];
const statsData = [
  {
    value: "12+",
    label: "Technologies",
    gradientClass: "text-sky-400",
  },
  {
    value: "Full Stack",
    label: "Development",
    gradientClass: "text-blue-400",
  },
  {
    value: "Modern",
    label: "Tech Stack",
    gradientClass: "text-emerald-400",
  },
];
export default function SkillsSection() {
  return (
    <div className="py-20 text-center">
      <div className="text-center space-y-3 flex flex-col items-center mb-10 px-6 sm:px-5">
        <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 tracking-[0.2em] capitalize">
          <span className="text-cyan-400">{">"}</span> Technologies I work with
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white">
          <span className="text-cyan-400">Skills & Tools</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 capitalize text-center max-w-lg">
          A collection of technologies and tools I use to build modern web
          applications
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 select-none my-10 px-6 sm:px-5">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-[#0f1115]/50 border-gray-800 rounded-lg hover:border-gray-600 transition-colors group"
          >
            <CardContent className="flex flex-col items-center justify-center p-8">
              <div className="mb-4 text-gray-300 group-hover:text-white transition-colors bg-gray-400/10 p-4 rounded-md">
                {skill.icon}
              </div>
              <p className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-white">
                {skill.name}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <HighlightStats data={statsData} />
      </div>
    </div>
  );
}
