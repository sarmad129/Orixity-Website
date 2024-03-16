'use client'
import React,{useState, useEffect} from 'react'

let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(async () => {
    const mod = await import("react-odometerjs");
    loaded = true;
    if (loadedCallback != null) {
        loadedCallback();
    }
    return mod;
}, {
    ssr: false,
    loading: () => 0
});

import "odometer/themes/odometer-theme-default.css";
import dynamic from 'next/dynamic';

const aboutblock = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    const [first , setFirst] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400 && first) {
                setFirst(false)
                setState1(4000)
                setState2(100)
            } 
        })
    }, [])
  return (
<div className="about-block ptb-130">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-6">
                                <img className="radius-4 aos-item" data-aos="fade-left" data-aos-duration="700" data-aos-once="true" src="/images/about/about-1.jpg" alt="About-img"/>
                            </div>
                            <div className="col-lg-5 col-6">
                                <img className="radius-4 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-once="true" src="/images/about/about-2.jpg" alt="About-img-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-6">
                        <div className="our-content-area mrt-30">
                            <div className="section-title mrb-25">
                                <h4 className="sub-title color-primary pd-0 aos-item" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">Who We Are</h4>
                                <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Experience True Business.</h2>
                                <div className="title-text aos-item" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
                                    Publication expand still ever records ago, it rationally it that to we've the wasn't the ability range of are way only because then been in was over searched promptness or a of be up from based term the carried.
                                </div>
                                <div className="title-text aos-item mrt-30" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="form-group-btn aos-item mrt-30" data-aos="fade-up" data-aos-duration="1300" data-aos-once="true">
                                </div>
                            </div>
                        </div>

                        <div className="row fanfact-promo-numbers mrt-50">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="promo-number style-two">
                                    <div className="promo-number-inner">
                                        <div className="info">
                                            <div className="odometer-wrap">
                                                <Odometer format="(,ddd).dd" 
                                                duration={1000} 
                                                value={state1} />
                                            </div>
                                            <h4 className="promo-title w-600 color-primary">Completed Projects</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="promo-number style-two">
                                    <div className="promo-number-inner">
                                        <div className="info">
                                            <div className="odometer-wrap">
                                                <Odometer format="(,ddd).dd" 
                                                duration={1000} 
                                                value={state2} />
                                                %
                                            </div>
                                            <h4 className="promo-title w-600 color-primary">Happy Clients</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>  
        )
}

export default aboutblock