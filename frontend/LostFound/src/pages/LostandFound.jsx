// src/pages/LostAndFound.jsx
import React, { useState } from "react";

const LostAndFound = () => {
  const [selectedType, setSelectedType] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // temporary test submit

    alert("Form Submitted (Frontend Test)");

    setFormData({
      title: "",
      description: "",
      location: "",
      type: "",
    });

    setSelectedType("");
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-4">

    <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
      Report Lost or Found Item
    </h1>

    {/* Buttons */}
    <div className="flex justify-center gap-6 mb-8">
      <button
        onClick={() => handleTypeSelect("lost")}
        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition"
      >
        Lost
      </button>

      <button
        onClick={() => handleTypeSelect("found")}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-md transition"
      >
        Found
      </button>
    </div>

    {/* Form */}
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
          className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
          className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <input
          type="text"
          name="location"
          placeholder="Enter Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 p-4 rounded-xl focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          value={formData.type}
          readOnly
          className="w-full bg-gray-100 border p-4 rounded-xl capitalize"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          Submit Report
        </button>
      </form>
    )}
  </div>
);
};

export default LostAndFound;