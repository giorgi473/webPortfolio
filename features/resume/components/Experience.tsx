import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Web Developer - Team Project",
    subtitle: "Large-scale Social App",
    duration: "1 year",
    bullets: [
      "Working with a team including backend developer, designer, and testers",
      "Building real features and solving problems in a collaborative environment",
      "Learning backend development with Express.js and Node.js",
      "Contributing to both frontend and backend aspects of the application",
    ],
  },
  {
    title: "Freelance Web Developer",
    subtitle: "Remote",
    duration: "More than 2 years",
    bullets: [
      "Taking on various client projects and delivering high-quality web solutions",
      "Collaborating with backend developers on full-stack projects",
      "Building responsive, scalable web applications using React and Next.js",
    ],
  },
];

function ExperienceEntry({
  title,
  subtitle,
  duration,
  bullets,
}: {
  title: string;
  subtitle: string;
  duration: string;
  bullets: string[];
}) {
  return (
    <div className="border-l-2 border-cyan-500 pl-5 space-y-3">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-white font-bold text-xl leading-tight">{title}</h3>
        <span className="text-cyan-400 font-mono text-sm whitespace-nowrap mt-1">
          {duration}
        </span>
      </div>
      <p className="text-slate-400 text-sm -mt-1">{subtitle}</p>
      <ul className="space-y-2">
        {bullets.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-slate-300 text-base"
          >
            <span className="text-cyan-400 mt-0.75 text-xs select-none">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Experience() {
  return (
    <Card className="border border-slate-800 bg-zinc-950 rounded-md">
      <CardHeader className="px-7">
        <CardTitle className="text-2xl font-bold text-cyan-400">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="px-7 py-6 space-y-8">
        {experiences.map((exp, i) => (
          <ExperienceEntry key={i} {...exp} />
        ))}
      </CardContent>
    </Card>
  );
}

export default Experience;
