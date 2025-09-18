import React from "react";

const TextShowcase = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-green-700">Text Showcase</h1>
          <p className="text-gray-600">
            Tailwind CSS — sizing, color, styles, decoration & families
          </p>
        </header>

        {/* 1) Color scale (50 → 900) */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Color scale</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            <p className="p-2 rounded bg-gray-50 text-gray-900">bg-gray-50</p>
            <p className="p-2 rounded bg-gray-100 text-gray-900">bg-gray-100</p>
            <p className="p-2 rounded bg-gray-200 text-gray-900">bg-gray-200</p>
            <p className="p-2 rounded bg-gray-300 text-gray-900">bg-gray-300</p>
            <p className="p-2 rounded bg-gray-400 text-gray-900">bg-gray-400</p>
            <p className="p-2 rounded bg-gray-500 text-white">bg-gray-500</p>
            <p className="p-2 rounded bg-gray-600 text-white">bg-gray-600</p>
            <p className="p-2 rounded bg-gray-700 text-white">bg-gray-700</p>
            <p className="p-2 rounded bg-gray-800 text-white">bg-gray-800</p>
            <p className="p-2 rounded bg-gray-900 text-white">bg-gray-900</p>
          </div>
          <p className="mt-2">
            Brand example:{" "}
            <span className="text-green-600 font-semibold">text-green-600</span>
          </p>
        </section>

        {/* 2) Sizes (xs → 2xl & beyond) */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Sizes</h2>
          <p className="text-xs">text-xs</p>
          <p className="text-sm">text-sm</p>
          <p className="text-base">text-base</p>
          <p className="text-lg">text-lg</p>
          <p className="text-xl">text-xl</p>
          <p className="text-2xl">text-2xl</p>
          <p className="text-4xl leading-tight">text-4xl</p>
          <p className="text-6xl leading-tight">text-6xl</p>
        </section>

        {/* 3) Weights */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Weights</h2>
          <p className="font-light">font-light</p>
          <p className="font-normal">font-normal</p>
          <p className="font-medium">font-medium</p>
          <p className="font-semibold">font-semibold</p>
          <p className="font-bold">font-bold</p>
          <p className="font-extrabold">font-extrabold</p>
        </section>

        {/* 4) Styles */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Styles</h2>
          <p className="italic">italic</p>
          <p className="not-italic">not-italic</p>
        </section>

        {/* 5) Decoration */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Decoration</h2>
          <p className="underline">underline</p>
          <p className="line-through">line-through</p>
          <p className="no-underline">no-underline</p>
          <p className="underline decoration-dashed">
            underline decoration-dashed
          </p>
          <p className="underline decoration-2">underline decoration-2</p>
        </section>

        {/* 6) Transform / spacing */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Transform & letter spacing</h2>
          <p className="uppercase tracking-wide">uppercase + tracking-wide</p>
          <p className="normal-case tracking-tight">
            normal-case + tracking-tight
          </p>
        </section>

        {/* 7) Font family */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Font families</h2>
          <p className="font-sans">font-sans (default UI sans)</p>
          <p className="font-serif">font-serif (serif)</p>
          <p className="font-mono">font-mono (monospace)</p>
          <div className="mt-3 space-y-1">
            <p className="font-display">
              custom: font-display (configured in tailwind.config.js)
            </p>
            <p className="font-code">
              custom: font-code (configured in tailwind.config.js)
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TextShowcase;
