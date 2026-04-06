"use client";

import { useState, useEffect } from "react";
import ProjectCard, { type Project } from "@/components/featured-projects/ProjectCard";

export default function FeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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

      {loading ? (
        <div className="mt-20 flex justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-purple-400"></div>
        </div>
      ) : (
        <div className="mt-12 container mx-auto px-6 sm:px-5">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {projects.map((project) => (
              <div key={project.id} className="min-w-0 w-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
