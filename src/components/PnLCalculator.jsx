import React, { useState } from "react";

const PnLCalculator = () => {
  const [costPrice, setCostPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [result, setResult] = useState(0);
  const [per, setPer] = useState(0);
  const [status, setStatus] = useState(""); 

  const calculateAll = () => {
    const difference = sellPrice - costPrice;

    if (difference > 0) {
      setStatus("Profit");
      setResult(difference);
      setPer((difference / costPrice) * 100);
    } else if (difference < 0) {
      setStatus("Loss");
      setResult(Math.abs(difference));
      setPer((Math.abs(difference) / costPrice) * 100);
    } else {
      setStatus("No Profit, No Loss");
      setResult(0);
      setPer(0);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="font-bold text-xl mb-4">Profit & Loss Checker</h2>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Cost Price (₹)</label>
        <input
          type="number"
          value={costPrice}
          onChange={(e) => setCostPrice(Number(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="Enter cost price"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Sell Price (₹)</label>
        <input
          type="number"
          value={sellPrice}
          onChange={(e) => setSellPrice(Number(e.target.value))}
          className="w-full border rounded p-2"
          placeholder="Enter sell price"
        />
      </div>

      <button
        onClick={calculateAll}
        className="w-full bg-blue-500 hover:bg-blue-600 h-10 mt-2 rounded-xl text-white font-bold transition"
      >
        Calculate
      </button>

      {status && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">
            {status}: ₹{result} in percentage :{per}%
          </p>
        </div>
      )}
    </div>
  );
};

export default PnLCalculator;
