'use client'
import React from 'react'
import Banner from "../../../components/about/banner"
import AboutBlock from '../../../components/about/aboutblock'
import Team from '../../../components/about/team'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    })
  }, [])
  
  return (
    <div>
        <Banner />
        <AboutBlock />
        <Team />
    </div>
  )
}

export default About