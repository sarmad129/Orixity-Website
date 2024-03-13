'use client'
import React from 'react'
import Image from 'next/image'
const footer = () => {
  return (
<div className="site-footer style-one">
            <div className="footer-widget-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-7 col-md-7 col-12 aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">
                            <div className="footer-widget-top md-txt-left lg-txt-left xs-txt-center sm-txt-center">
                                <h2 className="footer-widget-title-sm color-primary">Get in Touch</h2>
                                <h4 className="footer-widget-title">Need help on a project? Get in touch today!</h4>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5 col-12 aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">
                            <div className="footer-widget-btn md-txt-right lg-txt-right xs-txt-center sm-txt-center">
                                <a className="btn btn-primary rounded-pill btn-lg" href="/contact">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-area style-one">
                <div className="container">
                    <div className="footer-copyright">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12 aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                                <div className="footer-copyright-text md-txt-left lg-txt-left xs-txt-center sm-txt-center">
                                    <p>© 2023 <span className="color-primary">Orixity</span>, All Right Receved.</p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12 aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                                <div className="footer-copyright-nav md-txt-right lg-txt-right xs-txt-center sm-txt-center md-mrt-0 xs-mrt-20 sm-mrt-20">
                                    <a href="/privacypolicy">Privacy policy</a>
                                    <a href="/termsandconditions">Terms and conditions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-logo-area">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-12 aos-item" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                                <div className="footer-copyright-logo mrt-30 md-txt-left lg-txt-left xs-txt-center sm-txt-center">
                                    <a href="/">
                                        <img src="/images/orixity-logo-1.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-12 aos-item"data-aos="fade-up" data-aos-duration="800" data-aos-once="true" >
                                <div className="footer-copyright-social md-txt-right lg-txt-right xs-txt-center sm-txt-center md-mrt-0 mrt-30">
                                    <a href="#"><i className="icofont-facebook"></i></a>
                                    <a href="https://twitter.com/orixity" target="_blank"><i className="icofont-twitter"></i></a>
                                    <a href="https://www.linkedin.com/in/orixity-technologies-74612a285" target="_blank"><i className="icofont-linkedin"></i></a>
                                    <a href="#"><i className="icofont-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div> 
         )
}

export default footer