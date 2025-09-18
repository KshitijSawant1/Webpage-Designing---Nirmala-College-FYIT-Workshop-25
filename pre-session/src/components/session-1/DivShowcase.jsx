import React from "react";

const DivShowcase = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-green-700">
            Div Containers Showcase
          </h1>
          <p className="text-gray-600">
            Spacing, backgrounds, nesting, grids, responsive behavior,
            hide/show, and reordering
          </p>
        </header>

        {/* 1) Padding / Margin (incl. negative margin) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">1) Padding & Margin</h2>
          <div className="rounded-xl border bg-white p-4">
            <div className="bg-green-100 p-4">p-4</div>
          </div>

          <div className="rounded-xl border bg-white px-6">px-6</div>
          <div className="rounded-xl border bg-white py-8">py-8</div>

          <div className="rounded-xl border bg-white m-4 p-2">
            m-4 (outer margin) + p-2 (inner padding)
          </div>

          <div className="rounded-xl border bg-white mt-8 p-2">
            mt-8 (top margin)
          </div>

          <div className="rounded-xl border bg-white p-2">
            <div className="-mt-2 bg-green-200 p-2 rounded">
              child with -mt-2 (negative top margin)
            </div>
          </div>
        </section>

        {/* 2) Background colors + optional gradient */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2) Background Color</h2>
          <div className="rounded-lg p-3 bg-gray-100">bg-gray-100</div>
          <div className="rounded-lg p-3 bg-white border">bg-white</div>
          <div className="rounded-lg p-3 bg-green-100">bg-green-100</div>
          <div className="rounded-lg p-3 bg-green-200">bg-green-200</div>
          <div className="rounded-lg p-3 text-white bg-green-600">
            bg-green-600
          </div>
          <div className="rounded-lg p-4 text-white bg-gradient-to-r from-green-500 to-emerald-600">
            gradient: bg-gradient-to-r from-green-500 to-emerald-600
          </div>
        </section>

        {/* 3) Cascading / Nested divs */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">3) Cascading / Nested Divs</h2>
          <div className="p-6 bg-white rounded-xl shadow">
            Parent: p-6 bg-white rounded-xl shadow
            <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
              Child: p-4 bg-gray-50 border rounded-lg
            </div>
          </div>
        </section>

        {/* 4) Equal grid (2 → 4 cols) */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">4) Equal Grid (2 → 4 cols)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-green-100 p-4 rounded text-center">
                Item {i + 1}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            grid grid-cols-2 md:grid-cols-4 gap-4
          </p>
        </section>

        {/* 5) Unequal grid with spans */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">5) Unequal Grid (Spans)</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 md:col-span-3 bg-green-100 p-4 rounded">
              col-span-4 md:col-span-3 (wide)
            </div>
            <div className="col-span-4 md:col-span-1 bg-green-200 p-4 rounded">
              col-span-4 md:col-span-1 (narrow)
            </div>

            <div className="col-span-2 bg-green-100 p-4 rounded">
              col-span-2
            </div>
            <div className="col-span-2 bg-green-200 p-4 rounded">
              col-span-2
            </div>

            <div className="col-span-3 md:col-span-2 bg-green-100 p-4 rounded">
              col-span-3 md:col-span-2
            </div>
            <div className="col-span-1 md:col-span-2 bg-green-200 p-4 rounded">
              col-span-1 md:col-span-2
            </div>
          </div>
        </section>

        {/* 6) Responsive layout: widths change by breakpoint */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            6) Responsive Layout (Widths)
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white border rounded p-4">
              w-full md:w-1/2 lg:w-1/3
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white border rounded p-4">
              w-full md:w-1/2 lg:w-1/3
            </div>
            <div className="w-full lg:w-1/3 bg-white border rounded p-4">
              w-full lg:w-1/3
            </div>
          </div>
        </section>

        {/* 7) Hide by screen width */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7) Hide by Screen Width</h2>
          <div className="bg-white border rounded p-4">
            <div className="md:hidden p-3 rounded bg-emerald-100">
              Visible on small screens only (md:hidden)
            </div>
            <div className="hidden md:block p-3 rounded bg-emerald-200 mt-3">
              Visible on md and above (hidden md:block)
            </div>
          </div>
        </section>

        {/* 8) Reorder by screen width */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">8) Reorder by Screen Width</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="order-2 md:order-1 flex-1 bg-white border rounded p-4">
              A — order-2 md:order-1
            </div>
            <div className="order-1 md:order-2 flex-1 bg-white border rounded p-4">
              B — order-1 md:order-2
            </div>
          </div>
          <p className="text-sm text-gray-500">
            On mobile: B comes first; on md+, A comes first.
          </p>
        </section>

        {/* 9) Stack → row with alignment and justification */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">
            9) Stack → Row (Alignment & Justify)
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-white border rounded p-4">
            <div className="bg-green-100 rounded px-3 py-2">Left</div>
            <div className="bg-green-200 rounded px-3 py-2">Center</div>
            <div className="bg-green-300 rounded px-3 py-2">Right</div>
          </div>
          <p className="text-sm text-gray-500">
            Mobile: column stack; md+: row with centered alignment &
            space-between.
          </p>
        </section>
      </main>
    </div>
  );
};

export default DivShowcase;
