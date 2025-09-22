import React from "react";

const ButtonGrpShowCase = () => {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10 dark:bg-gray-900 dark:text-gray-100">
      <section>
        <h1 className="text-xl font-semibold ">Button Group Showcase </h1>
        <hr />
      </section>
      <section>
        <div
          role="group"
          aria-label="segemneted group with divide"
          className="inline-flex rounded-lg overflow-hidden divide-x divide-gray-300 border bg-white"
        >
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Left
          </button>
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Middle-1
          </button>
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Middle-2
          </button>
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Right
          </button>
        </div>
      </section>
    </main>
  );
};

export default ButtonGrpShowCase;
