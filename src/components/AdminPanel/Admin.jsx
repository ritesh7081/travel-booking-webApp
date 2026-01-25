import React, { useState, useEffect } from "react";
import { api, authStore } from "../../api/client";

function Admin() {
  const [enquiries, setEnquiries] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEnquiries = async () => {
      const token = authStore.getToken();
      if (!token) {
        setError("Please sign in as an admin to view enquiries.");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const { enquiries: apiEnquiries } = await api.get("/enquiries", { token });
        const formatted = apiEnquiries.map((item) => ({
          ...item,
          id: item._id
        }));
        setEnquiries(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id, currentStatus) => {
    const token = authStore.getToken();
    if (!token) {
      setError("Authorization required.");
      return;
    }

    const newStatus = currentStatus === "Pending" ? "Resolved" : "Pending";
    try {
      const { enquiry } = await api.put(`/enquiries/${id}/status`, { status: newStatus }, { token });
      setEnquiries((prev) => prev.map((item) => (item.id === id ? { ...item, status: enquiry.status } : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    const token = authStore.getToken();
    if (!token) {
      setError("Authorization required.");
      return;
    }

    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;
    try {
      await api.del(`/enquiries/${id}`, { token });
      setEnquiries((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  // Filtering
  const filteredEnquiries = enquiries.filter((enquiry) => {
    const name = (enquiry.name || "").toLowerCase();
    const type = enquiry.acType || "";
    return (filter === "" || type === filter) && name.includes(search.toLowerCase());
  });

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Admin Panel - Vehicle Enquiries
      </h1>

      {error && (
        <div className="mb-4 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700">
          {error}
        </div>
      )}

      {loading && (
        <div className="mb-4 p-3 rounded-lg border border-blue-200 bg-blue-50 text-blue-700">
          Loading enquiries...
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
              <th className="p-4 border-b text-left font-semibold">Name</th>
              <th className="p-4 border-b text-left font-semibold">Contact</th>
              <th className="p-4 border-b text-left font-semibold">Departure</th>
              <th className="p-4 border-b text-left font-semibold">Destination</th>
              <th className="p-4 border-b text-left font-semibold">Seater</th>
              <th className="p-4 border-b text-left font-semibold">Type</th>
              <th className="p-4 border-b text-left font-semibold">Status</th>
              <th className="p-4 border-b text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnquiries.length > 0 ? (
              filteredEnquiries.map((enquiry) => (
                <tr key={enquiry.id} className="hover:bg-gray-50 transition duration-200">
                  <td className="p-4 border-b">{enquiry.name}</td>
                  <td className="p-4 border-b">{enquiry.contect}</td>
                  <td className="p-4 border-b">{enquiry.departure}</td>
                  <td className="p-4 border-b">{enquiry.destination}</td>
                  <td className="p-4 border-b">{enquiry.seater}</td>
                  <td className="p-4 border-b">{enquiry.acType}</td>
                  <td
                    className={`p-4 border-b font-semibold ${
                      enquiry.status === "Pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {enquiry.status}
                  </td>
                  <td className="p-4 border-b flex gap-3">
                    <button
                      onClick={() => handleStatusChange(enquiry.id, enquiry.status)}
                      className="px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-sm"
                    >
                      Toggle Status
                    </button>
                    <button
                      onClick={() => handleDelete(enquiry.id)}
                      className="px-4 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 border-b text-center text-gray-500" colSpan="8">
                  No enquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
