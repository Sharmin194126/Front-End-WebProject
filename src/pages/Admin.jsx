import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const ADMIN_EMAIL = "sharmin@gmail.com";
  const ADMIN_PASSWORD = "sharmin123";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isAdminLoggedIn");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem("isAdminLoggedIn", "true");
      setError("");
    } else {
      setError("Invalid email or password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm border border-indigo-100"
        >
          <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">🔐 Admin Login</h2>

          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-4 py-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">🛠️ Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Product Management */}
        <div className="bg-white p-6 rounded-2xl border border-indigo-200 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-800 mb-3">📦 Product Management</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
            <li>Add new items to inventory with details</li>
            <li>Browse and manage all listed products</li>
            <li>Edit or remove discontinued products</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => navigate("/add-product")}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              + Add Product
            </button>
            <button
              onClick={() => navigate("/view-products")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              View Products
            </button>
          </div>
        </div>

        {/* Order Management */}
        <div className="bg-white p-6 rounded-2xl border border-indigo-200 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-800 mb-3">🧾 Order Management</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
            <li>View all placed orders with status</li>
            <li>Add or fulfill customer orders manually</li>
            <li>Cancel or edit order information</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => navigate("/view-orders")}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
            >
              View Orders
            </button>
            <button
              onClick={() => navigate("/add-order")}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Add Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
