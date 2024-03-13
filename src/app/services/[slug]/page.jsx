'use client'
import React,{useEffect, useState} from 'react'
import { services } from '@/app/servicesData';
import Banner from '../../../../components/servicedetail/banner';
import Details from '../../../../components/servicedetail/details';
import CallToAction from '../../../../components/portfolio/calltoaction';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { redirect } from 'next/navigation'

const serviceDetail = ({params}) => {
    const [service, setService] = useState(null);

    const deslugify = (slug) => {
        return slug.replace(/-/g, ' ');
      };

    const serv = services.filter((service) => service.slug === params.slug);
    useEffect(() => {
        AOS.init({
          duration : 1000
        });

          if (!serv[0]) {
            redirect('/error');
          }

    }, [])  
if (!serv) {
    return null;
  }
  return (
    <div>
        <Banner title={serv[0]?.title} tagline={serv[0]?.tagline}/>
        <Details heading={serv[0]?.heading} description={serv[0]?.description} description2={serv[0]?.description2} path={serv[0]?.picturePath}/>
        <CallToAction />
    </div>
  )
}

export default serviceDetail