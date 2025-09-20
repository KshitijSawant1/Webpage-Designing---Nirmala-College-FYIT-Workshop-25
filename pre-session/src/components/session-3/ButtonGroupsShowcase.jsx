import React from "react";
import { FiPlus } from "react-icons/fi";
const ButtonGroupsShowcase = () => {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10">
      <header>
        <h1 className="text-3xl font-bold text-green-700">Button Groups</h1>
        <p className="text-gray-600">
          Group container, segmented borders, variants, sizes, icons, and focus
        </p>
      </header>

      {/* 1) Group container + segmented buttons */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Group Container & Segments</h2>
        <div
          role="group"
          aria-label="Segmented group with divide"
          className="inline-flex rounded-lg overflow-hidden divide-x divide-gray-300 border bg-white"
        >
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Left
          </button>
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Middle
          </button>
          <button className="px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500">
            Right
          </button>
        </div>
      </section>

      {/* 2) Variant mix */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Variant Mix</h2>
        <div className="inline-flex rounded-lg overflow-hidden">
          <button className="px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Solid
          </button>
          <button className="px-4 py-2 text-sm font-medium border-t border-b border-green-600 text-green-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500">
            Outline
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-transparent text-green-700 hover:bg-green-50 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500">
            Ghost
          </button>
        </div>
      </section>

      {/* 3) Sizes */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Sizes</h2>
        <div className="space-y-2">
          <div className="inline-flex rounded-lg overflow-hidden border">
            <button className="px-3 py-1.5 text-sm bg-green-600 text-white">
              Sm Left
            </button>
            <button className="px-3 py-1.5 text-sm border-l hover:bg-green-50">
              Sm Mid
            </button>
            <button className="px-3 py-1.5 text-sm">Sm Right</button>
          </div>
          <div className="inline-flex rounded-lg overflow-hidden border">
            <button className="px-4 py-2 text-sm bg-green-600 text-white">
              Md Left
            </button>
            <button className="px-4 py-2 text-sm border-l hover:bg-green-50">
              Md Mid
            </button>
            <button className="px-4 py-2 text-sm">Md Right</button>
          </div>
          <div className="inline-flex rounded-lg overflow-hidden border">
            <button className="px-5 py-2.5 text-base bg-green-600 text-white">
              Lg Left
            </button>
            <button className="px-5 py-2.5 text-base border-l hover:bg-green-50">
              Lg Mid
            </button>
            <button className="px-5 py-2.5 text-base">Lg Right</button>
          </div>
        </div>
      </section>

      {/* 4) Icon option + keyboard/focus */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Icons & Focus</h2>
        <div className="inline-flex rounded-lg overflow-hidden border">
          <button className="px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center">
            <FiPlus className="-ml-1 mr-2 h-4 w-4" />
            Add
          </button>
          <button className="px-4 py-2 text-sm font-medium border-l hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Edit
          </button>
          <button className="px-4 py-2 text-sm font-medium border-l hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Delete
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Use <kbd className="px-1 border rounded">Tab</kbd> to move focus
          across the group.
        </p>
      </section>

      {/* 5) Flowbite variant (optional) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5) Flowbite Variant (optional)
        </h2>
        <p className="text-sm text-gray-600">
          Uncomment the import and code below if you want{" "}
          <code>flowbite-react</code>.
        </p>
        {/* 
        <Button.Group>
          <Button color="green">Left</Button>
          <Button color="gray">Middle</Button>
          <Button color="light">Right</Button>
        </Button.Group>
        */}
      </section>
    </main>
  );
};

export default ButtonGroupsShowcase;
