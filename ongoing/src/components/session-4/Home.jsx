import React from "react";
import H1 from "../../assets/H1.png";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">
            Hi I'm Full Name
          </h1>
          <p className="text-gray-600 text-base sm:text-lg ">
            Aspiring Developer . Tech Enthusiast
          </p>
          <div className="flex flex-wrap gap-3 ">
            <a
              href="/projects"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm sm:text-base"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={H1}
            alt="Profile"
            className="rounded-xl h-48 sm:h-56 md:h-64 lg:h-72 object-contain transition duration-300 hover:scale-105 hover:shadow-lg"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl border ">
          <h2 className="text-xl font-semibold"> About </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            This is a Dummy Profile site created in react Tailwindcss and
            Resposive Design. Replace with your own
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl border">
          <h2 className="text-xl font-semibold ">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "C",
              "C++",
              "Java",
              "Python",
              "React",
              "TailwindCSS",
              "FlowBite",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section
        className="p-6 bg-white rounded-xl border text-sm sm:text-base"
        id="Contact"
      >
        <h2 className="text-xl font-semibold ">Contact</h2>
        <p className="mt-2 text-gray-600 ">Email : youremail@gmail.com</p>
        <p className="mt-2 text-gray-600 ">Github : Username</p>
      </section>
    </div>
  );
};

export default Home;
