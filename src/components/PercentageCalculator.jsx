import { useState } from "react";

function PercentageCalculator() {
  const [marks, setMarks] = useState("");
  const [total, setTotal] = useState("");
  const [result, setResult] = useState("");

  function calculatePercentage() {
    let m = Number(marks), t = Number(total);
    if (!m || !t) return;
    let percent = ((m / t) * 100).toFixed(2);
    setResult(`Percentage = ${percent}%`);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4"> Percentage</h1>
      <input
        type="number"
        placeholder="Marks obtained"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="number"
        placeholder="Total marks"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-yellow-400"
      />
      <button
        onClick={calculatePercentage}
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
      >
        Calculate
      </button>
      {result && <p className="text-center mt-3">{result}</p>}
    </div>
  );
}

export default PercentageCalculator;
