'use client'
import React,{useState, useEffect} from 'react'


let loadedCallback = null;
let loaded = false;

const Odometer = dynamic(async () => {
    const mod = await import("react-odometerjs");
    loaded = true;
    if (loadedCallback != null) {
        loadedCallback();
    }
    return mod;
}, {
    ssr: false,
    loading: () => 0
});

import "odometer/themes/odometer-theme-default.css";
import dynamic from 'next/dynamic';

const fanfact = () => {
    const [state, setState] = useState(0);
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);
    const [first , setFirst] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1825 && first) {
                setFirst(false)
                setState(4000)
                setState1(100)
                setState2(20)
            } 
        })
    }, [])


  return (
    <div className="fanfact-block style-two pd-b-130">
            <div className="container">
                <div className="row fanfact-promo-numbers justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="promo-number style-two">
                            <div className="promo-number-inner">
                                <div className="info">
                                    <div className="odometer-wrap">
                                        {/* <div className="odometer" data-odometer-final="10">0</div> */}
                                        <Odometer format="(,ddd).dd" 
                                        duration={1000} 
                                        value={state} />
                                    </div>
                                    <h4 className="promo-title w-600 text-gradient">Completed Projects</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="promo-number style-two">
                            <div className="promo-number-inner">
                                <div className="info">
                                    <div className="odometer-wrap">
                                        {/* <div className="odometer" data-odometer-final="100">0</div> */}
                                        <Odometer format="(,ddd).dd" 
                                        duration={1000} 
                                        value={state1} />

                                        %
                                    </div>
                                    <h4 className="promo-title w-600 text-gradient">Happy Clients</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="promo-number style-two">
                            <div className="promo-number-inner">
                                <div className="info">
                                    <div className="odometer-wrap">
                                        {/* <div className="odometer" data-odometer-final="20">0</div> */}
                                        <Odometer format="(,ddd).dd" 
                                        duration={1000} 
                                        value={state2} />

                                        +
                                    </div>
                                    <h4 className="promo-title w-600 text-gradient">Awards Won</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default fanfact