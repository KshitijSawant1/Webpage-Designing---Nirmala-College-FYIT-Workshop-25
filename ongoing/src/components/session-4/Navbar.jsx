import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/TextSc", label: "TextSC" },
  { to: "/DivSc", label: "DivSC" },
  { to: "/BtnSc", label: "BtnSc" },
  { to: "/BtnGrpSC", label: "BtnGrpSc" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const linkStyle = ({ isActive }) =>
    `px-3 py-1 rounded ${
      isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-700"
    }`;
  return (
    <nav className="bg-white border-b sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-blue-700">NAME . Portfolio</span>

        <div className="hidden md:flex gap-3 text-sm">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkStyle}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-blue-700"
          onClick={() => setOpen(true)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t flex flex-col p-3 space-y-2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkStyle}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
