import ProjectCard, { type Project } from "@/components/featured-projects/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Large-Scale Project",
    description:
      "Working on a large-scale project with a team for 1 year. Currently in active development.",
    badge: "Coming Soon",
  },
  {
    id: 2,
    title: "RedSeam Clothing",
    description:
      "Modern e‑commerce experience for clothing with smooth browsing and checkout.",
    badge: "Live Demo",
    liveUrl: "https://example.com/redseam",
    codeUrl: "https://github.com/you/redseam",
  },
  {
    id: 3,
    title: "Yc-directory",
    description:
      "Discover and explore startups, connect with founders, and browse YC batches. Discover and explore startups, connect with founders, and browse YC batches.ewewe",
    badge: "Live Demo",
    liveUrl: "https://example.com/yc-directory",
    codeUrl: "https://github.com/you/yc-directory",
  },
  {
    id: 4,
    title: "Yc-directoryewe",
    description:
      "Discover and explore startups, connect with founders, and browse YC batches.ewewe Discover and explore startups, connect with founders, and browse YC batches.ewewe",
    badge: "Live Demo",
    liveUrl: "https://example.com/yc-directory",
    codeUrl: "https://github.com/you/yc-directory",
  },
  {
    id: 5,
    title: "Yc-directoryewe",
    description:
      "Discover and explore startups, connect with founders, and browse YC batches.ewewe Discover and explore startups, connect with founders, and browse YC batches.ewewe",
    badge: "Live Demo",
    liveUrl: "https://example.com/yc-directory",
    codeUrl: "https://github.com/you/yc-directory",
  },
  {
    id: 6,
    title: "Yc-directoryewe",
    description:
      "Discover and explore startups, connect with founders, and browse YC batches.ewewe Discover and explore startups, connect with founders, and browse YC batches.ewewe",
    badge: "Live Demo",
    liveUrl: "https://example.com/yc-directory",
    codeUrl: "https://github.com/you/yc-directory",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-12 sm:py-16">
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
      <div className="mt-10 grid gap-6 px-6 sm:px-5 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
