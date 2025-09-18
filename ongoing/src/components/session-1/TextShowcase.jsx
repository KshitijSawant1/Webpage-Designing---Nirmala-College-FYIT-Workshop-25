import React from "react";
const blueShades = [
  "bg-blue-50",
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
  "bg-blue-600",
  "bg-blue-700",
  "bg-blue-800",
  "bg-blue-900",
];
const TextShowcase = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-green-700">Text Showcase</h1>
          <p className="text-gray-600">
            TailwindCSS Styling ( Sizing , Color , Styles , Decoration )
          </p>
          <hr />
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Color Scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            <p className="p-2 rounded bg-blue-50 text-gray-900">bg-gray-50</p>
            <p className="p-2 rounded bg-blue-100 text-gray-800">bg-gray-100</p>
            <p className="p-2 rounded bg-blue-200 text-gray-700">bg-gray-200</p>
            <p className="p-2 rounded bg-blue-300 text-gray-600">bg-gray-300</p>
            <p className="p-2 rounded bg-blue-400 text-gray-500">bg-gray-400</p>
            <p className="p-2 rounded bg-blue-500 text-gray-400">bg-gray-500</p>
            <p className="p-2 rounded bg-blue-600 text-gray-300">bg-gray-600</p>
            <p className="p-2 rounded bg-blue-700 text-gray-200">bg-gray-700</p>
            <p className="p-2 rounded bg-blue-800 text-gray-100">bg-gray-800</p>
            <p className="p-2 rounded bg-blue-900 text-gray-50">bg-gray-900</p>
          </div>
          <hr />
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Size Scale</h2>
          <p className="text-xs">text-xs</p>
          <p className="text-sm">text-sm</p>
          <p className="text-base">text-base</p>
          <p className="text-lg">text-lg</p>
          <p className="text-xl">text-xl</p>
          <p className="text-2xl">text-2xl</p>
          <p className="text-4xl">text-4xl</p>
          <p className="text-6xl">text-6xl</p>
          <p className="text-8xl">text-8xl</p>
          <hr />
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Font Weights Scale</h2>
          <p className="font-light">font-light</p>
          <p className="font-normal">font-normal</p>
          <p className="font-medium">font-medium</p>
          <p className="font-semibold">font-semibold</p>
          <p className="font-bold">font-bold</p>
          <p className="font-extrabold">font-extrabold</p>
          <hr />
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Style</h2>
          <p className="italic">Font Style = italic</p>
          <p className="not-italic">Font Style = not-italic</p>
          <hr />
          <h2 className="text-xl font-semibold">Decoration</h2>
          <p className="underline">Font Decor = underline</p>
          <p className="no-underline">Font Decor = no-underline</p>
          <p className="line-through">Font Decor = line-through</p>
          <p className="underline decoration-dashed">
            Font Decor = underlined dashed
          </p>
          <p className="underline decoration-2">
            Font Decor = underline width-2
          </p>
          <hr />
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Tansform Spacing</h2>
          <p className="uppercase tracking-wide">
            Transform : uppercase tracking-wide
          </p>
          <p className="normal-case">Transform : normal</p>
          <p className="lowercase tracking-tight">
            Transform : lower tracking-tight
          </p>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            Color Scale with tailwindcss pattern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <p
                key={shade}
                className={`p-2 rounded bg-blue-${shade} text-gray-900`}
              >
                bg-blue-{shade}
              </p>
            ))}
          </div>
          <hr />
        </section>

        <section>
          <h2 className="text-xl font-semibold">
            Color Scale with const patterncode (infile at top)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            {blueShades.map((cls) => (
              <p key={cls} className={`p-2 rounded ${cls} text-gray-900`}>
                {cls}
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TextShowcase;
