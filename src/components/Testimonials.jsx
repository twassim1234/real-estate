import React from 'react'
import pic1 from "../Assets/profile_img_1.png";
import pic2 from "../Assets/profile_img_2.png";
import pic3 from "../Assets/profile_img_3.png";
import star from "../Assets/star_icon.svg";
import {motion} from "framer-motion";


const Testimonials = () => {
    const testimonialsData = [
        {
            name: "Donald Jackman",
            title: "Marketing Manager",
            image: pic1,
            alt: "Portrait of Donald Jackman",
            rating: 5,
            text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        },
        {
            name: "Richard Nelson",
            title: "UI/UX Designer",
            image: pic2,
            alt: "Portrait of Richard Nelson",
            rating: 4,
            text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        },
        {
            name: "James Washington",
            title: "Co-Founder",
            image: pic3,
            alt: "Portrait of James Washington",
            rating: 5,
            text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        }
    ];
  return (
    <motion.div
    initial={{opacity:0, x:100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
     className='container mx-auto py-10 lg:px-32 w-full mb-20 overflow-hidden'
    id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'
      >Customer <span className='underline underline-offset-4 
      decoration-1 under font-light'>Testimonias</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'
      >Real Stories From Those Who Found Home With Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
          {testimonialsData.map((testimonial, index)=>(
            <div key={index} className='max-w-[340px] border shadow-lg 
            rounded px-8 py-12 text-center'>
                  <img className='w-20 h-20 rounded-full mx-auto mb-4' 
                  src={testimonial.image} alt='img'/>
                  <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                  <p className='text-sm text-gray-500 mb-4'>{testimonial.title}</p>
                  <div className='flex justify-center gap-1 text-red-500 mb-4'>
                    {Array.from({length: testimonial.rating}, (item,index)=>(
                      <img className='' key={index}  src={star} alt='star'/>
                    ))}
                  </div>
                  <p className='text-gray-600'>{testimonial.text}</p>
            </div>
          ))}
        </div>

    </motion.div>
  )
}

export default Testimonials
