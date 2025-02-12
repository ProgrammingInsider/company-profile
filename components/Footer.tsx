import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footerText secondaryBg'>
      <div className='flex flex-col justify-between gap-20 py-32 md:flex-row w-11/12 mx-auto'>
        <div className='w-11/12 max-w-xl'>
          <h1 className='footerHeading text-2xl mb-6'>Company Overview</h1>
          <p className='text-sm sm:text-base leading-[24px] md:leading-[26px]'>
          At RA technologies, we take a problem-first approach to digital transformation. Our expertise spans full-stack web development, mobile app development, enterprise software, AI-driven solutions, branding, digital marketing, and research and consultation. We specialize in crafting custom digital solutions that solve real business challenges, ensuring that businesses, industries, and government agencies can operate efficiently, scale rapidly, and thrive in the digital age.
          </p>
        </div>

        <div className='w-11/12 md:w-96'>
          <h1 className='footerHeading text-2xl mb-6'>Our Services</h1>

          <div className='flex flex-col gap-2 text-lg md:text-base'>
            <Link href={"#"}>Web Design</Link>
            <Link href={"#"}>Web Development</Link>
            <Link href={"#"}>Mobile Apps</Link>
            <Link href={"#"}>Branding</Link>
            <Link href={"#"}>Digital Marketing</Link>
            <Link href={"#"}>Consultancy</Link>
          </div>

        </div>
        <div >
          <h1 className='footerHeading text-2xl mb-6'>Get In Touch</h1>
          <p className='mb-3'><b className='text-white'>Phone: </b>+251922112208 / +251924434904</p>
          <p><b className='text-white'>Mail Us: </b>ratechnologies@gmail.com
          </p>
        </div>
      </div>
      <div className='bottomFooterBg h-20 text-white flex justify-center items-center'>
      © 2025 RA Technologies. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer