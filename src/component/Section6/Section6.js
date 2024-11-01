import React from 'react'
import './Section6.css';
import ASSET_PATHS from '../../constant';

export default function Section6() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='section-6'>

                <div className='box-1'>

                    <h1>
                        <span> Get Started </span>
                         with Your Future
                    </h1>
                    <p>
                    Reach out today for personalized financial solutions tailored to your unique needs and goals.                 
                       </p>


                    <div className='btn'>
                        <button className='green-btn'>Learn More</button>
                        <button className='white-btn'>
                            Learn More 
                        </button>
                    </div>


                </div>


                <div className='box-2'>
                    <img src={`${imgRoute}/section5.png`}></img>
                </div>



            </div>

        </>
    )
}
