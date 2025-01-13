import Image from 'next/image'
import React from 'react'
import { LuTarget } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const OurBusiness = () => {
  return (
    <div className='sectionBg min-h-screen py-20 px-1 w-full mx-auto'>
        <h1 className='sectionName w-40 mx-auto'>Our Business</h1>
        <h1 className='sectionHeader text-center'>Stand Out From The Rest</h1>
        <div className='grid gap-8 md:grid-cols-3 md:gap-2 mx-auto max-w-6xl mt-10'>
            <div className='col-span-1 w-11/12 mx-auto flex flex-col gap-8'>
                <div className='w-full h-64 md:h-auto overflow-hidden rounded-xl'>
                    <Image src={"/images/mission.jpg"} alt='mission' width={200} height={200} className='object-cover w-full' />
                </div>
                <div className='flex flex-col justify-center items-center background text-center p-7 h-72 md:h-auto rounded-xl'>
                    <LuTarget className='primaryText text-7xl mb-6' />
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Mission</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>Empowering businesses and governments with smart, efficient, and tailored digital solutions that solve real-world problems and drive growth.</p>
                </div>
            </div>

            <div className='col-span-1 flex flex-col justify-center items-center background text-center p-7 min-h-96 md:h-auto rounded-xl w-11/12 mx-auto'>
                    <IoDiamondOutline  className='primaryText text-7xl mb-6' />
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Core Values</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>At [Your Company Name], our values are the foundation of everything we do, guiding our actions and decisions to achieve excellence and drive success.</p>
                    <ul typeof='circle' className='para text-left w-full text-base flex flex-col gap-2 mt-6'>
                        <li>Excellence </li>
                        <li>Innovation </li>
                        <li>Integrity </li>
                        <li>Sustainability </li>
                        <li>Accountability </li>
                        <li>Customer-Centric </li>
                        <li>Collaboration </li>
                    </ul>
                    
            </div>

            <div className='col-span-1 w-11/12 mx-auto flex flex-col gap-8'>
                <div className='flex flex-col justify-center items-center background text-center p-7 h-72 md:h-auto rounded-xl'>
                    <MdOutlineRemoveRedEye  className='primaryText text-7xl mb-6' />
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Vision</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>To become Ethiopia’s leading digital transformation partner, enabling businesses, industries, and governments to operate efficiently, scale rapidly, and compete globally through innovative technology solutions.</p>
                </div>
                <div className='w-full h-64 md:h-auto overflow-hidden rounded-xl'>
                    <Image src={"/images/hero-1.jpg"} alt='mission' width={200} height={200} className='object-fill w-full' />
                </div>
            </div>
        </div>
    </div>
)
}

export default OurBusiness