import React from "react";

const AddProduct = () => {
  const products = [
    {
      id: "PRD001",
      name: "Stylish Sneakers",
      category: "Footwear",
      price: "$49.99",
      stock: 30,
      status: "Available",
    },
    {
      id: "PRD002",
      name: "Modern Watch",
      category: "Accessories",
      price: "$129.99",
      stock: 15,
      status: "Low Stock",
    },
    {
      id: "PRD003",
      name: "Elegant Jacket",
      category: "Clothing",
      price: "$89.99",
      stock: 10,
      status: "Available",
    },
    {
      id: "PRD004",
      name: "Cool Sunglasses",
      category: "Accessories",
      price: "$19.99",
      stock: 50,
      status: "Available",
    },
    {
      id: "PRD005",
      name: "Leather Wallet",
      category: "Accessories",
      price: "$39.99",
      stock: 5,
      status: "Low Stock",
    },
    {
      id: "PRD006",
      name: "Luxury Perfume",
      category: "Fragrance",
      price: "$59.99",
      stock: 12,
      status: "Available",
    },
    {
      id: "PRD007",
      name: "Casual Backpack",
      category: "Bags",
      price: "$34.99",
      stock: 20,
      status: "Available",
    },
    {
      id: "PRD008",
      name: "Smart Headphones",
      category: "Electronics",
      price: "$89.99",
      stock: 8,
      status: "Low Stock",
    },
    {
      id: "PRD009",
      name: "Comfy Hoodie",
      category: "Clothing",
      price: "$29.99",
      stock: 25,
      status: "Available",
    },
    {
      id: "PRD010",
      name: "Denim Jeans",
      category: "Clothing",
      price: "$49.99",
      stock: 18,
      status: "Available",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          🛍️ Product Management
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-800">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>ID:</strong> {product.id}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Price:</strong> {product.price}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Stock:</strong> {product.stock} units
              </p>
              <p
                className={`font-medium mt-2 ${
                  product.status === "Available"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                Status: {product.status}
              </p>
              <div className="mt-4 flex space-x-2">
                <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Add
                </button>
                <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
