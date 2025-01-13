// import React from 'react'

// const Services = [
//     {
//         id: "1",
//         title:"Web Design",
//         description:"We analyze your business to design a website which increases conversion rates and produces positive results."
//     },
//     {
//         id: "2",
//         title:"Web Development",
//         description:"Our custom web apps decrease downtime and increase efficiency, and there is no need for users to install them on their hard drives."
//     },
//     {
//         id: "3",
//         title:"Mobile Apps",
//         description:"Our custom mobile apps work equally well across different screen sizes and devices, so you may tap into a larger audience base."
//     },
//     {
//         id: "4",
//         title:"Branding ",
//         description:"We use different branding strategies to help our clients build credibility and customer loyalty, while giving them a competitive edge."
//     },
//     {
//         id: "5",
//         title:"Digital Marketing",
//         description:"Our digital marketing strategy aims for one thing: results. We use an Omni-channel approach to drive repeat traffic and increase customer loyalty."
//     },
//     {
//         id: "6",
//         title:"Consultancy",
//         description:"We deliver custom tech roadmaps, build efficient IT teams, and create data security & compliance strategies to ensure seamless and secure digital transformation."
//     },
// ]

// const OurServices = () => {
//   return (
//     <div className='w-full min-h-screen py-28' id='service'>
//         <h1 className='sectionName w-36 mx-auto'>Our Services</h1>
//         <h1 className='sectionHeader'>What We offers?</h1>

//         <div className='w-11/12 max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
//         {
//             Services.map((service)=>{
//                 return (
//                     <div key={service.id} className='primaryBg text-center flex flex-col items-center justify-center text-white max-w-lg px-5 py-10 rounded-md mx-auto sm:col-span-1'>
//                         <div className='bg-white primaryText w-16 h-16 rounded-full flex justify-center items-center mb-8'><span className='text-5xl font-bold p-5'>{service.id}</span></div>
//                         <h1 className='mb-3 font-bold'>{service.title}</h1>
//                         <p>{service.description}</p>
//                     </div>
//                 )
//             })
//         }
        
//         </div>
//     </div>
//   )
// }

// export default OurServices


"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";

const Services = [
  {
    id: "1",
    title: "Web Design",
    description:
      "We analyze your business to design a website which increases conversion rates and produces positive results.",
  },
  {
    id: "2",
    title: "Web Development",
    description:
      "Our custom web apps decrease downtime and increase efficiency, and there is no need for users to install them on their hard drives.",
  },
  {
    id: "3",
    title: "Mobile Apps",
    description:
      "Our custom mobile apps work equally well across different screen sizes and devices, so you may tap into a larger audience base.",
  },
  {
    id: "4",
    title: "Branding",
    description:
      "We use different branding strategies to help our clients build credibility and customer loyalty, while giving them a competitive edge.",
  },
  {
    id: "5",
    title: "Digital Marketing",
    description:
      "Our digital marketing strategy aims for one thing: results. We use an Omni-channel approach to drive repeat traffic and increase customer loyalty.",
  },
  {
    id: "6",
    title: "Consultancy",
    description:
      "We deliver custom tech roadmaps, build efficient IT teams, and create data security & compliance strategies to ensure seamless and secure digital transformation.",
  },
];

const OurServices = () => {
  return (
    <div className="w-full min-h-screen py-20" id="service">
      <h1 className="sectionName w-36 mx-auto">Our Services</h1>
      <h1 className="sectionHeader">What We Offer?</h1>

      {/* Navigation Buttons */}
      <div className="my-10 flex gap-3 justify-center">
        <button className="prevSlide border border-gray-300 p-3 rounded-ss-lg rounded-ee-lg para hover:primaryBg hover:text-white">
          <IoIosArrowForward className="rotate-180 text-xl" />
        </button>
        <button className="nextSlide border border-gray-300 p-3 rounded-se-lg rounded-es-lg para hover:primaryBg hover:text-white">
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>

      {/* Swiper for Responsive Carousel */}
      <div className="w-11/12 max-w-6xl mx-auto mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: ".prevSlide",
            nextEl: ".nextSlide",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="cursor-pointer flex"
        >
          {Services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="primaryBg text-center flex flex-col items-center justify-center text-white max-w-lg px-5 py-10 rounded-md mx-auto h-80">
                <div className="bg-white primaryText w-16 h-16 rounded-full flex justify-center items-center mb-8">
                  <span className="text-5xl font-bold p-5">{service.id}</span>
                </div>
                <h1 className="mb-3 font-bold">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
