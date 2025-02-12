import AboutUs from "@/components/AboutUs"
import Portfolio from "@/components/Portfolio"
import ContactUs from "@/components/ContactUs"
import Hero from "@/components/Hero"
import OurBusiness from "@/components/OurBusiness"
import OurServices from "@/components/OurServices"
import WhyUs from "@/components/WhyUs"

const Home = () => {
  return <>
    <Hero/>
    <AboutUs/>
    <OurServices/>
    <OurBusiness/>
    <Portfolio/>
    <WhyUs/>
    <ContactUs/>
  </>
}

export default Home