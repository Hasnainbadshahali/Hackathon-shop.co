import React from "react";

export default function selling () {
  return (
    <div className="border-b mx-auto flex flex-col w-[1440px]">
      {/* New Arrivals Section */}
      <section className="p-6 bg-white m-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Product Card */}
          {[
            {
              title: "T-shirt with Tape Details",
              price: "$120",
              rating: "4.5/5",
              image: "../Frame 32.png",
            },
            {
              title: "Skinny Fit Jeans",
              price: "$240",
              discount: "$260",
              rating: "3.5/5",
              image: "../Frame 33.png",
            },
            {
              title: "Checkered Shirt",
              price: "$180",
              rating: "4.5/5",
              image: "../Frame 34.png",
            },
            {
              title: "Sleeve Striped T-shirt",
              price: "$130",
              discount: "$160",
              rating: "4.5/5",
              image: "../Frame 38.png",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="font-bold text-sm">{product.title}</h3>
              <span className="text-gray-600 text-sm">⭐ {product.rating}</span>
              <div className="mt-2">
                {product.discount && (
                  <span className="text-gray-500 line-through mr-2">
                    {product.discount}
                  </span>
                )}
                <span className="font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
          View All
        </button>
      </section>

      {/* Top Selling Section */}
      <section className="p-6 bg-white m-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Top Selling</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add your top selling products here */}
          {[
            {
              title: "Vertical Striped Shirt",
              price: "$212",
              discount: "$232",
              rating: "5.0/5",
              image: "../Frame 60.png",
            },
            {
              title: "Courage Graphic T-shirt",
              price: "$145",
              rating: "4.0/5",
              image: "../Frame 61.png",
            },
            {
              title: "Loose Fit Bermuda Shorts",
              price: "$80",
              rating: "3.0/5",
              image: "../Frame 34 (1).png",
            },
            {
              title: "Faded Skinny Jeans",
              price: "$210",
              rating: "4.5/5",
              image: "../Frame 38 (1).png",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="font-bold text-sm">{product.title}</h3>
              <span className="text-gray-600 text-sm">⭐ {product.rating}</span>
              <div className="mt-2">
                {product.discount && (
                  <span className="text-gray-500 line-through mr-2">
                    {product.discount}
                  </span>
                )}
                <span className="font-bold">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
          View All
        </button>
      </section>

      {/* Browse by Dress Style */}

      <div></div>
      <div className="bg-gray-100">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-center text-2xl font-bold mb-6">
            Browse by Dress Style
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {/* casual */}
            <div className="relative flex items-center justify-center h-40 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <img
                src="../Frame 61 (1).png"
                alt="Casual"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
              <span className="relative text-white text-lg font-semibold">
                Casual
              </span>
            </div>
            {/* formal */}
            <div className="relative flex items-center justify-center h-40 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <img
                src="../Frame 62.png"
                alt="Formal"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
              <span className="relative text-white text-lg font-semibold">
                Formal
              </span>
            </div>
            {/* party */}
            <div className="relative flex items-center justify-center h-40 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <img
                src="../Frame 64.png"
                alt="Party"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
              <span className="relative text-white text-lg font-semibold">
                Party
              </span>
            </div>
            {/* GYM */}
            <div className="relative flex items-center justify-center h-40 rounded-lg overflow-hidden shadow-md group cursor-pointer">
              <img
                src="../Frame 63.png"
                alt="Gym"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity"></div>
              <span className="relative text-white text-lg font-semibold">
                Gym
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-2xl font-bold mb-6">
          Our Happy Customers
        </h2>
      </div>
      <footer className="bg-gray-100">
      {/* Subscription Section */}
      <div className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Stay Up to Date About Our Latest Offers</h2>
          <form className="flex flex-col sm:flex-row items-center">
            <div className="relative w-full sm:w-auto flex-grow mb-4 sm:mb-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
              />
              <span className="absolute top-3 left-4 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l-4 4m4-4l-4-4m12 4h8"
                  />
                </svg>
              </span>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Shop.co Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Shop.co</h3>
          <p className="text-gray-500 mb-4">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-gray-400 hover:text-black transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-4.602 18h-2.397v-5.994h-2v-2.502h2v-1.688c0-1.402.579-3.56 3.56-3.56h2.44v2.502h-2c-.598 0-1 .402-1 1v1.746h2.496l-.328 2.502h-2.168v5.994zm-6.398-6h-2v-2h2v2zm0-3h-2v-6h2v6z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-black transition">
              {/* Add more icons as needed */}
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-black transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Help</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-black transition">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-black transition">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                Development Tutorial
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                How-to Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black transition">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
};
