import React, { useState } from "react";
import TextShowcase from "./components/session-1/TextShowcase";
import DivShowcase from "./components/session-1/DivShowcase";
import ButtonShowcase from "./components/session-1/ButtonShowcase";
import ButtonGroupsShowcase from "./components/session-1/ButtonGroupsShowcase";

const pages = [
  { label: "Text", component: <TextShowcase /> },
  { label: "Div", component: <DivShowcase /> },
  { label: "Button", component: <ButtonShowcase /> },
  { label: "BtnGrp", component: <ButtonGroupsShowcase /> },
];

const App = () => {
  const [active, setActive] = useState(pages[0].label);

  return (
    <div className="min-h-screen">
      {/* Menu */}
      <nav className="bg-green-600 text-white p-3 flex gap-3">
        {pages.map((p) => (
          <button
            key={p.label}
            onClick={() => setActive(p.label)}
            className={`px-3 py-1 rounded ${
              active === p.label
                ? "bg-white text-green-600"
                : "hover:bg-green-700"
            }`}
          >
            {p.label}
          </button>
        ))}
      </nav>

      {/* Active Page */}
      <main className="p-6">
        {pages.find((p) => p.label === active)?.component}
      </main>
    </div>
  );
};

export default App;
