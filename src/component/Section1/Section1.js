import React from 'react'
import './Section1.css';
import ASSET_PATHS from '../../constant';

export default function Section1() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='section-1'>
                <div className='box-2'>
                    <img src={`${imgRoute}/section1.png`}></img>
                </div>

                <div className='box-1'>
                    <div className='img'>
                        <img src={`${imgRoute}/s_icon_1.png`} alt="" />
                    </div>


                    <h1>
                        <span> Unlock Your Potential </span>
                        with Brokerage Accounts
                    </h1>
                    <p>
                        Our Brokerage Accounts service provides you with access to a world of investment opportunities. Experience seamless account setup and expert guidance tailored to your financial goals.
                    </p>


                    <div className='btn'>
                    <button className='green-btn'>Learn More</button>
                    <button className='white-btn'>
                        Sign Up <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>


                </div>
            </div>

        </>
    )
}
