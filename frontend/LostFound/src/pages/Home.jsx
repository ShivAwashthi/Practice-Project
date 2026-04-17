import React, { useState } from "react";
import mockData from "../data/mockData";

const Home = () => {
  const [items] = useState(() => {
    const saved = localStorage.getItem("lostfound");

    if (saved) {
      return JSON.parse(saved);
    } else {
      localStorage.setItem(
        "lostfound",
        JSON.stringify(mockData)
      );
      return mockData;
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Lost & Found Records
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              {item.title}
            </h2>

            <p className="mb-3">{item.description}</p>

            <p>
              <b>Location:</b> {item.location}
            </p>

            <span
              className={`mt-3 inline-block px-4 py-1 rounded-full text-white ${
                item.type === "lost" ? "bg-red-500" : "bg-green-500"
              }`}
            >
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;