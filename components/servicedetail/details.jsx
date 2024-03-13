import React from 'react'
import Image from 'next/image'
const details = ({heading, description, description2, path}) => {
  return (
    <div className="about-us-block style-one ptb-130">
			<div className="container">
				<div className="row align-items-center md-wrap-reverse">
					<div className="col-lg-6 col-md-6">
						<div className="section-title lg-txt-left lg-mrt-80 xs-mrt-0 mrb-0">
                            <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">{heading}</h2>
                            <p className="description aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">{description}</p>
                            <p className="description aos-item mrt-20" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">{description2}</p>
                            <div className="form-group-btn aos-item mrt-30" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                                <a className="btn btn-primary rounded-pill" href="/contact">Contact Us</a>
                            </div>
                        </div>
					</div>
					<div className="col-lg-6 col-md-6">
                        <div className="accordion style-two mt-5">
                        {/* <img src="/images/portfolio/three/4.jpg" alt="portfolio Item"/> */}

                          <Image src={path} alt="portfolio Item" width={600} height={545} style={{marginLeft:30}}/>
								
							</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default details