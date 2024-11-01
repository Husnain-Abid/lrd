import React from 'react'
import './HeroSection.css';
import ASSET_PATHS from '../../constant';

export default function HeroSection() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='hero-section'>

                <div className='box-1'>
                    <h6>Empower</h6>

                    <h1>
                        Your   <span>Financial </span>   Future
                    </h1>
                    <p>
                        Explore our comprehensive services for offshore accounts, investments, and expert financial consulting tailored for you.
                    </p>
                    <button className='green-btn'>Learn More</button>
                    <button className='white-btn'>Get Started</button>
                </div>

            </div>

        </>
    )
}
