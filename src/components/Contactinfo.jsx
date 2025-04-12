import React from "react";

const Contactinfo = () => {
  return (
    <div className="bg-white p-8 rounded-lg mt-20 mb-40 shadow-lg max-w-lg mx-auto">
      <div className="space-y-4">
        {/* Email */}
        <div>
          <h3 className="text-xl font-medium text-gray-800">Email</h3>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>

        {/* Phone Numbers */}
        <div>
          <h3 className="text-xl font-medium text-gray-800">Phone Numbers</h3>
          <p className="text-gray-600">+1 234 567 8901</p>
          <p className="text-gray-600">+1 234 567 8902</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-medium text-gray-800">Address</h3>
          <p className="text-gray-600">
            1234 Main Street, Springfield, IL 62701
          </p>
        </div>

        {/* Location */}
        <div className="rounded-lg overflow-hidden mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31284.037345059054!2d10.3076825!3d36.8581614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13029ef1e8cc6f29%3A0xf4343a66c2e4d347!2sCarthage%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1682368999264!5m2!1sen!2stn"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
