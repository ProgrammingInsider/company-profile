import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[50vh] md:h-screen">
      <Image 
        src="/images/hero-1.jpg" 
        alt="Hero Image" 
        fill 
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
};

export default Hero;
