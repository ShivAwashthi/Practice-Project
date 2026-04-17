// src/pages/LostAndFound.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LostAndFound = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
  });

  const handleTypeSelect = (type) => {
    setSelectedType(type);

    setFormData({
      ...formData,
      type: type,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8080/api/item",
      formData
    );

    console.log("SUCCESS:", response.data);
    alert("Saved Successfully");
    navigate("/");
  } catch (error) {
    console.log("ERROR:", error);
    console.log("ERROR DATA:", error.response?.data);
    alert("Failed");
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
        Report Lost or Found Item
      </h1>

      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => handleTypeSelect("lost")}
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold"
        >
          Lost
        </button>

        <button
          onClick={() => handleTypeSelect("found")}
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold"
        >
          Found
        </button>
      </div>

      {selectedType && (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-5"
        >
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            value={formData.type}
            readOnly
            className="w-full bg-gray-100 border p-4 rounded-xl capitalize"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>
        </form>
      )}
    </div>
  );
};

export default LostAndFound;