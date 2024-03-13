'use client'
import React from 'react'
import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const testimonials = () => {
  return (
    <div className="testimonial-block style-one ptb-130">
    <div className="element-group">
        <div className="element one"></div>
        {/* <div className="element two animation-moving-left-right-two"></div> */}
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7 txt-center">
                <div className="section-title">
                    <h4 className="sub-title bg-primary aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">Our Testimonials</h4>
                    <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">Stories Shared <span className="text-gradient">By</span><br/> Our Clients.</h2>
                    <p className="description aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Discover the voices of satisfaction as our clients share their experiences of partnering with us for digital success.</p>
                </div>
            </div>
        </div>

        <div className="row">
      <div className="col-12">
        <Swiper
          className="testimonial-slider"
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      breakpoints={{
        560: {
          slidesPerView: 1,
        },
        770: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      }}
        navigation={false}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="client-testimonial">
                <div className="details">
                  <p>
                  A professional team who has excellent communication skills and experts in their work as well.
                   They kept me posted throughout the project and delivery was on time. I Definitely Recommend!
                  </p>
                  <div className="rating">
                    <a href="#"><i className="icofont-star"></i></a>
                    <a href="#"><i className="icofont-star"></i></a>
                    <a href="#"><i className="icofont-star"></i></a>
                    <a href="#"><i className="icofont-star"></i></a>
                    <a href="#"><i className="icofont-star"></i></a>
                  </div>
                </div>
                <div className="client-area">
                  <div className="client-thumb">
                    <img src="/images/testimonial/1.png" alt="Eric Denney" width={390} height={430} />
                  </div>
                  <div className="client-info">
                    <h4 className="client-name w-500">Eric Denney</h4>
                    <p className="client-designation w-200 color-primary">
                      UI/UX Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial-item">
                                <div className="client-testimonial">
                                    <div className="details">
                                        <p>
                                        An exceptional firm that seamlessly turned our vision into reality. Their proactive approach,
                                         coupled with on-time delivery and open communication, exceeded our expectations. Highly recommended!

                                        </p>
                                        <div className="rating">
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                        </div>
                                    </div>
                                    <div className="client-area">
                                        <div className="client-thumb">
                                            <Image src="/images/testimonial/2.png" alt="Calvin Quade" width={390} height={380} />
                                        </div>
                                        <div className="client-info">
                                            <h4 className="client-name w-500">Calvin Quade</h4>
                                            <p className="client-designation w-200 color-primary">
                                                Sr Artist
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="testimonial-item">
                                <div className="client-testimonial">
                                    <div className="details">
                                        <p>
                                        Impressed by their technical prowess and dedication to quality. From concept to completion,
                                         their team's constant updates and timely delivery made the entire process a breeze.
                                         I'm thrilled with the results and wholeheartedly endorse their services!
                                        </p>
                                        <div className="rating">
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                            <a href="#"><i className="icofont-star"></i></a>
                                        </div>
                                    </div>
                                    <div className="client-area">
                                        <div className="client-thumb">
                                            <Image src="/images/testimonial/3.png" alt="Dixie Gordon" width={390} height={430}/>
                                        </div>
                                        
                                        <div className="client-info">
                                            <h4 className="client-name w-500">Dixie Gordon</h4>
                                            
                                            <p className="client-designation w-200 color-primary">
                                                Quality Assurance
                                            </p>
                                        </div>
                                    
                                    </div>
                                    
                                </div>
                                
                            </div>
          </SwiperSlide>
            
        </Swiper>
      </div>
    </div>
        
    </div>
    
</div>
)
}

export default testimonials