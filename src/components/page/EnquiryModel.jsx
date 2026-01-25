import React, { useState } from "react";
import { api } from "../../api/client";

function EnquiryModel() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contect: "",
    seater: "",
    acType: "",
    departure: "",
    destination: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await api.post("/enquiries", {
        name: formData.name,
        email: formData.email,
        contect: formData.contect,
        seater: formData.seater,
        acType: formData.acType,
        departure: formData.departure,
        destination: formData.destination
      });

      setSuccessMsg("✅ Enquiry submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contect: "",
        seater: "",
        acType: "",
        departure: "",
        destination: "",
      });
    } catch (error) {
      console.error("Error saving data:", error);
      setErrorMsg(error.message || "Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Vehicle Enquiry
        </h2>

        {successMsg && (
          <p
            className={`mb-3 text-center font-medium ${
              successMsg.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {successMsg}
          </p>
        )}

        {errorMsg && (
          <p className="mb-3 text-center font-medium text-red-600">
            {errorMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-1 font-medium">Contact</label>
            <input
              type="number"
              name="contect"
              value={formData.contect}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Seater */}
          <div>
            <label className="block mb-1 font-medium">Select Seater</label>
            <select
              name="seater"
              value={formData.seater}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="">-- Select --</option>
              <option value="4">4 Seater</option>
              <option value="7">7 Seater</option>
              <option value="12">12 Seater</option>
              <option value="20">20 Seater</option>
            </select>
          </div>

          {/* AC Type */}
          <div>
            <label className="block mb-1 font-medium">AC / Non-AC</label>
            <select
              name="acType"
              value={formData.acType}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="">-- Select --</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>

          {/* Departure */}
          <div>
            <label className="block mb-1 font-medium">Departure</label>
            <input
              type="text"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              placeholder="Enter departure location"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Destination */}
          <div>
            <label className="block mb-1 font-medium">Destination</label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnquiryModel;
