'use client'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const error = () => {
    useEffect(() => {
        AOS.init({
            duration : 1000
        })
    }, [])
  return (
<div className="frontpage-banner-section frontpage-banner-style-three page-inner-block pd-b-200">
            <div className="element-group">
                <div className="element one"></div>
                <div className="element two"></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="frontpage-banner-content">
                            <h2 className="hero-title w-800 aos-item" data-aos="fade-left" data-aos-duration="400" data-aos-once="true">404 Page Not Found</h2>
                            <div className="hero-desc aos-item" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet dolor tincidunt nunc nunc egestas.</p>
                            </div>
                            <div className="form-group-btn aos-item" data-aos="fade-left" data-aos-duration="600" data-aos-once="true">
                                <a className="btn btn-primary rounded-pill" href="/">Back to Home</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <img className="radius-4 aos-item box-shadow-high" data-aos="fade-right" data-aos-duration="700" data-aos-once="true" src="/images/bg/404-2.jpg" alt="Thumb"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-6">
                                <img className="radius-4 aos-item box-shadow-high" data-aos="fade-left" data-aos-duration="800" data-aos-once="true" src="/images/bg/404-1.jpg" alt="Thumb"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
          )
}

export default error