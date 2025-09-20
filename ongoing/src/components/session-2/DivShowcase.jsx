import React from "react";

const DivShowcase = () => {
  return (
    <div>
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-indigo-800">
            Div Showcase and Container
          </h1>
          <p>Spacing , Background , Nesting , Grid , Resposnsiveness</p>
          <hr />
        </header>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">1) Padding </h2>
          <div className="bg-blue-100 p-4">Padding - 4 (pl, pr , pt , pb)</div>
          <div className="bg-blue-100 pt-4">Padding top - 4 </div>
          <div className="bg-blue-100 pb-4">Padding bottom - 4</div>
          <div className="bg-blue-100 pl-4">Padding left - 4 </div>
          <div className="bg-blue-100 pr-4">Padding right - 4 </div>
          <div className="bg-blue-100 pt-4 pb-4">Padding right - 4 </div>
          <hr />
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">2) Margin </h2>
          <div className="bg-blue-100 m-4">Margin - 4 (pl, pr , pt , pb)</div>
          <div className="bg-blue-100 mt-4">Margin top - 4 </div>
          <div className="bg-blue-100 mb-4">Margin bottom - 4</div>
          <div className="bg-blue-100 ml-4">Margin left - 4 </div>
          <div className="bg-blue-100 mr-4">Margin right - 4 </div>
          <div className="bg-blue-100 mt-4 mb-4">Margin right - 4 </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">3) Padding & Margin </h2>
          <div className="rounded-xl border bg-blue-50 px-6">PaddingX - 6</div>
          <div className="rounded-xl border bg-blue-50 py-8">PaddingY - 8</div>
          <div className="rounded-xl border bg-blue-50 m-4 p-2 ">
            Padding - 2 | Margin - 4
          </div>
          <div className="rounded-xl border bg-blue-50 -mt-2">
            Negative Top Margin - 2
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">4) Background Coloring </h2>
          <div className="rounded-lg p-3 bg-gray-100">bg-gray-100</div>
          <div className="rounded-lg p-3 bg-white border border-2 border-blue-400">
            bg-white border border-2 border-blue-400
          </div>
          <div className="rounded-lg p-3  border border-dashed border-2 border-green-400">
            border border-dashed border-2 border-green-400
          </div>
          <div className="rounded-lg p-3 bg-green-200">bg-green-200</div>
          <div className="rounded-lg p-3 bg-red-200 text-red-700">
            bg-red-200 text-red-700
          </div>
          <div className="rounded-lg p-3 text-white bg-gradient-to-r from-green-500 to-indigo-600">
            bg-gradient-to-r from-green-500 to-indigo-300"
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">5) Cascading / Nesting</h2>
          <div className="p-6 bg-white border rounded-xl shadow-lg font-bold">
            Parent
            <div className="mt-1 p-4 bg-yellow-200 border rounded-lg font-bold text-yellow-700">
              Child
            </div>
            Parent
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">6) Grids</h2>
          <h3 className="mt-2 italic text-lg font-bold underline">
            Equal Grids
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="bg-green-100 p-4 rounded text-center font-semibold border border-2 border-green-500"
              >
                Item {i + 1}
              </div>
            ))}
          </div>
          <h3 className="mt-2 italic text-lg font-bold underline">
            Unequal Grids
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4  bg-yellow-200 p-4 border-2 border-yellow-600">
              md:col-span-4
            </div>
            <div className="col-span-2  md:col-span-3  bg-pink-200 border-2 border-pink-600 p-4">
              md:col-span-3
            </div>
            <div className="col-span-2  md:col-span-1  bg-pink-200 border-2 border-pink-600 p-4">
              md:col-span-1
            </div>
            <div className="col-span-2  bg-red-200 p-4 border-2 border-red-600">
              md:col-span-2
            </div>
            <div className="col-span-2  bg-red-200 p-4 border-2 border-red-600">
              md:col-span-2
            </div>
            <div className="col-span-1  bg-blue-200 p-4 border-2 border-blue-600">
              md:col-span-1
            </div>
            <div className="col-span-1  bg-blue-200 p-4 border-2 border-blue-600">
              md:col-span-1
            </div>
            <div className="col-span-1  bg-blue-200 p-4 border-2 border-blue-600">
              md:col-span-1
            </div>
            <div className="col-span-1  bg-blue-200 p-4 border-2 border-blue-600">
              md:col-span-1
            </div>
            <div className="col-span-2  md:col-span-1  bg-indigo-200 p-4 border-2 border-indigo-600">
              md:col-span-1
            </div>
            <div className="col-span-2  md:col-span-3  bg-indigo-200 p-4 border-2 border-indigo-600">
              md:col-span-3
            </div>
            <div className="col-span-4  bg-green-200 p-4 border-2 border-green-600">
              md:col-span-4
            </div>
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">7) Responsive </h2>
          <div className=" flex flex-wrap gap-4 ">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded p-4 border-2">
              Item 1 : w-full md:w-1/2 lg:w-1/3
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded p-4 border-2">
              Item 2 : w-full md:w-1/2 lg:w-1/3
            </div>
            <div className="w-full lg:w-1/3 bg-white rounded p-4 border-2">
              Item 3 : w-full lg:w-1/3
            </div>
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">8) Hidding </h2>
          <div className="bg-white border-2 rounded p-4 font-bold">
            Parent
            <div className="md:hidden p-4 rounded border-2 bg-green-200  text-green-800">
              CHILD : A | md:hidden | Visible on Small Screen Only
            </div>
            <div className="hidden md:block rounded border-2 bg-purple-200 p-4  text-purple-800">
              CHILD : B | hidden md:block | Visible on md and Above
            </div>
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">9) Reordering </h2>
          <div className="flex flex-col md:flex-row gap-4 border-2 p-4 font-semibold">
            <div className="order-2 md:order-1 flex-1 border-2 bg-green-200 rounded p-4">
              A : order-2 md:order-1
            </div>
            <div className="order-1 md:order-2 flex-1 border-2 bg-red-200 rounded p-4">
              B : order-1 md:order-2
            </div>
          </div>
          <hr />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold ">10) Stacking </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white border-2 font-semibold p-4">
            <div className="bg-blue-200 rounded px-3 py-3 mt-3 border-2 border-blue-600">Left | Top</div>
            <div className="bg-indigo-200 rounded px-3 py-3 mt-3 border-2 border-indigo-600">Center | Middle</div>
            <div className="bg-purple-200 rounded px-3 py-3 mt-3 border-2 border-purple-600">Right | Bottom</div>
          </div>
          <hr />
        </section>
      </main>
    </div>
  );
};

export default DivShowcase;
