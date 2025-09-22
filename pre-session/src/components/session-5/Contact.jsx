// src/pages/ExperienceAndServices.jsx
import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

// ✅ import images from src/assets (adjust the ../ path if your file sits elsewhere)
import Exp1 from "../../assets/C1.png";
import Exp2 from "../../assets/C2.png";
import Exp3 from "../../assets/C3.png";

/** -------- Simple, dependency-free carousel ---------- */
function ExperienceCarousel({ items }) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? items.length - 1 : p - 1));
  const next = () => setI((p) => (p === items.length - 1 ? 0 : p + 1));

  return (
    <div className="relative overflow-hidden rounded-xl border bg-white">
      {/* Slides */}
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {items.map((exp, idx) => (
          <article
            key={idx}
            className="min-w-full basis-full flex-shrink-0 grid md:grid-cols-2 gap-6 p-6 sm:p-8"
          >
            {/* Image */}
            <div className="flex items-center justify-center">
              <img
                src={exp.img} // now a real imported URL
                alt={exp.title}
                className="rounded-lg w-full h-56 sm:h-64 md:h-72 object-cover"
              />
            </div>
            {/* Text */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-green-700">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.role} • {exp.period}
              </p>
              <p className="text-gray-700">{exp.desc}</p>
              {exp.stack?.length ? (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-full border bg-gray-50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/90 border hover:bg-white"
      >
        <FiArrowLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/90 border hover:bg-white"
      >
        <FiArrowRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
        {items.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              i === idx ? "bg-green-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** ------------------- Page ------------------- */
export default function ExperienceAndServices() {
  // 🔁 Dummy data (using imported images)
  const experience = [
    {
      img: Exp1,
      title: "Frontend Intern — PixelLabs",
      role: "React + Tailwind",
      period: "Jun 2024 – Present",
      desc: "Built a small component kit and improved page load by 20% with Vite + code splitting.",
      stack: ["React", "Tailwind", "Vite"],
    },
    {
      img: Exp2,
      title: "DevOps Trainee — CloudWorks",
      role: "CI/CD + Docker",
      period: "Jan 2024 – May 2024",
      desc: "Created a CI pipeline (GitHub → Jenkins → Docker) for a demo app.",
      stack: ["Jenkins", "Docker", "GitHub Actions"],
    },
    {
      img: Exp3,
      title: "Workshop Lead — Campus Tech Club",
      role: "Educator",
      period: "2023",
      desc: "Ran hands-on sessions for first-years on HTML/CSS, React basics, and Git.",
      stack: ["Teaching", "React", "Git"],
    },
  ];

  const services = [
    {
      title: "Web App Development",
      desc: "Modern SPA builds with React + Tailwind.",
      points: ["Reusable components", "Responsive layouts", "Performance/A11y"],
    },
    {
      title: "DevOps & CI/CD",
      desc: "Automate builds, test, and deploys.",
      points: ["Jenkins/GitHub Actions", "Dockerization", "Env configs"],
    },
    {
      title: "UI/UX Systems",
      desc: "Design tokens and documented patterns.",
      points: ["Design tokens", "Docs & Storybook", "Theming"],
    },
  ];

  const recos = [
    {
      name: "Aarav S.",
      role: "PM",
      msg: "Clean UI and quick delivery. Great communication.",
    },
    {
      name: "Meera P.",
      role: "Founder",
      msg: "CI/CD and Docker setup boosted our velocity a lot.",
    },
    {
      name: "Rahul K.",
      role: "Professor",
      msg: "Workshops were practical and well-structured.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Experience (with images + carousel) */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-green-700">Experience</h2>
        <ExperienceCarousel items={experience} />
      </section>

      {/* Services (separate grid) */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-green-700">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 bg-white rounded-lg border shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <FiCheckCircle className="text-green-600 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-green-700">Recommendations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recos.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border shadow hover:shadow-md transition"
            >
              <p className="text-gray-700">{r.msg}</p>
              <p className="mt-3 text-sm text-gray-500">
                {r.name} • {r.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
