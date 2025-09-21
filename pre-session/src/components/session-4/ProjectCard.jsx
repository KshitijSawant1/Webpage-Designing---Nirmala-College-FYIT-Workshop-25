import React from "react";

const ProjectCard = ({ title, desc, tags, link }) => {
  return (
    <a
      href={link}
      className="block p-5 bg-white rounded-xl border hover:shadow transition"
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-gray-100 border"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
};
export default ProjectCard;
