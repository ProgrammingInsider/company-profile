'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const heroContent = [
  {
    image: "/images/company-hero-1.jpg",
    heading: "Our Companies",
    para: "At [Your Company Name], we specialize in crafting custom digital solutions that solve real business challenges for businesses, industries, and government agencies.",
    href: "#about",
    linkText: "About Us",
  },
  {
    image: "/images/company-hero-2.jpg",
    heading: "Why Choose Us",
    para: "With our problem-first approach, scalable solutions, and local expertise, we ensure your success in a competitive digital world.",
    href: "#whyus",
    linkText: "Why Us",
  },
  {
    image: "/images/company-hero-3.jpg",
    heading: "Get in Touch",
    para: "Ready to transform your business? Contact us today and let's build innovative solutions tailored to your needs.",
    href: "#contact",
    linkText: "Contact Us",
  },
];

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      loop
      className="hero-slider"
    >
      {heroContent.map((content, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full min-h-[50vh] md:h-screen flex flex-col items-center justify-center">
            <Image
              src={content.image}
              alt={`Hero Slide ${index + 1}`}
              fill
              className="w-full h-full object-cover"
              priority
            />
            {/* Overlay Background */}
            <div
              className="absolute inset-0 bg-[#282f3b] z-10"
              style={{
                opacity: 0.6,
              }}
            ></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20">
              <div className="w-4/5 lg:w-3/5 flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.heading}</h1>
                <p className="text-base sm:text-lg mb-6 text-start">{content.para}</p>
                <Link
                  href={content.href}
                  className="mx-auto w-40 text-base text-center font-medium px-5 py-3 rounded-ss-lg rounded-ee-lg primaryBg text-white border-0"
                >
                  {content.linkText}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
