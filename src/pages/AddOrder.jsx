import React, { useState } from "react";

const AddOrder = () => {
  const [order, setOrder] = useState({
    customer: "",
    items: "",
    total: "",
    status: "Processing",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", order);
    alert("Order added successfully!");
    setOrder({
      customer: "",
      items: "",
      total: "",
      status: "Processing",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-yellow-600 text-center mb-6">
          ➕ Add New Order
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Customer Name</label>
            <input
              type="text"
              name="customer"
              value={order.customer}
              onChange={handleChange}
              required
              className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Items Ordered</label>
            <input
              type="text"
              name="items"
              value={order.items}
              onChange={handleChange}
              placeholder="e.g., Sneakers, Watch"
              required
              className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Total Amount</label>
            <input
              type="text"
              name="total"
              value={order.total}
              onChange={handleChange}
              placeholder="$199.99"
              required
              className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Order Status</label>
            <select
              name="status"
              value={order.status}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Add Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;
