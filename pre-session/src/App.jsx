import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/session-4/Home";
import Projects from "./components/session-4/Projects";
import Navbar from "./components/session-4/Navbar";
import TextShowcase from "./components/session-1/TextShowcase";
import DivShowcase from "./components/session-2/DivShowcase";
import ButtonShowcase from "./components/session-3/ButtonShowcase";

const Footer = () => (
  <footer className="border-t">
    <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} KS • Built with React + Tailwind
    </div>
  </footer>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/TextSC" element={<TextShowcase />} />
          <Route path="/DivSC" element={<DivShowcase />} />
          <Route path="/BtnSC" element={<ButtonShowcase />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
