import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import TableGenerator from "../components/Table";
import PrimeChecker from "../components/PrimeChecker";
import FactorialCalculator from "../components/Factorail";
import FibonacciGenerator from "../components/FibonacciGenerator";
import GcdLcmFinder from "../components/GcdLcmFinder";
import PercentageCalculator from "../components/PercentageCalculator";
import Calculator from "../components/SimpleCalculator";
import PnLCalculator from "../components/PnLCalculator";
import TestQuiz from "../components/testquiz";
import SimpleInterestCalculator from "../components/SimpleIntrest";
import SalaryFinder from "../components/Salaryfinder";
import Area from "../components/Area";

export default function Home() {
  const navigate = useNavigate();

  const tools = [
    { name: "Prime Checker", path: "/prime", element: <PrimeChecker /> },
    { name: "Factorial", path: "/factorial", element: <FactorialCalculator /> },
    { name: "Fibonacci", path: "/fibonacci", element: <FibonacciGenerator /> },
    { name: "GCD & LCM", path: "/gcdlcm", element: <GcdLcmFinder /> },
    { name: "Percentage", path: "/percentage", element: <PercentageCalculator /> },
    { name: "Calculator", path: "/calculator", element: <Calculator /> },
    { name: "Table Generator", path: "/table", element: <TableGenerator /> },
    { name: "Profit & Loss", path: "/profitnloss", element: <PnLCalculator /> },
    { name: "Test Quiz", path: "/test", element: <TestQuiz /> },
    { name: "Interest", path: "/intrest", element: <SimpleInterestCalculator /> },
    { name: "Salary Finder", path: "/salary", element: <SalaryFinder /> },
    { name: "Area", path: "/area", element: <Area /> },
  ];

  const Modal = ({ children }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => navigate("/")} 
    >
      <div
        className="relative bg-white rounded-xl p-6 shadow-2xl w-full max-w-lg max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={() => navigate("/")}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );

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

      <Routes>
        {tools.map((tool) => (
          <Route
            key={tool.path}
            path={tool.path}
            element={<Modal>{tool.element}</Modal>}
          />
        ))}
      </Routes>
    </div>
  );
}
