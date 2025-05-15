import React from "react";
import { useNavigate } from "react-router-dom";

const featuredItems = [
  {
    id: 1,
    name: "Kids Sneakers",
    price: "$29.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHuXyTpa5O9bUke6ALBiil0qQL2SZMWX59pw&s",
  },
  {
    id: 2,
    name: "Colorful Backpack",
    price: "$19.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFG0NtmgKG7uhPbV4HBFWGkdFMbMGKInbScw&s",
  },
  {
    id: 3,
    name: "Cartoon T-Shirt",
    price: "$14.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvg2cGVPv4Qj9LwQPiCAj-6X_eJiMHtUMSvg&s",
  },
  {
    id: 4,
    name: "Mini Sunglasses",
    price: "$9.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yV9F5CPpKNDAHivIynOpXMknLAo7czh7dQ&s",
  },
];

const exclusiveItems = [
  {
    id: 5,
    name: "Learning Tablet",
    price: "$49.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXZcIKXiT4TIrADLHe24qDRhYPmTvyKcI9g&s",
  },
  {
    id: 6,
    name: "Cozy Hoodie",
    price: "$24.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgqURJeQ6uQoj4cIOUIiIvGzP8UVzmeKIlA&s",
  },
  {
    id: 7,
    name: "Toy Drone",
    price: "$39.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQhmCAs_EM3qjYt3R9IGiTU0PL3cKBVXVlw&s",
  },
  {
    id: 8,
    name: "Color Block Jacket",
    price: "$34.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmRUfQIEJog7voI58db4lEHmQgebIBff2vA&s",
  },
];

const offerItems = [
  {
    id: 9,
    name: "Cartoon Socks (3 pack)",
    price: "$5.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX1NLuPtJkeEarAyoe-tqFY6oIId5LIkC-Q&s",
  },
  {
    id: 10,
    name: "Play Tent",
    price: "$39.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlF3n-70vPRtqXcUb6rbxDC7SgYEIs0InCkA&s",
  },
  {
    id: 11,
    name: "Printed Cap",
    price: "$8.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnp6XkoAuAXL9HE7nUsX1OEt-xBOPLjLGYHA&s",
  },
  {
    id: 12,
    name: "Soft Pajama Set",
    price: "$18.99",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHLE0I7o9snARU7hhhVU9lXwPFejXmgTxeA&s",
  },
];

const testimonials = [
  {
    name: "Ayesha M.",
    stars: 5,
    comment: "Amazing quality clothes for kids! The fit and designs are perfect.",
  },
  {
    name: "Rumi H.",
    stars: 4,
    comment: "My children love the cartoon prints. Great pricing too!",
  },
  {
    name: "Tanvir K.",
    stars: 5,
    comment: "Very comfortable and durable. Perfect for school and play!",
  },
];

const StarRating = ({ stars }) => (
  <div className="text-yellow-500">
    {"★".repeat(stars)}
    {"☆".repeat(5 - stars)}
  </div>
);

const Kids = () => {
  const navigate = useNavigate();

  const renderSection = (title, items) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
            onClick={() => navigate(`/kids/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-center">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-10 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Kids' Collection</h1>
        <p className="text-gray-700 text-lg">
          Brighten your child's day with our fun and fashionable kidswear — comfortable, playful,
          and made to last!
        </p>
      </div>

      {renderSection("👟 Featured Kids' Items", featuredItems)}
      {renderSection("🎒 Exclusive Kids' Collection", exclusiveItems)}
      {renderSection("🎉 Special Offers for Kids", offerItems)}

      <div className="mt-20 bg-white py-10 rounded-2xl shadow-md max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">💬 What Parents Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-xl shadow text-sm space-y-2">
              <p className="font-semibold">{review.name}</p>
              <StarRating stars={review.stars} />
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kids;
