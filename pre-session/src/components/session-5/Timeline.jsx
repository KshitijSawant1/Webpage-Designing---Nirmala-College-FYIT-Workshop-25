import React from "react";
import { FiBriefcase, FiBook, FiCalendar } from "react-icons/fi";

/** Example data (mix education + experience). Replace with yours. */
const TIMELINE = [
  {
    type: "education",
    title: "B.Sc IT — First Year",
    org: "Your College",
    location: "Mumbai, IN",
    period: "2024–2025",
    bullets: ["Core CS foundations", "Intro to Web (HTML/CSS/JS)"],
  },
  {
    type: "experience",
    title: "Frontend Intern",
    org: "PixelLabs",
    location: "Remote",
    period: "Jun 2024 – Sep 2024",
    bullets: ["React + Tailwind UI kit", "Improved Lighthouse by 20%"],
  },
  {
    type: "education",
    title: "Workshops Lead (Campus)",
    org: "Tech Club",
    location: "On-site",
    period: "2023–2024",
    bullets: ["Ran React & DevOps bootcamps", "100+ students trained"],
  },
  {
    type: "experience",
    title: "DevOps Trainee",
    org: "CloudWorks",
    location: "Remote",
    period: "Jan 2024 – May 2024",
    bullets: ["GitHub → Jenkins → Docker CI/CD", "Cut release time 50%"],
  },
];

/** Badge color by type */
const typeStyles = {
  education: "bg-violet-100 text-violet-700 border-violet-200",
  experience: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const typeIcon = (t) =>
  t === "education" ? (
    <FiBook className="text-violet-600" />
  ) : (
    <FiBriefcase className="text-emerald-600" />
  );

/** Timeline item card */
function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0; // alternate on md+
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12">
      {/* connector dot (center spine) */}
      <div
        className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-3 h-4 w-4 rounded-full border-4 border-white ${
          item.type === "education" ? "bg-violet-500" : "bg-emerald-500"
        }`}
      />
      {/* spacer to line with spine on md */}
      <div className={`hidden md:block ${isLeft ? "order-2" : "order-1"}`} />

      {/* card */}
      <article
        className={`relative p-5 rounded-xl border bg-white shadow-sm hover:shadow transition ${
          isLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        {/* small connector line on md */}
        <span
          className={`hidden md:block absolute top-4 ${
            isLeft ? "-right-12" : "-left-12"
          } h-0.5 w-10 bg-gray-300`}
        />
        <header className="flex items-start justify-between gap-3">
          <span
            className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs border ${
              typeStyles[item.type]
            }`}
          >
            {typeIcon(item.type)}
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </span>
          <span className="inline-flex items-center gap-2 text-xs text-gray-600">
            <FiCalendar />
            {item.period}
          </span>
        </header>

        <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-600">
          {item.org} • {item.location}
        </p>

        {item.bullets?.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-gray-700 list-disc pl-5">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

/** Main timeline: vertical on mobile; alternating on md+ with center spine */
export default function Timeline({ items = TIMELINE, heading = "Timeline" }) {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">
        {heading}
      </h2>

      {/* center spine (md+) */}
      <div className="relative">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="space-y-8">
          {items.map((it, idx) => (
            <TimelineItem key={idx} item={it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
