import { useState } from "react";

function GcdLcmFinder() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  function gcd(x, y) {
    while (y !== 0) [x, y] = [y, x % y];
    return x;
  }

  function calculate() {
    let num1 = Number(a), num2 = Number(b);
    if (!num1 || !num2) return;
    let g = gcd(num1, num2);
    let l = (num1 * num2) / g;
    setResult(`GCD = ${g}, LCM = ${l}`);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4">GCD & LCM</h1>
      <input
        type="number"
        placeholder="First number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-indigo-400"
      />
      <input
        type="number"
        placeholder="Second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={calculate}
        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
      >
        Calculate
      </button>
      {result && <p className="text-center mt-3">{result}</p>}
    </div>
  );
}

export default GcdLcmFinder;
