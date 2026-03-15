"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLink, Code2, Clock } from "lucide-react";

export type Project = {
  id: number;
  status?: "coming-soon" | "live";
  title: string;
  description: string;
  badge?: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border-0 bg-zinc-900 transition-all duration-300 hover:bg-zinc-800/80",
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={
            project.image ||
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
          }
          width={800}
          height={450}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt={project.title}
        />

        {project.badge && (
          <span className="absolute left-3 top-3 rounded bg-cyan-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
            {project.badge}
          </span>
        )}

        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/70 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 text-sm text-zinc-400">
              <Clock className="size-4" />
              <span>Coming Soon</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <CardHeader className="flex-1 gap-1.5 p-4">
        <CardTitle className="text-base font-semibold text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-sm text-zinc-400">
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Links */}
      <CardFooter className="flex gap-2 p-4 pt-0">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-cyan-400 px-3 py-1.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-cyan-300"
          >
            <ExternalLink className="size-3.5" />
            Live Demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <Code2 className="size-3.5" />
            Code
          </a>
        )}
        {isComingSoon && !project.liveUrl && !project.codeUrl && (
          <span className="text-xs text-zinc-500">Stay tuned</span>
        )}
      </CardFooter>
    </Card>
  );
}
