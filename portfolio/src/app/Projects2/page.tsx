"use client";

import React from 'react'
import HeroSection from '../../components/Project2/HeroSection';
import Technologies from '@/components/Project2/Technologies';
import WebApp from '@/components/Project2/WebApp';
import Footer from '@/components/Home/Footer';


const page = () => {
  return (
    <>
    <HeroSection/>
    <Technologies/>
    <WebApp/>
    <Footer/>
    </>
  )
}

export default page