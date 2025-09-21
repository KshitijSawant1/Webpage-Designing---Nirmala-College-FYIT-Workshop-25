import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

const Projects = () => {
  // Collect all tags across projects + add "All" at the start
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags))];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-green-700">
        Projects
      </h1>

      {/* Tag filter: scroll on mobile, wrap on md+ */}
      <div className="-mx-4 px-4 overflow-x-auto md:overflow-visible">
        <div className="flex md:flex-wrap gap-2 w-max md:w-auto">
          {tags.map((t) => (
            <button
              key={t}
              className="shrink-0 px-3 py-1 rounded border hover:bg-gray-50 text-sm"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
