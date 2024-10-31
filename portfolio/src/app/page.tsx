"use client";

import React from 'react'
import HeroSection from '@/components/Home/HeroSection';
import AboutUsSection from '@/components/Home/AboutSection';
import PortfolioSection from '@/components/Home/PortfolioSection';
import Contact from '@/components/Home/ContactUsSection';
import Footer from '@/components/Home/Footer';

const page = () => {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <PortfolioSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default page