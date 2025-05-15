import React from "react";

const ViewOrders = () => {
  const orders = [
    {
      id: "ORD001",
      customer: "John Doe",
      items: ["Stylish Sneakers", "Modern Watch"],
      total: "$179.98",
      status: "Shipped",
    },
    {
      id: "ORD002",
      customer: "Jane Smith",
      items: ["Elegant Jacket"],
      total: "$89.99",
      status: "Processing",
    },
    {
      id: "ORD003",
      customer: "Ali Khan",
      items: ["Cool Sunglasses", "Leather Wallet", "Comfy Hoodie"],
      total: "$109.97",
      status: "Delivered",
    },
    {
      id: "ORD004",
      customer: "Emily Clark",
      items: ["Smart Headphones"],
      total: "$89.99",
      status: "Cancelled",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          📦 View All Orders
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 text-green-800">
                Order ID: {order.id}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Customer:</strong> {order.customer}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Items:</strong> {order.items.join(", ")}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Total:</strong> {order.total}
              </p>
              <p className={`font-medium mt-2 ${
                order.status === "Shipped"
                  ? "text-blue-600"
                  : order.status === "Delivered"
                  ? "text-green-600"
                  : order.status === "Cancelled"
                  ? "text-red-500"
                  : "text-yellow-600"
              }`}>
                Status: {order.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
