'use client'
import Image from 'next/image'
import Banner from '../../components/home/banner'
import Services from '../../components/home/services'
import About from '../../components/home/about'
import FanFact from '../../components/home/fanfact'
import Video from '../../components/home/video'
import Portfolio from '../../components/home/portfolio'
import Action from '../../components/home/action'
import Testimonials from '../../components/home/testimonials'
import Team from '../../components/home/team'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  return (
    <div data-spy="scroll" data-offset="170" data-target=".navigation-area">
    <div className="page-wrapper">
      <Banner/>
      <Services/>
      <About/>
      <FanFact/>
      {/* <Video/> */}
      <Portfolio/>
      <Action/>
      <Testimonials/>
      <Team/>
    </div>
    </div>
    
  )
}
