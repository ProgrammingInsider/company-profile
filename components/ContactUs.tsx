import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const ContactUs = () => {
  return <>
  <div className="sectionBg py-20">
      <h1 className='sectionName w-56 mx-auto'>Contact Information</h1>
      <h1 className='sectionHeader mb-16'>Reach Out</h1>
      <div className='flex flex-col sm:flex-row gap-10 min-h-screen w-11/12 mx-auto pb-10' id='contact'>
        <form className="background shadow-lg p-4 rounded-lg flex flex-col gap-5 py-14 w-full max-w-2xl">
          <div className="flex flex-col">
            <label 
            htmlFor="name" 
            className="para uppercase font-semibold text-sm mb-2">your name</label>
            <input 
            type="text" 
            id="name" 
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="email" 
            className="para uppercase font-semibold text-sm mb-2">your email</label>
            <input 
            type="email" 
            id="email" 
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="subject" 
            className="para uppercase font-semibold text-sm mb-2">subject</label>
            <input 
            type="text" 
            id="subject" 
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="name" 
            className="para uppercase font-semibold text-sm mb-2">your message</label>
            <textarea 
            rows={5} 
            id="name" 
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <button className="text-sm font-semibold nextSlide border uppercase border-gray-300 p-3 py-5 rounded-ss-lg rounded-ee-lg primaryBg text-white">submit</button>
        </form>
      <div className="max-w-96">
        <p className="para max-w-md">Send a message through given form, If your enquiry is time sensitive please use below contact details.</p>
        <div>
          <div className="flex items-center gap-5 border border-gray-200 p-4 my-5 rounded-lg mx-auto">
            <div className="w-16 h-16 primaryBg flex justify-center items-center rounded-full">
            <MdEmail className="text-xl text-white" />
            </div>
            <div>
              <h1 className="secondaryText text-xl mb-2">General Enquires</h1>
              <p className="para text-sm sm:text-base">Phone: +251-922112208/ +251-924434904 & Email: ratechnologies@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 border border-gray-200 p-4 my-5 rounded-lg mx-auto">
              <h1 className="secondaryText text-xl mb-2">Get us on</h1>
              <div className="flex justify-center items-center rounded-full gap-2">
                <Link href={"#"}><FaFacebook className="text-2xl primaryText" /></Link>
                <Link href={"#"}><FaTelegram className="text-2xl primaryText" /></Link>
                <Link href={"#"}><IoLogoWhatsapp className="text-2xl primaryText" /></Link>
              </div>
          </div>
        </div>
      </div>
      </div>
  </div>
  </>
}

export default ContactUs