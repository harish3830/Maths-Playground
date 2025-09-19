import { useState } from "react";

function FibonacciGenerator() {
  const [count, setCount] = useState("");
  const [series, setSeries] = useState([]);

  function generateFibonacci() {
    let n = Number(count);
    if (n <= 0) return;
    let fib = [0, 1];
    for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
    setSeries(fib.slice(0, n));
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4">Fibonacci</h1>
      <input
        type="number"
        placeholder="Enter count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-pink-400"
      />
      <button
        onClick={generateFibonacci}
        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
      >
        Generate
      </button>
      {series.length > 0 && (
        <p className="text-center mt-3">{series.join(", ")}</p>
      )}
    </div>
  );
}

export default FibonacciGenerator;
