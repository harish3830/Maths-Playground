import { useState } from "react";

function PrimeChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function checkPrime() {
    if (!number) return;
    setResult(isPrime(Number(number)) ? "✅ Prime Number" : "❌ Not Prime");
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4"> Prime Checker</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-green-400"
      />
      <button
        onClick={checkPrime}
        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
      >
        Check
      </button>
      {result && <p className="text-center mt-3 text-lg">{result}</p>}
    </div>
  );
}

export default PrimeChecker;
