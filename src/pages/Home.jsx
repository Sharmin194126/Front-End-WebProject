import React, { useState } from "react";

// Product data
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

const exclusiveItems = [
  {
    id: 5,
    name: "Leather Wallet",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136",
  },
  {
    id: 6,
    name: "Luxury Perfume",
    price: "$59.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySRjPo8PNDWWCjiGmCjnODvKXMSmHF02Fng&s",
  },
  {
    id: 7,
    name: "Casual Backpack",
    price: "$34.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVEF8dgesjY3mMaIIp5GZ7jnci8eu25x1eQ&s",

  },
  {
    id: 8,
    name: "Smart Headphones",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  },
];

const offerItems = [
  {
    id: 9,
    name: "Comfy Hoodie",
    price: "$29.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09g_htQgUIMtQu1fCXFvLzqYrPfR-XRAl2w&s",

  },
  {
    id: 10,
    name: "Summer Hat",
    price: "$15.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8qsmO9-kAv4EQO3l_1jLR5V_IGbCvpbSag&s",

  },
  {
    id: 11,
    name: "Running Shoes",
    price: "$59.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJQOm-zLHLvk0waqU1HSjo_bAmuR3zb9Crw&s",
  },
  {
    id: 12,
    name: "Denim Jeans",
    price: "$49.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMchrqMEmEEcmAGd9lfGXBGDJUoToOrjchA&s",
  },

];

const bannerImages = [
 "https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8fDA%3D",
  "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_hybrid&w=740",
];

const Section = ({ title, products }) => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow rounded-xl overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-gray-800">{product.name}</h3>
            <p className="text-indigo-600 font-bold mt-1">{product.price}</p>
            <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StarRating = ({ stars }) => (
  <div className="text-yellow-500">
    {"★".repeat(stars)}{"☆".repeat(5 - stars)}
  </div>
);

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const handlePrev = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const handleNext = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-indigo-50 text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={bannerImages[currentBanner]}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-white drop-shadow-lg z-10">
          Welcome to FashionBD 🛍️
        </h1>
        <div className="absolute top-6 right-6 z-10">
          <input
            type="text"
            placeholder="🔍 Search"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl font-bold text-white bg-black/40 px-3 py-1 rounded-full hover:bg-black/60 z-10"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl font-bold text-white bg-black/40 px-3 py-1 rounded-full hover:bg-black/60 z-10"
        >
          {">"}
        </button>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Section title="🔥 Featured Items" products={featuredItems} />
        <Section title="⭐ Exclusive Items" products={exclusiveItems} />
        <Section title="💰 Offer Price Items" products={offerItems} />
      </div>

      {/* Footer */}
      <footer className="mt-24 bg-white shadow-inner rounded-t-2xl py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">💬 Customer Reviews</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Rita S.",
                stars: 5,
                comment: "Absolutely love the new arrivals! Smooth ordering process and fast delivery.",
              },
              {
                name: "Arman R.",
                stars: 4,
                comment: "Affordable prices and great quality. The support team is very responsive.",
              },
              {
                name: "Niloy B.",
                stars: 5,
                comment: "Best place for fashion shopping! Will definitely return.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md text-sm space-y-2">
                <p className="font-semibold">{review.name}</p>
                <StarRating stars={review.stars} />
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-gray-700">
          <div>
            <h4 className="font-bold text-indigo-700 mb-2">📍 Address</h4>
            <p>123 Fashion Street</p>
            <p>Badda, Bashundhara</p>
            <p>Dhaka 1212, Bangladesh</p>
          </div>

          <div>
            <h4 className="font-bold text-indigo-700 mb-2">📞 Contact Info</h4>
            <p>Email: support@fashionbd.com</p>
            <p>Phone: +8801955295538</p>
            <p>Hours: 9am – 6pm (Mon–Sat)</p>
          </div>

          <div>
            <h4 className="font-bold text-indigo-700 mb-2">🗺️ Find Us</h4>
            <iframe
              title="Google Map"
              className="w-full h-40 rounded-lg border"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Dhaka,+Bangladesh&z=14&output=embed"
            ></iframe>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} FashionBD. @Sharmin Akter. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
