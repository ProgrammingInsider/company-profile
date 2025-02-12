"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Portfolio = () => {
  const [index, setIndex] = useState(-1)
  return (
    <div className='w-full'>
      <div className='text-center w-11/12 mx-auto max-w-6xl py-20' id='work'>
          <h1 className='sectionName w-28 mx-auto'>Portfolio</h1>
          <h1 className='sectionHeader'>Our Works</h1>
          <div className='grid content-center grid-cols-1 gap-10 md:grid-cols-2 mt-8'>
           
              <div onMouseEnter={()=>setIndex(0)} onMouseLeave={()=>setIndex(-1)} className='h-96 lg:h-96 overflow-hidden rounded-md relative col-span-1 shadow-md m-auto'>
                <Image src={'/images/ecommerce.png'} className='object-cover' width={1080} height={1080} alt='Ecommerce'/>
                
                <div className={`absolute bottom-0 left-0 right-0 primaryBg opacity-80 flex flex-col  justify-center items-center gap-4 transition-all duration-500 ease-in-out ${(index === 0) ? "top-0 px-4 py-32" : "h-14" }`}>
                  <h1 className='text-white text-2xl'>E-commerce Platform</h1>
                {(index === 0) && <p className='m-auto text-sm text-white'>An all-in-one e-commerce solution designed for startups. It is a scalable and secure online store platform that delivers a seamless shopping experience. Key features include: Role-Based Authentication, Advanced Filtering, Real-Time Checkout, and more.</p>}

                {(index === 0) && <Link href={"https://primemarket.onrender.com/"} target='_blank' className={`w-32 text-base text-center font-medium border px-3 py-2 rounded-ss-lg rounded-ee-lg secondaryBg text-white`}>Visit</Link>}
                </div>
              </div>

              <div onMouseEnter={()=>setIndex(1)} onMouseLeave={()=>setIndex(-1)} className='h-96 overflow-hidden rounded-md relative col-span-1 shadow-md m-auto flex'>
                <Image src={'/images/blog.png'} className='object-cover' width={1080} height={1080} alt='Blog'/>
                
                <div className={`absolute bottom-0 left-0 right-0 primaryBg opacity-80 flex flex-col  justify-center items-center gap-4 transition-all duration-500 ease-in-out ${(index === 1) ? "top-0 px-4 py-32" : "h-14" }`}>
                  <h1 className='text-white text-2xl'>Blog Platform</h1>
                {(index === 1) && <p className='m-auto text-sm text-white'>A fast, dynamic platform for creating and managing blogs. Built for creators, it offers Easy Sign-Up, Tagging, Admin Control, Reader Interactions, and Speed Optimization.</p>}
                
                {(index === 1) && <Link href={"https://blogger-prod.vercel.app/"} target='_blank' className={`w-32 text-base text-center font-medium border px-3 py-2 rounded-ss-lg rounded-ee-lg secondaryBg text-white`}>Visit</Link>}
                </div>
              </div>

              <div onMouseEnter={()=>setIndex(2)} onMouseLeave={()=>setIndex(-1)} className='h-96 lg:h-96 overflow-hidden rounded-md relative col-span-1 shadow-md m-auto'>
                <Image src={'/images/StockManagementSystem.jpg'} className='object-cover' width={1080} height={1080} alt='Stock Management System.jpg'/>
                
                <div className={`absolute bottom-0 left-0 right-0 primaryBg opacity-80 flex flex-col  justify-center items-center gap-4 transition-all duration-500 ease-in-out ${(index === 2) ? "top-0 px-4 py-32" : "h-14" }`}>
                  <h1 className='text-white text-2xl'>Stock Management System</h1>
                {(index === 2) && <p className='m-auto text-sm text-white'>An advanced inventory management solution designed for businesses to efficiently track stock levels, manage supplier relations, and automate order processing. It minimizes losses, prevents stockouts, and enhances profitability by providing real-time inventory insights.</p>}
                </div>
              </div>

              <div onMouseEnter={()=>setIndex(3)} onMouseLeave={()=>setIndex(-1)} className='h-96 overflow-hidden rounded-md relative col-span-1 shadow-md m-auto flex'>
                <Image src={'/images/TruckManagementSystem.jpg'} className='object-cover' width={1080} height={1080} alt='Truck Management System'/>
                
                <div className={`absolute bottom-0 left-0 right-0 primaryBg opacity-80 flex flex-col  justify-center items-center gap-4 transition-all duration-500 ease-in-out ${(index === 3) ? "top-0 px-4 py-32" : "h-14" }`}>
                  <h1 className='text-white text-2xl'>Truck Management System</h1>
                {(index === 3) && <p className='m-auto text-sm text-white'>A comprehensive fleet management solution that helps trucking businesses optimize operations. It includes real-time vehicle tracking, trip and expense management, invoicing, driver compliance tracking, and maintenance scheduling. It boosts operational efficiency, reduces costs, and ensures compliance with industry standards.</p>}
                </div>
              </div>

              <div onMouseEnter={()=>setIndex(4)} onMouseLeave={()=>setIndex(-1)} className='h-96 overflow-hidden rounded-md relative col-span-1 shadow-md m-auto flex'>
                <Image src={'/images/schoolmanagementsystem.jpg'} className='object-cover' width={1080} height={1080} alt='Truck Management System'/>
                
                <div className={`absolute bottom-0 left-0 right-0 primaryBg opacity-80 flex flex-col  justify-center items-center gap-4 transition-all duration-500 ease-in-out ${(index === 4) ? "top-0 px-4 py-32" : "h-14" }`}>
                  <h1 className='text-white text-2xl'>School Management System</h1>
                {(index === 4) && <p className='m-auto text-sm text-white'>A web-based platform designed to streamline school operations, including student enrollment, attendance tracking, grade management, fee collection, and communication between teachers, students, and parents. It enhances efficiency, reduces paperwork, and improves the overall learning experience.</p>}
                </div>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Portfolio