import React from "react";
import img from "../assets/brand.png";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
const About = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mt-40 mb-28
    mx-auto sm:p-4 lg:px-32  w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span
          className="underline underline-offset-4 decoration-1 under
         font-light"
        >
          {" "}
          Our Brand
        </span>{" "}
      </h1>

      <p
        className="text-gray-500 max-w-80 text-center 
      mb-8"
      >
        Passionate About Properties, Dedicated to Your Vision{" "}
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-14">
        <img src={img} alt="brand-Image" className="w-full sm:w-1/2 max-w-lg" />

        <div className="flex flex-col  items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Project Competed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. ft deliverd</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 md:min-w-80 max-w-lg">
            {" "}
            Welcome to your trusted partner in finding the perfect place to call
            home. Whether you're buying, selling, or renting, we make the real
            estate process simple and stress-free. With a deep understanding of
            the market and a passion for helping people, our team is committed
            to delivering personalized service and expert guidance every step of
            the way. Discover properties that fit your lifestyle and let us help
            you turn your real estate goals into reality.
          </p>
        </div>
      </div>

    </motion.div>
    <Testimonials/>
   </div> 
  );
};

export default About;
