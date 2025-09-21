import React from "react";
import H1 from "../../assets/H1.png";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-14">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            Hi, I’m [Your Name]
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Aspiring Developer • Tech Enthusiast • Lifelong Learner
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/projects"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm sm:text-base"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Hero image with hover effect */}
        <div className="flex justify-center">
          <img
            src={H1}
            alt="Profile"
            className="rounded-xl h-48 sm:h-56 md:h-64 lg:h-72 object-contain transition duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </section>

      {/* About + Skills */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl border">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            This is a dummy portfolio site created to practice React, Tailwind,
            and responsive design. Replace this with your own introduction!
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
              (s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-sm rounded-full bg-green-50 text-green-700 border border-green-200"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="p-6 bg-white rounded-xl border text-sm sm:text-base"
      >
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-600">
          Email: yourname@email.com • GitHub: your-username
        </p>
      </section>
    </div>
  );
};

export default Home;
