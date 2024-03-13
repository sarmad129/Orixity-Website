import React from 'react'
import Image from 'next/image'
const banner = () => {
  return (
<div className="frontpage-banner-section frontpage-banner-style-three">
            <div className="element-group">
                {/* <div className="element one animation-moving-left-right-three"></div> */}
                <div className="element two"></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        
                        <div className="frontpage-banner-content">
                        
                            <p  className="hero-title w-600 aos-item mrb-0"data-aos="fade-left" data-aos-duration="300" data-aos-once="true"><span style={{fontWeight:550}} className="text-gradient">Orixity</span></p>
                            <p  className="hero-title w-600 aos-item" style={{fontSize:20}} data-aos="fade-left" data-aos-duration="400" data-aos-once="true">Where talent meets modern innovation</p>
                            {/* <p  className="hero-title w-800 aos-item" data-aos="fade-left" data-aos-duration="400" data-aos-once="true">Agency <span className="text-gradient">Jura.</span></p> */}
                            
                            <div className="hero-desc aos-item" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
                                <p>At Orixity, we offer you custom-made, specifically-tailored technology and marketing solutions that your business needs.</p>
                            </div>
                            <div className="form-group-btn aos-item" data-aos="fade-left" data-aos-duration="600" data-aos-once="true">
                                <a className="btn btn-primary rounded-pill" href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <Image className="radius-4 aos-item" data-aos="fade-right" data-aos-duration="700" data-aos-once="true" src="/images/hero-banners/hero-banner-2.jpg" width={220} height={165} alt="Thumb" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-6">
                                <Image className="radius-4 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-once="true" src="/images/hero-banners/hero-banner-3.jpg"  width={320} height={485} alt="Thumb" />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
         )
}

export default banner