import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    title: "Frameworks & Libraries",
    accent: "cyan",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    title: "Authentication & Backend",
    accent: "cyan",
    skills: [
      "Clerk",
      "NextAuth",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Frontend Expertise",
    accent: "green",
    skills: [
      "Responsive Design",
      "API Integration",
      "Clean Code",
      "Performance Optimization",
    ],
  },
  {
    title: "Other Strengths",
    accent: "green",
    skills: [
      "Problem-Solving",
      "Team Collaboration",
      "Project Management",
      "Attention to Detail",
    ],
  },
];

function SkillBadge({ label, accent }: { label: string; accent: string }) {
  const isCyan = accent === "cyan";
  return (
    <Badge
      variant="outline"
      className={`font-mono text-sm px-3 py-4 select-none tracking-wide rounded-sm transition-colors duration-200
        ${
          isCyan
            ? "border-cyan-500/50 text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 hover:border-cyan-400"
            : "border-emerald-600/50 text-emerald-300 bg-emerald-950/20 hover:bg-emerald-900/30 hover:border-emerald-400"
        }`}
    >
      {label}
    </Badge>
  );
}

function Skills() {
  return (
    <Card className="w-full max-w-5xl bg-zinc-950 rounded-md border">
      <CardHeader className="px-7">
        <CardTitle className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((category) => (
            <Card key={category.title} className=" bg-transparent px-3 ring-0">
              <CardHeader className="p-0 pb-4">
                <CardTitle
                  className={`text-lg font-bold tracking-wide ${
                    category.accent === "cyan"
                      ? "text-cyan-400"
                      : "text-cyan-300"
                  }`}
                >
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill}
                      label={skill}
                      accent={category.accent}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;
