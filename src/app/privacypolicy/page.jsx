'use client'
import React from 'react'
import Banner from '../../../components/privacypolicy/banner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Policy from '../../../components/privacypolicy/policy';
const privacypolicy = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
            });
    }, [])
  return (
    <div>
        <Banner/>
        <Policy/>
    </div>
  )
}

export default privacypolicy