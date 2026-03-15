import React from "react";
import {
  Rocket,
  Lightbulb,
  Users,
  GraduationCap,
  Code2,
  Target,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Fast Delivery",
    description:
      "I deliver high-quality projects on time, every time. Speed without compromising quality.",
    icon: <Rocket className="w-5 h-5 text-white" />,
    iconBg: "bg-sky-500",
  },
  {
    title: "Problem Solver",
    description:
      "I love tackling complex challenges and finding elegant solutions that work.",
    icon: <Lightbulb className="w-5 h-5 text-white" />,
    iconBg: "bg-purple-500",
  },
  {
    title: "Team Player",
    description:
      "Great at collaboration! I work seamlessly with designers, backend devs, and stakeholders.",
    icon: <Users className="w-5 h-5 text-white" />,
    iconBg: "bg-pink-500",
  },
  {
    title: "Always Learning",
    description:
      "Continuously improving my skills and staying updated with the latest technologies.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    iconBg: "bg-rose-500",
  },
  {
    title: "Clean Code",
    description:
      "I write maintainable, scalable code that your team will love to work with.",
    icon: <Code2 className="w-5 h-5 text-white" />,
    iconBg: "bg-emerald-500",
  },
  {
    title: "Result-Driven",
    description:
      "Focused on delivering value and achieving your business goals through technology.",
    icon: <Target className="w-5 h-5 text-white" />,
    iconBg: "bg-cyan-500",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-20 bg-transparent">
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <code className="text-zinc-400 font-mono text-lg tracking-wider">
          {"> Why work with me?"}
        </code>
        <h2 className="text-4xl md:text-8xl font-bold tracking-tight text-white">
          Let's Build{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
            Something Amazing
          </span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-150">
          Here's what makes me a great addition to your team
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-slate-950/50 border-slate-800 hover:border-slate-700 transition-colors rounded-md"
          >
            <CardHeader className="pb-3">
              <div
                className={`${feature.iconBg} w-10 h-10 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <CardTitle className="text-xl font-bold text-white tracking-tight">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 leading-relaxed text-sm antialiased">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-md font-semibold bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95"
        >
          Ready to work together?
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
