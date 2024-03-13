'use client'
import React,{useState} from 'react'
import emailjs from 'emailjs-com';

const form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    const [errors, setErrors] = useState(false);
    const [noterrors, setNotErrors] = useState(false);
   const [formSubmitted, setFormSubmitted] = useState(false);   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
          setFormSubmitted({ title: 'Sending message...', paragraph: '' });
          emailjs.send(
            'service_5f55jn4',
            'template_xor6btf',
            formData,
            'xq9YQqBWQgVM557jI',
          )
          .then(function(response) {
            setNotErrors(true);
            setErrors(false);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setFormSubmitted(false);
         }, function(error) {
            setErrors(true);
            setNotErrors(false);
        });

    };  
  return (
<div className="contact-form-block style-two style-three ptb-130">
            
			<div className="container ml-b-40">
				<div className="row align-items-center">
					<div className="col-lg-8 col-md-8">
						<div className="contact-form-area">
                        {noterrors && <span className="success">Thank you. Your email was sent successfully.</span>}
						{errors && <span className="error">Sorry, we're having trouble sending your message. Please try again later.</span>}
							<form className="contact-form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-6 col-md-6">
                                        <div className="form-group">
											<label for="name">Your Name </label>
											<input className="form-controller" id="name" name="name" type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            />
                                            {(formData.name==='' && formSubmitted) && <span className="error">Please provide Your name.</span>}
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="form-group">
											<label for="email">Your Email </label>
											<input className="form-controller" id="email" name="email" type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            />
                                            {(formData.email==='' && formSubmitted) && <span className="error">Please provide Your email.</span>}
    
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<label for="name">Your Message </label>
											<textarea id="message" name="message" className="form-controller" rows="4"
												cols="50" 
                                                value={formData.message}
                                                onChange={handleChange}></textarea>
                                            {(formData.message==='' && formSubmitted) && <span className="error">Please provide Your message.</span>}
    
										</div>
									</div>
									<div className="col-12 mrt-15">
										<button type="submit" className="btn btn-primary rounded-pill btn-gradient-three">Submit
											Mail</button>
									</div>
								</div>
							</form>
						</div>
					</div>
                    <div className="col-lg-3 offset-lg-1 col-md-3">
                        <div className="single-contact-info">
                            <h3 className="title">Contacts</h3>
                            <div className="card-info">
                                <ul className="info-list">
                                    <li><i className="icofont-phone"></i> (123) 456 789 0</li>
									<li><i className="icofont-send-mail"></i> <a href="#">contact@orixity.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-contact-info">
                            <h3 className="title">Address</h3>
                            <div className="card-info">
                                <p>741 New South Head Rd, Triple Bay SWFW 3148, New York</p>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div> 
         )
}

export default form