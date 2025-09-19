import React, { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/prime", label: "Prime Checker" },
  { to: "/factorial", label: "Factorial" },
  { to: "/fibonacci", label: "Fibonacci" },
  { to: "/gcdlcm", label: "GCD & LCM" },
  { to: "/percentage", label: "Percentage" },
  { to: "/calculator", label: "Calculator" },
  { to: "/table", label: "Multiplication Table" },
  { to: "/profitnloss", label: "Profit N Loss" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <nav className="flex items-center justify-between bg-white shadow px-4 py-3">
        <h1 className="text-xl font-bold">Maths Playground</h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-3">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-1 rounded hover:bg-gray-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
