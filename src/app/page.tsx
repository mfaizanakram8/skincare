import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'
import About from '@/components/About'
import OurServices from '@/components/OurServices'
import OurProducts from '@/components/OurProducts'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import Testimonials from '@/components/TestimonialsCards'
// import Blog from '@/components/Blog'
const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <OurServices/>
      <OurProducts/>
      <WhyChooseUs/>
      <Testimonials/>
      {/* <Blog/> */}
      <Footer/>
    </div>
  )
}

export default page
