'use client'
import React from 'react'
import Banner from '../../../components/contact/banner'
import Form from '../../../components/contact/form'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        })
    }, [])       
  return (
    <div>
        <Banner />
        <Form />
    </div>
  )
}

export default Contact