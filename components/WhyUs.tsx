// import React from 'react'
// import { IoIosArrowForward } from "react-icons/io";

// const Cornerstones = [
//     {
//         id:"1",
//         title:"Problem-First Approach ",
//         description:"We focus on understanding your challenges, then develop the most effective, customized solutions to address them."
//     },
//     {
//         id:"2",
//         title:"Comprehensive Services",
//         description:"Our expertise spans across web design, development, mobile apps, branding, digital marketing, and consultation, ensuring a seamless, all-in-one digital transformation."
//     },
//     {
//         id:"3",
//         title:"Scalable & Flexible Solutions",
//         description:"Whether you're a startup, small business, or government entity, our solutions are built to grow with you."
//     },
//     {
//         id:"4",
//         title:"Local Expertise with Global Standards ",
//         description:"We understand the local market, regulations, and societal needs, while using global best practices and cutting-edge technologies."
//     },
//     {
//         id:"5",
//         title:"Agile Development & Fast MVP Delivery ",
//         description:"Start your journey with a functional prototype, and we'll continuously improve it as we move forward, ensuring quick results without compromising on quality."
//     },
//     {
//         id:"6",
//         title:"Collaboration & Transparency ",
//         description:"We work closely with you throughout the process, ensuring open communication, accountability, and shared success."
//     },
//     {
//         id:"7",
//         title:"Long-Term Partnership",
//         description:"Our solutions are designed for long-term growth, ensuring that as your business evolves, your digital infrastructure grows with it."
//     },
// ]

// const WhyUs = () => {
//   return (
//     <div id='whyus' className='py-28'>
//          <h1 className='sectionName w-48 mx-auto'>Why Choose Us?</h1>
//         <h1 className='sectionHeader'>Cornerstones of Our Business</h1>
//         <div className='my-10'>
//             <div className='flex  gap-3 justify-center'>
//                 <button className='border border-gray-300 p-3 rounded-ss-lg rounded-ee-lg para hover:primaryBg hover:text-white transform transition-transform duration-1000'>
//                     <IoIosArrowForward className='rotate-180 text-xl' />
//                 </button>
//                 <button className='border border-gray-300 p-3 rounded-se-lg rounded-es-lg para hover:primaryBg hover:text-white transform transition-transform duration-500'>
//                     <IoIosArrowForward className='text-xl' />
//                 </button>
//             </div>
//         </div>
//         <div className='flex flex-col gap-10'>
//             {
//                 Cornerstones.map((corner)=>{
//                     return (
//                         <div key={corner.id} className='max-w-72 mx-auto p-8 border-l border-b-4 border-gray-300 whyusCard'>
//                             <h1 className='heading text-2xl font-bold leading-[30px] mb-3'>{corner.title}</h1>
//                             <p className='para text-base'>{corner.description}</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>

//     </div>
//   )
// }

// export default WhyUs

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const Cornerstones = [
  { id: "1", title: "Problem-First Approach", description: "We focus on understanding your challenges, then develop the most effective, customized solutions to address them." },
  { id: "2", title: "Comprehensive Services", description: "Our expertise spans across web design, development, mobile apps, branding, digital marketing, and consultation, ensuring a seamless, all-in-one digital transformation." },
  { id: "3", title: "Scalable & Flexible Solutions", description: "Whether you're a startup, small business, or government entity, our solutions are built to grow with you." },
  { id: "4", title: "Local Expertise with Global Standards", description: "We understand the local market, regulations, and societal needs, while using global best practices and cutting-edge technologies." },
  { id: "5", title: "Agile Development & Fast MVP Delivery", description: "Start your journey with a functional prototype, and we'll continuously improve it as we move forward, ensuring quick results without compromising on quality." },
  { id: "6", title: "Collaboration & Transparency", description: "We work closely with you throughout the process, ensuring open communication, accountability, and shared success." },
  { id: "7", title: "Long-Term Partnership", description: "Our solutions are designed for long-term growth, ensuring that as your business evolves, your digital infrastructure grows with it." },
];

const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="whyus" className="text-center py-28 mx-auto">
      <h1 className="sectionName w-48 mx-auto">Why Choose Us?</h1>
      <h1 className="sectionHeader">Cornerstones of Our Business</h1>

      {/* Navigation Buttons */}
      <div className="my-10 flex gap-3 justify-center">
        <button className="prevSlide border border-gray-300 p-3 rounded-ss-lg rounded-ee-lg para hover:primaryBg hover:text-white">
          <IoIosArrowForward className="rotate-180 text-xl" />
        </button>
        <button className="nextSlide border border-gray-300 p-3 rounded-se-lg rounded-es-lg para hover:primaryBg hover:text-white">
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>

      {/* Swiper Container */}
      <div className="relative w-full mx-auto">
        <Swiper
          modules={[Navigation]}
        //   spaceBetween={30}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: ".prevSlide",
            nextEl: ".nextSlide",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 4 }, 
            1280: { slidesPerView: 4.5 }, 
            1536: { slidesPerView: 5.5 }, 
          }}
          className="relative cursor-pointer md:w-[97%]"
        >
          {Cornerstones.map((corner, index) => (
            <SwiperSlide key={corner.id}>
              <div
                className={`relative text-left w-4/5 md:w-full mx-auto p-8 pb-16 md:pb-16 pt-0 border-l border-b-4 h-auto border-gray-100 whyusCard mt-5 transition-all duration-300 mb-16 col-span-1 ${
                  index % 2 !== 0 ? "sm:h-auto" : "sm:h-auto"
                }`}
              >
                <h1 className="heading text-2xl font-semibold leading-[30px] mb-3 hover:primaryText">{corner.title}</h1>
                <p className="para sm:text-base">{corner.description}</p>
                <div className={`absolute -left-8 -bottom-8 flex justify-center items-center p-8 w-20 h-20 rounded-full text-xl font-bold shadow-md z-40 ${index === activeIndex ? "primaryBg text-white" : "background secondaryText"}`}>2025</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhyUs;


