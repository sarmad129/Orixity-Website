import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div className="about-block pd-b-130">
            <div className="element-group">
                <div className="element one"></div>
                {/* <div className="element two animation-moving-left-right-two"></div> */}
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-6">
                                <Image className="radius-4 aos-item" data-aos="fade-left" data-aos-duration="500" data-aos-once="true" src="/images/about/about-1.jpg"  alt="About-img" width={350} height={470}/>
                            </div>
                            <div className="col-lg-5 col-6">
                                <Image className="radius-4 aos-item" data-aos="fade-right" data-aos-duration="600" data-aos-once="true" src="/images/about/about-2.jpg" alt="About-img-2" width={270} height={235}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-md-6">
                        <div className="our-content-area mrt-30">
                            <div className="section-title mrb-25">
                                <h4 className="sub-title bg-primary aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">Our Journey</h4>
                                <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">The Road <span className="text-gradient">To</span> Excellence.</h2>
                                <div className="title-text aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                                With a rich tapestry woven over 7 years, our journey has spanned diverse landscapes - from freelance platforms and bustling marketplaces to collaborating with brick-and-mortar enterprises. 
                                We’ve etched our legacy by gaining the trust of over 100 clients, partnering with them to fulfill their digital dreams. With over 60% of our current clientele being a testament to the power of word-of-mouth,
                                 we've flourished into a vibrant collective of over 15 skilled minds, dedicated to crafting digital excellence that keeps clients coming back for more.

                                </div>
                            </div>
                            <div className="skill-list aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                                <div className="single-skill">
                                    <h3 className="skill-title">Design</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: '60%'}}>
                                            <span>60%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h3 className="skill-title">Development</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: '90%'}}>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h3 className="skill-title">Markerting</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: '20%'}}>
                                            <span>20%</span>
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

export default about