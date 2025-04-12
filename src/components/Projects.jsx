import React, { useEffect, useState } from 'react'
import left from "../Assets/left_arrow.svg";
import right from "../Assets/right_arrow.svg"; // also fixed the typo "rigth" ➝ "right"
import Logo from "../Assets/Logo.png";
import pic1 from "../Assets/project_img_1.jpg";
import pic2 from "../Assets/project_img_2.jpg";
import {motion} from "framer-motion";

const Projects = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const [cardsToShow, setCardsToShow] = useState(1);

useEffect(()=>{
  const updateCardsToShow = () => {
    if(window.innerWidth >= 1024){
      setCardsToShow(projectsData.length);
    }else{
      setCardsToShow(1);
    }
  };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);

},[])

const nextProject=()=>{
  setCurrentIndex((prevIndex) => (prevIndex+1) % projectsData.length) ;
}

const prevProject=()=>{
  setCurrentIndex((prevIndex) => prevIndex ===0  ? projectsData.length-1 : prevIndex-1);
}

  const projectsData = [
    {
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },
    {
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: pic1, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: pic2, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: pic1, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: Logo, // fixed variable name
    },{
      title: "Skyline Haven",
      price: "$250,000", // optionally fixed comma
      location: "California",
      image: pic2, // fixed variable name
    },
  ];

  return (
    <motion.div
      initial={{opacity:0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}}
    
    className='container mx-auto py-4 pt-2 px-6 md:px-20 lg:px-32 my-20 mt-40 mb-20 w-full overflow-hidden' id='Projects'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects 
        <span className='underline underline-offset-4 decoration-1 font-light'> Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Where Prestige Finds a Place.
      </p>

      {/*-----buttons------*/}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='previous project'>
          <img src={left} alt='previous' />
        </button>
        <button onClick={nextProject}
        className='p-3 bg-gray-200 rounded mr-2' aria-label='next project'>
          <img src={right} alt='next' /> {/* fixed the image src variable name */}
        </button>
      </div>

      {/*-----------project slider container-----------*/}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 
        ease-in-out' style={{transform: `translateX(-${(currentIndex*100)/ cardsToShow}%)`}}>
          {projectsData.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title}  className=' w-full
              h-auto mb-14'/>
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {project.title}</h2>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span className='px-1'>|</span> {project.location}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Projects;
