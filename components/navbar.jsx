"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import sidebar from "/public/images/sidebar.jpg";
const navbar = () => {
  const [issticky, setissticky] = React.useState(false);
  const [active, setActive] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 15) {
        setissticky(true);
      } else {
        setissticky(false);
      }
    });
  }, []);

  const handleChange = () => {
    setActive(!active);
  };
  return (
    <header
      className={`site-header header-style-two ${
        issticky ? "sticky_header" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="navigation-area">
              <div className="site-branding">
                <a href="/">
                  <Image
                    className="logo-dark"
                    src="/images/orixity-logo-1.png"
                    width={160}
                    height={50}
                    alt="Site Logo"
                  />
                  <Image
                    className="logo-white"
                    src="/images/orixity-logo-1.png"
                    width={160}
                    height={50}
                    alt="Site Logo"
                  />
                </a>
              </div>

              <div className="site-navigation">
                <nav className="navigation">
                  <div className="menu-wrapper">
                    <div className="menu-content">
                      <ul className="mainmenu">
                        <li className="megamenu">
                          <a className="nav-link" href="/">
                            Home
                          </a>
                        </li>

                        <li className="megamenu">
                          <a className="nav-link" href="/portfolio">
                            Portfolio
                          </a>
                        </li>
                        <li className="megamenu">
                          <a className="nav-link" href="/about">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a className="nav-link" href="/contact">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="header-navigation-right">
                <div
                  className={`hamburger-menus ${active ? "click-menu" : ""}`}
                  onClick={handleChange}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-sidebar-menu sidebar-menu">
        <div className="overlaybg"></div>
      </div>
      {active && (
        <div
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-once="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: "100%",
            height: "110%",
            zIndex: 9999,
          }}
        >
          {/* <Image src="/images/sidebar.jpg" width={160} height={50} /> */}
          <div style={{
            backgroundImage: `url(${sidebar.src})`,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            justifyContent: 'right',
          }}>
          <div className="overlay1">
          <div style={{display:'flex', justifyContent:'space-between', height:100}}>
          <div style={{padding:50}}>
                <a href="/">
                  <Image
                    className="logo-dark"
                    src="/images/orixity-logo-1.png"
                    width={160}
                    height={50.95}
                    alt="Site Logo"
                  />
                  <Image
                    className="logo-white"
                    src="/images/orixity-logo-1.png"
                    width={160}
                    height={50}
                    alt="Site Logo"
                  />
                </a>
          </div>  
          <div style={{display:'flex', justifyContent:'flex-end', padding:50, width:'100%'}}>
          <span style={{fontSize:20, padding:10}}>menu</span>
          <a onClick={handleChange}><i className="icofont-close-line" style={{fontSize:40, fontWeight:'bolder', cursor:'pointer'}}></i></a>
          </div>
          </div>
          
          <div style={{ position:'absolute', bottom:0, width:'100%', height:250}} className="btmdetails">
            <div className="bottom-details">
            <div>
                            <h3 style={{color:'#999fae', fontWeight:'bold'}} className="headingside">Contact</h3>
                            <div className="card-info">
                                <ul className="info-list">
                                    <li className="headingside2"><i className="icofont-phone" ></i>+44 7462173031</li>
									                  <li className="headingside2"><i className="icofont-send-mail"></i> <a>contact@orixity.com</a></li>
                                </ul>
                            </div>
            </div>
            <div>
                            <h3 style={{color:'#999fae', fontWeight:'bold'}} className="headingside">Address</h3>
                            <div className="card-info">
                                <p className="headingside2">Office No. 406, 4th Floor, Park, IT Incubation Center, Rd, Islamabad</p>
                            </div>
            </div>
            <div>
            <h3 style={{color:'#999fae', fontWeight:'bold'}} className="headingside">Socials</h3>

                      <a href="https://www.facebook.com/profile.php?id=100095410460630" target="_blank"><i className="icofont-facebook" style={{fontSize:26,marginRight:8}}></i></a>
                      {/* <a href="https://twitter.com/orixity" target="_blank"><i className="icofont-twitter" style={{fontSize:26,marginRight:8}}></i></a> */}
                      <a href="https://pk.linkedin.com/company/orixity" target="_blank" style={{fontSize:26,marginRight:8}}><i className="icofont-linkedin"></i></a>
                      <a href="https://instagram.com/orixity.pk/" target="_blank"><i className="icofont-instagram" style={{fontSize:26,marginRight:8}}></i></a>
            </div>
            </div>
            
          </div>
            
          <nav className="custom-sidenav">
            <ul >
              <li>
                <a href="/">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
                
          </div>      
          </div>
          
        </div>
      )}
    </header>
  );
};

export default navbar;
