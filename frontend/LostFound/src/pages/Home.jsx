// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/item"
        );

        setItems(response.data);
      } catch (err) {
        setError("Failed to load records");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        Lost & Found Records
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No Data Available
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h2>

              <p className="mb-3 text-gray-700">
                {item.description}
              </p>

              <p className="mb-3">
                <span className="font-semibold">Location:</span>{" "}
                {item.location}
              </p>

              <span
                className={`inline-block px-4 py-1 rounded-full text-white ${
                  item.type === "lost"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {item.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;