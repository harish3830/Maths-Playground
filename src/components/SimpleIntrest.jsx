import React, { useState } from "react";

const SimpleInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState(null);

  const calculateInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate);
    const T = parseFloat(time);

    if (isNaN(P) || isNaN(R) || isNaN(T)) {
      setInterest("Please enter valid numbers");
      return;
    }

    const SI = (P * R * T) / 100;
    setInterest(SI.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Simple Interest Calculator</h2>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Principal (₹)</label>
        <input
          type="number"
          className="w-full border rounded-md p-2"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="Enter principal amount"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Rate (%)</label>
        <input
          type="number"
          className="w-full border rounded-md p-2"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="Enter interest rate"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Time (years)</label>
        <input
          type="number"
          className="w-full border rounded-md p-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time period"
        />
      </div>
      <button
        onClick={calculateInterest}
        className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 transition"
      >
        Calculate Interest
      </button>

      {interest !== null && (
        <div className="mt-4 text-center text-lg font-semibold">
          {isNaN(interest) ? interest : `Simple Interest: ₹${interest}`}
        </div>
      )}
    </div>
  );
};

export default SimpleInterestCalculator;
