import React from 'react'

const banner = () => {
  return (
    <div className="frontpage-banner-section frontpage-banner-style-three page-inner-block">
            <div className="element-group">
                <div className="element one"></div>
                <div className="element two"></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="frontpage-banner-content">
                            <h2 className="hero-title w-800 aos-item" data-aos="fade-left" data-aos-duration="300" data-aos-once="true">Our Agency Started Back in 2012</h2>
                            <div className="hero-desc aos-item" data-aos="fade-left" data-aos-duration="400" data-aos-once="true">
                                <p>We're a full-service digital agency committed to crafting a unique identity and voice for your brand.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <img className="radius-4 aos-item" data-aos="fade-right" data-aos-duration="500" data-aos-once="true" src="/images/about/about-inner-2.jpg" alt="Thumb"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-6">
                                <img className="radius-4 aos-item" data-aos="fade-left" data-aos-duration="600" data-aos-once="true" src="/images/about/about-inner-1.jpg" alt="Thumb"/>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default banner