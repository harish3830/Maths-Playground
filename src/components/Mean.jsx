import React, { useState } from "react";

export default function MeanCalculator() {
  const [count, setCount] = useState(0); 
  const [numbers, setNumbers] = useState([]);   
  const [mean, setMean] = useState(null);


  const handleCountChange = (e) => {
    const n = parseInt(e.target.value) || 0;
    setCount(n);

    setNumbers(Array(n).fill(""));
    setMean(null);
  };


  const handleNumberChange = (index, value) => {
    setNumbers((prev) =>
      prev.map((num, i) => (i === index ? value : num))
    );
  };

  const calculateMean = () => {
    const validNumbers = numbers.map((x) => parseFloat(x) || 0);
    const total = validNumbers.reduce((sum, val) => sum + val, 0);
    setMean(total / validNumbers.length);
  };

  return (
    <div className="flex justify-center p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Mean Calculator</h2>

 
        <input
          type="number"
          value={count}
          onChange={handleCountChange}
          placeholder="Enter number of elements"
          className="w-full border p-2 rounded mb-4"
        />


        {numbers.map((val, idx) => (
          <input
            key={idx}
            type="number"
            value={val}
            onChange={(e) => handleNumberChange(idx, e.target.value)}
            placeholder={`Value ${idx + 1}`}
            className="w-full border p-2 rounded mb-2"
          />
        ))}

        {count > 0 && (
          <button
            onClick={calculateMean}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600"
          >
            Calculate Mean
          </button>
        )}

        {mean !== null && (
          <div className="text-center text-lg font-semibold mt-4">
            Mean: {mean}
          </div>
        )}
      </div>
    </div>
  );
}
