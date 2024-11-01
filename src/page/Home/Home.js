import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Home.css';
import { Link } from 'react-router-dom';
import HeroSection from '../../component/HeroSection/HeroSection';
import ServiceSection from '../../component/ServiceSection/ServiceSection';
import Section1 from '../../component/Section1/Section1';
import Section3 from '../../component/Section3/Section3';
import Section2 from '../../component/Section2/Section2';
import Section4 from '../../component/Section4/Section4';
import Section5 from '../../component/Section5/Section5';
import Section6 from '../../component/Section6/Section6';
import Workflow from '../../component/WorkFlow/WorkFlow';
import OfficeService from '../../component/OfficeService/OfficeService';

export default function Home() {
    const imgRoute = ASSET_PATHS.IMG_URL
    return (
        <>
            <Layout>
                <div className='content'>

                    <HeroSection />


                    <ServiceSection />

                    <OfficeService />

                    <Workflow />



                    <Section1 />


                    <Section2 />


                    <Section3 />


                    <Section4 />



                    <Section5 />


                    <Section6 />




                </div>
            </Layout >
        </>
    )
}
