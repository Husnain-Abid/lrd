import React from 'react'
import './Section4.css';
import ASSET_PATHS from '../../constant';

export default function Section4() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='section-4'>


                <div className='box-1'>
                    <h6>Invest</h6>

                    <h1>

                        Explore <span> Unique Opportunities </span> in Alternative Investments

                    </h1>
                    <p>
                        Alternative investments offer diverse opportunities beyond traditional assets. Our expert team guides you in navigating these options to enhance your portfolio.
                    </p>

                    <ul>
                        <li>
                            <img src={`${imgRoute}/li_icon.png`} alt="" />
                            Diversify your portfolio with strategic investments.
                        </li>
                        <li>
                            <img src={`${imgRoute}/li_icon.png`} alt="" />
                            Access exclusive properties and unique investment opportunities.
                        </li>
                        <li>
                            <img src={`${imgRoute}/li_icon.png`} alt="" />
                            Professional guidance for informed investment decisions.
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
                    <img src={`${imgRoute}/section3.png`}></img>
                </div>

            </div>

        </>
    )
}
