'use client'
import React from 'react'
import Banner from '../../../components/terms/banner';
import Terms from '../../../components/terms/terms';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const termsandconditions = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
            });
    }, [])
  return (
    <div>
        <Banner/>
        <Terms/>
    </div>
  )
}

export default termsandconditions