import React, { useState } from "react";
import TextShowcase from "./components/session-1/TextShowcase";
import ButtonShowcase from "./components/session-3/ButtonShowcase";
import ButtonGrpShowcase from "./components/session-3/ButtonGrpShowCase";
import DivShowcase from "./components/session-2/DivShowcase";
import Projects from "./components/session-4/Projects";
import Home from "./components/session-4/Home";
import Navbar from "./components/session-4/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Footer = () => (
  <footer className="border-t">
    <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-700 font-semibold">
      © {new Date().getFullYear()} Name . Built with React 💙 + Tailwind CSS 🙂
    </div>
  </footer>
);

const App = () => {
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
          <Route path="/BtnGrpSC" element={<ButtonGrpShowcase />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
