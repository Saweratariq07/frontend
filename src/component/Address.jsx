import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import React, { useState } from "react";

function Address() {
  const [formData, setFormData] = useState({
    flatNo: "",
    buildingNo: "",
    areaName: "",
    townName: "",
    cityName: "",
    stateName: "",
    countryName: "",
    pinCode: "",
  });

  const [error, setError] = useState(""); // Added error state for validation feedback
  const navigate = useNavigate(); // Added for navigation after submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.cityName || !formData.countryName || !formData.pinCode) {
      setError("Please fill in all required fields (City, Country, Pin Code).");
      return;
    }

    // Save to localStorage (optional)
    localStorage.setItem("addressData", JSON.stringify(formData));
    console.log("Form Data:", formData);

    setError("Address saved successfully!");
    setTimeout(() => {
      setError("");
      navigate("/checkout"); // Navigate to checkout after success
    }, 2000);
  };

  return (
    <div>
      <section className="header">
        <div className="w-full bg-gray-900 text-white text-center py-8">
          <div className="container mx-auto px-4">
            <h1 className="font-semibold text-4xl md:text-6xl">Update Address</h1>
            <div className="mt-5 flex justify-center items-center space-x-2 text-sm text-gray-300">
              <Link
                to="/home"
                className="text-xl md:text-2xl text-yellow-400 hover:text-yellow-500 transition capitalize"
              >
                Home
              </Link>
              <span className="text-xl md:text-2xl text-gray-200">/ Update address</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10 min-h-screen flex items-center justify-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md my-10 sm:my-20">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">YOUR ADDRESS</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Flat No.
              </label>
              <input
                type="text"
                name="flatNo"
                value={formData.flatNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., 101"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Building No.
              </label>
              <input
                type="text"
                name="buildingNo"
                value={formData.buildingNo}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., A-12"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Area Name
              </label>
              <input
                type="text"
                name="areaName"
                value={formData.areaName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., Downtown"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Town Name
              </label>
              <input
                type="text"
                name="townName"
                value={formData.townName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., Springfield"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                City Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cityName"
                value={formData.cityName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., New York"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                State Name
              </label>
              <input
                type="text"
                name="stateName"
                value={formData.stateName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., NY"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Country Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., USA"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="e.g., 12345"
              />
            </div>
            {error && (
              <p
                className={`text-center text-sm ${
                  error.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition duration-300"
            >
              Save Address
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Address;