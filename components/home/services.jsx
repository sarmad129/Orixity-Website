import React from 'react'

const services = () => {
  return (
    <div className="services-block style-three ptb-130">
            <div className="element-group">
                <div className="element one"></div>
                {/* <div className="element two animation-moving-left-right-two"></div> */}
            </div>
            <div className="container ml-b-30">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="section-title txt-center">
                            <h4 className="sub-title bg-primary aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">Services</h4>
                            <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">Elevating <span className="text-gradient">Online </span>Presence.</h2>
                            <p className="description aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Here is an overview of the creative solutions <br/> that we have to offer.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 aos-item stylei" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                        <div className="service-item style-one" style={{width:350}}>
                            <div className="service-icon">
                                <i className="icon icofont-instrument color-primary"></i>
                            </div>
                            <div className="service-info">
                                <h3 className="title">Web Development</h3>
                                <p>
                                Building dynamic web solutions with the latest tools and technologies, we turn your visions into fully functional, user-centric websites.
                                </p>
                                <a className="read-more-text" href="services/web-development">
                                    Read More
                                    <i className="icofont-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 aos-item stylei" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                        <div className="service-item style-one" style={{width:350}}>
                            <div className="service-icon">
                                <i className="icon icofont-space-shuttle color-primary"></i>
                            </div>
                            <div className="service-info">
                                <h3 className="title">Mobile Development</h3>
                                <p>
                                Crafting seamless mobile experiences, we bring your app ideas to life across iOS and Android platforms.
                                </p>
                                <a className="read-more-text" href="services/mobile-development">
                                    Read More
                                    <i className="icofont-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 aos-item stylei" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        <div className="service-item style-one" style={{width:350}}>
                            <div className="service-icon">
                                <i className="icon icofont-pen-holder color-primary"></i>
                            </div>
                            <div className="service-info">
                                <h3 className="title">Content</h3>
                                <p>
                                We weave words into engaging content that captivates your audience and amplifies your brand's voice.                                </p>
                                <a className="read-more-text" href="/services/content-creation">
                                    Read More
                                    <i className="icofont-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 aos-item stylei" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                        <div className="service-item style-one" style={{width:350}}>
                            <div className="service-icon">
                                <i className="icon icofont-touch color-primary"></i>
                            </div>
                            <div className="service-info">
                                <h3 className="title">UI/UX</h3>
                                <p>
                                By transforming your ideas into visually stunning digital interfaces, we help captivate users and elevate their interactions.                                </p>
                                <a className="read-more-text" href="/services/ui-ux-design">
                                    Read More
                                    <i className="icofont-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 aos-item stylei" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                        <div className="service-item style-one" style={{width:350}}>
                            <div className="service-icon">
                                <i className="icon icofont-touch color-primary"></i>
                            </div>
                            <div className="service-info">
                                <h3 className="title">Social Media</h3>
                                <p>
                                Fueling your online presence, we drive engagement and forge meaningful connections in the digital landscape.                                </p>
                                <a className="read-more-text" href="/services/social-media-marketing">
                                    Read More
                                    <i className="icofont-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default services