import React from "react";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-8 px-4 md:px-16 lg:px-32 w-full overflow-hidden">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-10">
        {/* Logo + Description */}
        <div className="md:w-1/3 lg:w-2/5">
          <img src={Logo} alt="Logo" className="h-16 w-32 object-contain" />
          <p className="mt-4 leading-relaxed">
            Welcome to your trusted partner in finding the perfect place to call
            home. Whether you're buying, selling, or renting, we make the real
            estate process simple and stress-free.
          </p>
        </div>

        {/* Navigation */}
        <div className="md:w-1/5 ">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/About" className="hover:text-white transition">About</a></li>
            <li><a href="/Projects" className="hover:text-white transition">Rent</a></li>
            <li><a href="/Projects" className="hover:text-white transition">Selling</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:w-2/5 lg:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
          <p className="mb-4 max-w-sm">
            The latest news, articles, and resources, sent to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-10 mb-8 pt-6 text-center text-sm text-gray-500">
       Copyrigth © 2024 Wassim Trabelsi. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
