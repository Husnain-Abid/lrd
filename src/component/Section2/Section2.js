import React from 'react'
import './Section2.css';
import ASSET_PATHS from '../../constant';

export default function Section2() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='section-2'>


                <div className='box-1'>
                    <h6>Trust</h6>

                    <h1>
                        Secure Your Future with <span> Trust Funds </span>
                    </h1>
                    <p>
                        Our Trust Funds service offers a robust framework for safeguarding your assets. With our expert guidance, you can navigate the complexities of offshore banking and investment.                    </p>

                    <ul>
                        <li>
                            <img src={`${imgRoute}/li_icon.png`} alt="" />
                        Expert management for your financial peace of mind.
                        </li>
                        <li>
                        <img src={`${imgRoute}/li_icon.png`} alt="" />
                        Tailored solutions to meet your unique investment goals.
                            </li>
                        <li>
                        <img src={`${imgRoute}/li_icon.png`} alt="" />
                        Comprehensive support for your trust fund journey.
                            </li>
                    </ul>

                    <div className='btn'>
                        <button className='green-btn'>Learn More</button>
                        <button className='white-btn'>
                            Sign Up <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                </div>


                <div className='box-2'>
                    <img src={`${imgRoute}/section2.png`}></img>
                </div>

            </div>

        </>
    )
}
