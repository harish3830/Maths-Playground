import React, { useEffect, useState } from "react";

const Area = () => {
  const pie = 3.14;
  const [length, setlength] = useState("");
  const [breadth, setbreadth] = useState("");
  const [height, setheight] = useState("");
  const [radius, setradius] = useState("");
  const [figure, setfigure] = useState("");
  const [result, setresult] = useState("");
  const [unit, setunit] = useState("");

  const area = () => {
    if (figure == "tra") {
      setresult(((length * breadth) / 2) + `${unit}^2`);
      console.log(`${unit}^2`)
    }
    if (figure == "rect") {
      setresult(length * breadth + `${unit}^2`);
    }
    if (figure == "cir") {
      setresult(pie * radius ** 2 + `${unit}^2`);
    }
    if (figure == "cuboid") {
      setresult(length * breadth * height + `${unit}^3`);
    }
    if (figure == "cube") {
      setresult(length ** 3 + `${unit}^3`);
    }
  };
  useEffect(() => {
    setlength("");
    setbreadth("");
    setheight("");
    setradius("");
    setresult("");
    setunit("")
  }, [figure]);

  return (
    <div className="flex justify-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Area Calculator
        </h2>

        <label className="block mb-2 text-gray-700 font-medium">
          Select Shape
        </label>
        <select
          value={figure}
          onChange={(e) => setfigure(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
        >
          <option value="">--Select--</option>
          <option value="tra">Triangle</option>
          <option value="rect">Rectangle</option>
          <option value="cir">Circle</option>
          <option value="cuboid">Cuboid</option>
          <option value="cube">Cube</option>
        </select>
        <div>
          <input
            type="text"
            value={unit}
            onChange={(e) => setunit(e.target.value)}
            placeholder="Enter Unit"
            className="w-full border border-gray-300 rounded-lg p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
          />
        </div>
        {figure === "tra" && (
          <div className="mt-4 bg-green-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
            <input
              type="number"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              placeholder="Length of Triangle"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              value={breadth}
              onChange={(e) => setbreadth(e.target.value)}
              placeholder="Breadth of Triangle"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
        {figure === "rect" && (
          <div className="mt-4 bg-green-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
            <input
              type="number"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              placeholder="Length of Rectangle"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              value={breadth}
              onChange={(e) => setbreadth(e.target.value)}
              placeholder="Breadth of rectangle"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
        {figure === "cir" && (
          <div className="mt-4 bg-green-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
            <input
              type="number"
              value={radius}
              onChange={(e) => setradius(e.target.value)}
              placeholder="Length of circle"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
        {figure === "cuboid" && (
          <div className="mt-4 bg-green-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
            <input
              type="number"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              placeholder="Length of cuboid"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              value={breadth}
              onChange={(e) => setbreadth(e.target.value)}
              placeholder="Breadth of cuboid"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setheight(e.target.value)}
              placeholder="height of cuboid"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
        {figure === "cube" && (
          <div className="mt-4 bg-green-50 p-6 rounded-xl shadow-inner flex flex-col gap-4">
            <input
              type="number"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              placeholder="Length of cube"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}
        <div>
          {figure && (
            <button
              onClick={area}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Calculate
            </button>
          )}
        </div>

        {result && (
          <div className="mt-6 text-center text-lg font-semibold text-blue-700">
            Area: {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Area;
