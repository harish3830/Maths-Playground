import { useState } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function calculateFactorial() {
    let num = Number(number);
    if (num < 0) {
      setResult("❌ Not defined for negatives");
      return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    setResult(`${num}! = ${fact}`);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4"> Factorial</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-purple-400"
      />
      <button
        onClick={calculateFactorial}
        className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
      >
        Calculate
      </button>
      {result && <p className="text-center mt-3 text-lg">{result}</p>}
    </div>
  );
}

export default FactorialCalculator;
