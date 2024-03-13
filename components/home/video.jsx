'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
const video = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
        <div className="video-block">
            <div className="element-group">
                <div className="element one"></div>
                {/* <div className="element two animation-moving-left-right-two"></div> */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="promo-video-area aos-item" data-aos="fade-up" data-aos-duration="300" data-aos-once="true">
                            <div className="video-thumb bg-overlay-gradient radius-4">
                                <Image src="/images/bg/video-bg.jpg" alt="Video Thumb" width={1030} height={460}/>
                            </div>
                            <div className="promo-video">
                                <a onClick={openModal} className="video-btn video-popup video-btn-gradient">
                                    <span className="icofont-ui-play"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="custom-modal"
                overlayClassName="custom-overlay"
                >
                <button className="modal-close-button" onClick={closeModal}>
                    <i className="icofont-close-line"></i>
                </button>
                <div className="modal-content1">
                    <ReactPlayer url="https://player.vimeo.com/video/4760972" controls width="100%" height="100%" />
                </div>
            </Modal>
        </div>
    )
}

export default video