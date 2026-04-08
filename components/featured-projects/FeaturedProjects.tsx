"use client";

import { useState, useEffect, useMemo } from "react";
import ProjectCard, { type Project } from "@/components/featured-projects/ProjectCard";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL!);
        const data = await response.json();
        const mappedData = data
          .map((item: any, index: number) => ({
            ...item,
            id: item.id || item._id || index,
          }));

        setProjects(mappedData);
      } catch (error) {
        throw new Error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ratingOptions = useMemo(() => {
    const ratings = projects
      .map((p) => p.rating)
      .filter((r): r is number => r !== undefined);
    return Array.from(new Set(ratings)).sort((a, b) => b - a);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (ratingFilter === null) return projects;
    return projects.filter((project) => project.rating === ratingFilter);
  }, [projects, ratingFilter]);

  return (
    <section className="w-full py-12 sm:py-16 overflow-x-hidden">
      <div className="max-w-3xl mx-auto text-center space-y-3 px-6 sm:px-5">
        <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-400 tracking-[0.2em] capitalize">
          <span className="text-purple-400">{">"}</span> My recent projects
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white">
          <span className="text-purple-400">Featured Work</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 capitalize">
          A showcase of my recent projects and contributions
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3 px-6">
        <button
          onClick={() => setRatingFilter(null)}
          className="focus:outline-none"
          suppressHydrationWarning
        >
          <Badge
            variant={ratingFilter === null ? "default" : "outline"}
            className={cn(
              "cursor-pointer px-4 py-3 h-auto rounded-full transition-all duration-300 text-sm font-medium",
              ratingFilter === null
                ? "bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "border-zinc-800 text-zinc-400 hover:border-purple-500/50 hover:text-purple-400"
            )}
          >
            All Projects
          </Badge>
        </button>
        {ratingOptions.map((rating) => (
          <button
            key={rating}
            onClick={() => setRatingFilter(rating)}
            className="focus:outline-none"
            suppressHydrationWarning
          >
            <Badge
              variant={ratingFilter === rating ? "default" : "outline"}
              className={cn(
                "cursor-pointer px-4 py-3 h-auto rounded-full transition-all duration-300 text-sm font-medium",
                ratingFilter === rating
                  ? "bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "border-zinc-800 text-zinc-400 hover:border-purple-500/50 hover:text-purple-400"
              )}
            >
              <span className="flex items-center gap-1.5">
                {rating} <Star className={cn("size-3.5 fill-current", ratingFilter === rating ? "text-white" : "text-amber-400")} />
              </span>
            </Badge>
          </button>
        ))}
      </div>
      {loading ? (
        <div className="mt-20 flex justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-purple-400"></div>
        </div>
      ) : (
        <div className="mt-12 container mx-auto px-6 sm:px-5">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {filteredProjects.map((project) => (
                <div key={project.id} className="min-w-0 w-full">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-20 text-center space-y-4">
              <p className="text-zinc-500 text-lg">No projects found with this rating.</p>
              <button
                onClick={() => setRatingFilter(null)}
                className="text-purple-400 hover:underline text-sm font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
