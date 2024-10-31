"use client";

import React from 'react'
import HeroSection from '../../components/Project1/HeroSection';
import Technologies from '@/components/Project1/Technologies';
import WebApp from '@/components/Project1/WebApp';
import MobileApp from '@/components/Project1/MobileApp';
import Footer from '@/components/Home/Footer';

const page = () => {
  return (
    <>
    <HeroSection/>
    <Technologies/>
    <WebApp/>
    <MobileApp/>
    <Footer/>
    </>
  )
}

export default page