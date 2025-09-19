import { useState } from "react";

function TableGenerator() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  function generateTable() {
    if (!number) return;
    let results = [];
    for (let i = 1; i <= 10; i++) {
      results.push(`${number} × ${i} = ${number * i}`);
    }
    setTable(results);
  }

  function reset() {
    setNumber("");
    setTable([]);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h1 className="text-xl font-bold text-center mb-4"> n Table</h1>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="w-full p-2 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={generateTable}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Generate
      </button>

      {table.length > 0 && (
        <>
          <ul className="mt-4 space-y-1">
            {table.map((item, index) => (
              <li key={index} className="text-center bg-gray-100 p-1 rounded">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={reset}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
}

export default TableGenerator;
