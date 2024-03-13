import React from 'react'
const team = () => {
  return (
<div className="team-block pd-b-130">
			<div className="container">
				<div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title txt-center">
                            <h4 className="sub-title bg-primary aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true" >Our Team</h4>
                            <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Meet <span className="text-gradient">The</span> Experts</h2>
                            <p className="description aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">At Orixity - We're not just a team; we're a synergy of creative minds weaving digital dreams into reality.</p>    
                        </div>
                    </div>
                </div>
				<div className="row team-items-list style-one">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team-item aos-item" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
							<div className="team-thumbnail-area">
								<figure className="team-thumb">
                                    <div className="image"><img src="/images/team/1.png" alt="Team"/></div>
								</figure>
							</div>
							<div className="team-info txt-center">
								<h3 className="team-name">
									Christin Cox
								</h3>
								<p className="designation w-200 color-primary">Marketing Manager</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team-item aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
							<div className="team-thumbnail-area">
								<figure className="team-thumb">
                                    <div className="image"><img src="/images/team/2.png" alt="Team"/></div>
								</figure>
							</div>
							<div className="team-info txt-center">
								<h3 className="team-name">
									Steve Harris
								</h3>
								<p className="designation w-200 color-primary">Developer</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="team-item aos-item" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
							<div className="team-thumbnail-area">
								<figure className="team-thumb">
                                    <div className="image" ><img src="/images/team/3.png" alt="Team"/></div>
								</figure>
							</div>
							<div className="team-info txt-center">
								<h3 className="team-name">
									Hilma Munoz
								</h3>
								<p className="designation w-200 color-primary">Human Resource</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
          )
}

export default team