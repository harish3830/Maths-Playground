import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import TableGenerator from "./components/Table";
import PrimeChecker from "./components/PrimeChecker";
import FactorialCalculator from "./components/Factorail";
import FibonacciGenerator from "./components/FibonacciGenerator";
import GcdLcmFinder from "./components/GcdLcmFinder";
import PercentageCalculator from "./components/PercentageCalculator";
import Calculator from "./components/SimpleCalculator";
import PnLCalculator from "./components/PnLCalculator";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 md:p-6 max-w-3xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <p className="text-center text-gray-600 mt-4">
                Select a tool from the menu
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
    </Router>
  );
}
