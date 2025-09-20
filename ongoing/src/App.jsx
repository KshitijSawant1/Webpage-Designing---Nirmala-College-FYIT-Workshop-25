import React, { useState } from "react";
import TextShowcase from "./components/session-1/TextShowcase";
import ButtonShowcase from "./components/session-2/ButtonShowcase";
import DivShowcase from "./components/session-2/DivShowcase";

const pages = [
  { label: "Text", component: <TextShowcase /> },
  { label: "Button", component: <ButtonShowcase /> },
  { label: "Div", component: <DivShowcase /> },
];
const App = () => {
  const [active, setActive] = useState(pages[0].label);
  return (
    <div>
      <nav className="bg-blue-500 text-white p-3 flex gap-3">
        {pages.map((p) => (
          <button
            key={p.label}
            onClick={() => setActive(p.label)}
            className={`px-3 py-1 rounded ${
              active === p.label
                ? "bg-white text-blue-600"
                : "hover:bg-blue-700"
            }`}
          >
            {p.label}
          </button>
        ))}
      </nav>

      <main className="p-6">
        {pages.find((p) => p.label === active)?.component}
      </main>
    </div>
  );
};

export default App;
