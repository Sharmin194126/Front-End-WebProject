import React from "react";

const ViewProduct = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Stylish Sneakers",
      price: "$49.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlPqt8ie3yLZWbG9RhbnV4lV_Z9c6K1deepc3V0dQAseWaNypQ_26woO1-wexj-_MXQg&usqp=CAU",
    },
    {
      id: 2,
      name: "Modern Watch",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1526743655626-e3d757b13d61?fm=jpg&q=60&w=3000",
    },
    {
      id: 3,
      name: "Elegant Jacket",
      price: "$89.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGF5vq4WREtI5pHzn_wCa4VhlUBNPH5HArg&s",
    },
    {
      id: 4,
      name: "Cool Sunglasses",
      price: "$19.99",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDyodFwIsBMnY5SjNl3mBJzWKbUOT7A8HFQ&s",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          🛍️ View All Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.price}</p>
              <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
