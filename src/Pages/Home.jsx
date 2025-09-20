import React from "react";
import {
  Link,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import TableGenerator from "../components/Table";
import PrimeChecker from "../components/PrimeChecker";
import FactorialCalculator from "../components/Factorail";
import FibonacciGenerator from "../components/FibonacciGenerator";
import GcdLcmFinder from "../components/GcdLcmFinder";
import PercentageCalculator from "../components/PercentageCalculator";
import Calculator from "../components/SimpleCalculator";
import PnLCalculator from "../components/PnLCalculator";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };
  const tools = [
    { name: "Prime Checker", path: "/prime" },
    { name: "Factorial", path: "/factorial" },
    { name: "Fibonacci", path: "/fibonacci" },
    { name: "GCD & LCM", path: "/gcdlcm" },
    { name: "Percentage", path: "/percentage" },
    { name: "Calculator", path: "/calculator" },
    { name: "Table Generator", path: "/table" },
    { name: "Profit & Loss", path: "/profitnloss" },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto text-center text-white mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-pulse">
          Math & Utility Tools
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Quick, easy, and interactive tools to make your calculations fun.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            to={tool.path}
            className="bg-white/90 hover:bg-white text-gray-800 rounded-2xl shadow-lg p-6 text-center font-semibold transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {tool.name}
          </Link>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-10 bg-white/70 rounded-xl p-4 shadow-lg">
        <Routes>
          <Route
            path="/"
            element={
              <p className="text-center text-gray-700">
                Select a tool above to get started!
              </p>
            }
          />
          <Route path="/prime" element={<PrimeChecker />} />
          <Route path="/factorial" element={<FactorialCalculator />} />
          <Route path="/fibonacci" element={<FibonacciGenerator />} />
          <Route path="/gcdlcm" element={<GcdLcmFinder />} />
          <Route path="/percentage" element={<PercentageCalculator />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/table" element={<TableGenerator />} />
          <Route path="/profitnloss" element={<PnLCalculator />} />
        </Routes>
      </div>
      {location.pathname !== "/" && (
        <button
          onClick={navigation}
          className="max-w-3xl mx-auto mt-10 bg-white/70 rounded-xl p-4 shadow-lg"
        >
          Clear
        </button>
      )}
    </div>
  );
}
