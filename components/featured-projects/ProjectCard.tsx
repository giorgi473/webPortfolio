"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export type Project = {
  id: number;
  title: string;
  description: string;
  badge?: string;
  image?: string;
  liveUrl?: string;
  codeUrl?: string;
  status?: "active" | "in-progress" | "archived";
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const statusConfig = {
  active: { label: "Active project", color: "bg-purple-400" },
  "in-progress": { label: "In progress", color: "bg-amber-400" },
  archived: { label: "Archived", color: "bg-zinc-400" },
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const status =
    (project.status && statusConfig[project.status]) ?? statusConfig["active"];

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden p-0 rounded-sm select-none bg-zinc-950 transition-all duration-200 hover:-translate-y-0.5",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={
            project.image ||
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800"
          }
          width={800}
          height={450}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          alt={project.title}
        />

        {project.badge && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-sm px-2.5 py-1 text-[11px] font-medium text-zinc-200 bg-purple-400/40">
            <Sparkles className="size-3 text-purple-400" />
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1 space-y-1.5">
          <h3 className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm bg-purple-400 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-opacity hover:text-white"
          >
            <ArrowUpRight className="size-3.5" />
            Live demo
          </Link>

          <Link
            href={project.codeUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm border border-zinc-200 px-3.5 py-2 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <FileText className="size-3.5" />
            Source
          </Link>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="border-t rounded-b-sm border-zinc-100 px-4 py-2.5 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <span className={cn("size-1.5 rounded-full", status.color)} />
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {status.label}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
