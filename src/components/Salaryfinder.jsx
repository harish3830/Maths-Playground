import React, { useState } from "react";

const SalaryFinder = () => {
  const [salary, setSalary] = useState();
  const [leave, setLeave] = useState();
  const [paidLeave, setPaidLeave] = useState();
  const [days, setDays] = useState();
  const [pf, setPf] = useState();               
  const [finalSalary, setFinalSalary] = useState();

  const calculateSalary = () => {
    const oneDaySalary = salary / days;
    const deductionDays = Math.max(0, leave - paidLeave);
    const totalSalary =
      salary - deductionDays * oneDaySalary - pf; // ✅ subtract PF
    setFinalSalary(totalSalary.toFixed(2));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h1 className="text-xl font-bold text-center mb-4">Salary Calculator</h1>

      <input
        type="number"
        placeholder="Monthly Salary"
        value={salary}
        onChange={(e) => setSalary(Number(e.target.value))}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="number"
        placeholder="Total Leaves"
        value={leave}
        onChange={(e) => setLeave(Number(e.target.value))}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="number"
        placeholder="Paid Leaves"
        value={paidLeave}
        onChange={(e) => setPaidLeave(Number(e.target.value))}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="number"
        placeholder="Days in Month"
        value={days}
        onChange={(e) => setDays(Number(e.target.value))}
        className="w-full p-2 border rounded-lg mb-2 focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="number"
        placeholder="PF Deduction"
        value={pf}
        onChange={(e) => setPf(Number(e.target.value))}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-yellow-400"
      />

      <button
        onClick={calculateSalary}
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
      >
        Calculate
      </button>

      {finalSalary > 0 && (
        <p className="text-center mt-3 font-semibold">
          Final Salary: ₹{finalSalary}
        </p>
      )}
    </div>
  );
};

export default SalaryFinder;
