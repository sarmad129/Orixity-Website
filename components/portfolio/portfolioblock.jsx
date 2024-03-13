'use client'
import React,{useState} from 'react'

const portfolioblock = () => {
    const [filter, setFilter] = useState(0);
    const handleChange = (filter) => {
        return () => {
            setFilter(filter);
        }
    }
  return (
<div className="portfolio-block style-five ptb-130 bg-black">
            <div className="container">
                <div className="row mrb-80">
                    <div className="col-12 text-center">
                        <div className="portfolio_mouseleve_title"></div>
                        <ul className="portfolio-filter">
                            <li>
                                <a  onClick={handleChange(0)} className={`filter ${filter===0?'active':''}`} style={{cursor:'pointer'}}>All</a>
                            </li>
                            <li>
                                <a  onClick={handleChange(1)} className={`filter ${filter===1?'active':''}`} style={{cursor:'pointer'}}>Web Development</a>
                            </li>
                            <li>
                                <a  onClick={handleChange(2)} className={`filter ${filter===2?'active':''}`} style={{cursor:'pointer'}}>Mobile Development</a>
                            </li>
                            <li>
                                <a  onClick={handleChange(3)} className={`filter ${filter===3?'active':''}`} style={{cursor:'pointer'}}>Content</a>
                            </li>
                            <li>
                                <a  onClick={handleChange(4)} className={`filter ${filter===4?'active':''}`} style={{cursor:'pointer'}}>UI/UX</a>
                            </li>
                            <li>
                                <a  onClick={handleChange(5)} className={`filter ${filter===5?'active':''}`} style={{cursor:'pointer'}}>Social Media</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row portfolio-grid portfolio-grid-three">
                {/* All */}
                    {filter===0?
                    <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 branding illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Instruction Manual" data-category="Web">
                                <a href="/images/portfolio/three/1.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/1.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design media">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Can O Beans" data-category="Mobile">
                                <a href="/images/portfolio/three/2.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/2.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 branding illustration" >
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Makeup Brand" data-category="UI/UX">
                                <a href="/images/portfolio/three/3.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/3.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 illustration design">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="3D Shape" data-category="Social Media">
                                <a href="/images/portfolio/three/4.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/4.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Grey Space" data-category="Web">
                                <a href="/images/portfolio/three/5.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/5.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design branding portresp">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Letter Mockup" data-category="UI/UX Design">
                                <a href="/images/portfolio/three/6.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/6.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design media">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Castro Capital" data-category="Mobile">
                                <a href="/images/portfolio/three/7.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/7.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 media illustration portresp">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Position Beverage" data-category="Content">
                                <a href="/images/portfolio/three/8.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/8.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    </>
                    :
                    filter===1?
                    <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 branding illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Instruction Manual" data-category="Web">
                                <a href="/images/portfolio/three/1.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/1.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Grey Space" data-category="Web">
                                <a href="/images/portfolio/three/5.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/5.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </>
                    :
                    filter===2?
                    <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design media">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Can O Beans" data-category="Mobile">
                                <a href="/images/portfolio/three/7.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/7.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design media">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Castro Capital" data-category="Mobile">
                                <a href="/images/portfolio/three/2.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/2.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    </>
                   :
                   filter===3?
                   <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 media illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Position Beverage" data-category="Content">
                                <a href="/images/portfolio/three/8.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/8.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                   </>
                   :
                   filter===4?
                     <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 branding illustration">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Makeup Brand" data-category="UI/UX">
                                <a href="/images/portfolio/three/3.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/3.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-4 col-sm-4 design branding">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="Letter Mockup" data-category="UI/UX Design">
                                <a href="/images/portfolio/three/6.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/6.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                     </>
                   :
                   filter===5?
                   <>
                    <div className="item col-lg-3 col-md-4 col-sm-4 illustration design">
                        <div className="portfolio-item style-three aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="portfolio_animation_wrap" data-title="3D Shape" data-category="Social Media">
                                <a href="/images/portfolio/three/4.jpg" className="popup-image">
                                    <img src="/images/portfolio/three/4.jpg" alt="portfolio Item"/>
                                </a>
                            </div>
                        </div>
                    </div>
                   </>
                   
                   :''}
                    
                </div>
                
            </div>
            
        </div>  )
}

export default portfolioblock