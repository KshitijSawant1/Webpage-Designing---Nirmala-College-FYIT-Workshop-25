import React from "react";

const ButtonShowcase = () => {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-10 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
          Buttons Showcase
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Color, borders, hover, focus, disabled/loading, and dark mode
        </p>
      </section>

      {/* 1) Base button */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">1) Base Button</h2>
        <div className="space-x-3">
          <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white">
            Base
          </button>
          <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border">
            inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm
            font-medium
          </code>
        </div>
      </section>

      {/* 2) Color variants */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">2) Color Variants</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700">
            Solid
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Neutral
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
            Outline
          </button>
        </div>
      </section>

      {/* 3) Text color override */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">3) Text Color Override</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-green-700 border border-green-600 hover:bg-green-50 dark:bg-gray-900 dark:text-green-400 dark:border-green-500">
            text-green-700
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700">
            text-white
          </button>
        </div>
      </section>

      {/* 4) Border & radius */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">4) Border & Radius</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded text-sm font-medium border text-gray-900 dark:text-white">
            border
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border-2 border-green-600 text-green-700 dark:text-green-400">
            border-2
          </button>
          <button className="px-4 py-2 rounded text-sm font-medium border border-green-600 text-green-700 dark:text-green-400">
            rounded
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border border-green-600 text-green-700 dark:text-green-400">
            rounded-lg
          </button>
          <button className="px-5 py-2 rounded-full text-sm font-medium border border-green-600 text-green-700 dark:text-green-400">
            rounded-full
          </button>
        </div>
      </section>

      {/* 5) Hover color + 6) Hover sizing */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          5) Hover Color + 6) Hover Sizing
        </h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700">
            hover:bg
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border border-green-600 text-green-700 hover:text-white hover:bg-green-600">
            hover:text + bg
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-900 transform hover:scale-105 duration-150">
            hover:scale-105
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium shadow hover:shadow-lg bg-white text-gray-900 border">
            hover:shadow
          </button>
        </div>
      </section>

      {/* 7) Focus styles (a11y) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">7) Focus Styles (a11y)</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-900 border focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-white dark:focus:ring-offset-gray-900">
            focus:ring-2
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-green-600">
            on brand bg
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Tip: hit <kbd className="px-1 border rounded">Tab</kbd> to see focus
          rings.
        </p>
      </section>

      {/* 8) Disabled / Loading */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">8) Disabled / Loading</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <button
            className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white"
            disabled
          >
            Disabled
          </button>
          <button
            disabled
            className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Disabled styled
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
              />
            </svg>
            Loading…
          </button>
        </div>
      </section>

      {/* 9) Dark mode variants */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">9) Dark Mode</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white dark:bg-green-500 dark:text-white dark:hover:bg-green-600">
            Brand (dark supported)
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white text-gray-900 border dark:bg-gray-800 dark:text-white dark:border-gray-700">
            Neutral (dark supported)
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-medium border border-green-600 text-green-700 dark:text-green-300 dark:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20">
            Outline (dark supported)
          </button>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Add <code>class="dark"</code> to &lt;html&gt; in index.html to test.
        </p>
      </section>
    </main>
  );
};

export default ButtonShowcase;
