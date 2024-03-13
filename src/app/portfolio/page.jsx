'use client'
import React from 'react'
import Banner from '../../../components/portfolio/banner'
import Portfolioblock from '../../../components/portfolio/portfolioblock'
import CallToAction from '../../../components/portfolio/calltoaction'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    })
  }, [])
  
  return (
    <div>
        <Banner />
        <Portfolioblock />
        <CallToAction />
    </div>
  )
}

export default Portfolio