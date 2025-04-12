import React, { useEffect, useState } from 'react'
import left from "../Assets/left_arrow.svg";
import right from "../Assets/right_arrow.svg"; // also fixed the typo "rigth" ➝ "right"
import Logo from "../Assets/Logo.png";
import pic1 from "../Assets/project_img_1.jpg";
import pic2 from "../Assets/project_img_2.jpg";
import {motion} from "framer-motion";
import ListSection from './ListSection';
const Rent = () => {
  return (
    <motion.div
      initial={{opacity:0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
    
    className='container mx-auto py-4 pt-2 px-6 md:px-20 lg:px-32 my-20 mt-40 mb-20 w-full overflow-hidden' id='Projects'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Houses 
        <span className='underline underline-offset-4 decoration-1 font-light'> For rent</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Where Prestige Finds a Place.
      </p>
      <ListSection/>
    </motion.div>
  );
};

export default Rent;
