'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import ModalImage from 'react-modal-image';
import Modal from 'react-modal';

const portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imgsrc, setSrc] = useState("");
    const [altT, setAlt] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const setValues = (src, alt) => {
    console.log("checkkkkkk")
    
    setSrc(src);
    setAlt(alt);
    console.log("checkkkkkk" +imgsrc)
    console.log("checkkkkkk"+ altT)
    openModal();
    console.log("values"+  src+  alt)
  };
  return (
<div className="portfolio-block style-four ptb-130">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title txt-center">
                            <h4 className="sub-title bg-primary aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">Our Projects</h4>
                            <h2 className="title-main aos-item" data-aos="fade-up" data-aos-duration="400" data-aos-once="true">Bringing <span className="text-gradient">Visions</span> Alive.</h2>
                            <p className="description aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Explore our portfolio where innovation meets execution, showcasing a tapestry of digital marvels that we've brought to life.</p>    
                        </div>
                    </div>
                </div>

                <div className="row portfolio-grid">
                    <div className="item col-lg-6 col-md-6 media design aos-item" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/1.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/1.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Steele Fitness</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">Fitness App</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-6 media illustration aos-item" data-aos="fade-up" data-aos-duration="600" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/2.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/2.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Praiso</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">Food</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="item col-lg-3 col-md-6 media illustration aos-item" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/3.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/3.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Yu-transfer app</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">Finance</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    
                    <div className="item col-lg-3 col-md-6 branding media illustration aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/4.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/4.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Live loins football club</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">sport</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/5.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/5.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Grocero</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">E-commerce</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="item col-lg-6 col-md-6 aos-item portfresponsive" 
                    data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">
                                <img src="/images/portfolio/two/6.jpg" alt="portfolio Item" />
                                <a onClick={()=>{setValues("/images/portfolio/two/6.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Be Unique</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">E-commerce</p>
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </figure>
                        </div>
                    </div>
                    <div className="item col-lg-6 col-md-6 branding aos-item portfresponsive1" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">
                        <div className="portfolio-item">
                            <figure className="portfolio-thumb radius-4">                            
                                <img src="/images/portfolio/two/7.jpg" alt="portfolio Item"/>
                                <a onClick={()=>{setValues("/images/portfolio/two/7.jpg", "portfolio item")}}>
                                <div className="overlay-wrapper">
                                    <div className="overlay overlay-two">
                                    </div>
                                    <div className="portfolio-info">
                                        <div className="heading-text">
                                            <h3 className="heading">Paragon</h3>
                                        </div>
                                        <div className="cat-text">
                                            <p className="cat">Fitness</p>
                                        </div>
                                    </div>
                                </div>
                                </a>    
                            </figure>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="custom-modal"
                overlayClassName="custom-overlay"
            >
                <button className="modal-close-button" onClick={closeModal}>
                <i className="icofont-close-line"></i>
                </button>
                <div className="modal-content">
                <img src={imgsrc} alt={altT} />
                </div>
            </Modal>
        </div>
          )
}

export default portfolio