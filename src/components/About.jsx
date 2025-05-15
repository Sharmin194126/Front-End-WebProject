import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">About FashionBD</h1>
      <p className="text-center text-gray-700 max-w-2xl text-lg leading-relaxed">
        Welcome to <strong>FashionBD</strong> — your one-stop destination for the latest trends
        in men's, women's, and kids' fashion. <br /><br />
        We are passionate about combining style and affordability to bring you clothing that not
        only looks good but feels great. From exclusive collections to everyday essentials,
        FashionBD curates each piece with quality and comfort in mind. <br /><br />
        Thank you for being part of our journey. We’re committed to serving you with the best
        fashion, service, and experience.
      </p>
    </div>
  );
};

export default About;
