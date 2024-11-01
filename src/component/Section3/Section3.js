import React from 'react'
import './Section3.css';
import ASSET_PATHS from '../../constant';

export default function Section3() {

    const imgRoute = ASSET_PATHS.IMG_URL

    const cardData = [
        {
            imgSrc: "s_icon_31.png",
            title: "Tailored Solutions",
            description: "We customize our approach to meet your unique property requirements and investment goals."
        },
        {
            imgSrc: "s_icon_32.png",
            title: "Expert Guidance",
            description: "Our experienced team provides insights and support throughout your property search journey."
        }
    ];





    return (
        <>

            <div className='section-3'>
                <div className='box-2'>
                    <h1>
                        <span>
                            Discover </span> Your Ideal Property with Our <span>
                            Expert Finding Service
                        </span>
                    </h1>
                 
                </div>

                <div className='box-1'>


                    <p>
                        Our Property Finding service is designed to connect you with the best real estate opportunities tailored to your needs. We leverage our extensive network to ensure you find the perfect property, whether for investment or personal use.
                    </p>

                    <div className='cards'>
                        {cardData.map((card, index) => (
                            <div className='card' key={index}>
                                <div>
                                    <img src={`${imgRoute}/${card.imgSrc}`} alt={card.title} />
                                </div>
                                <h6>{card.title}</h6>
                                <p>{card.description}</p>
                            </div>
                        ))}
                    </div>





                </div>


                <div className="line-pattern-container-3">
                        <img src={`${imgRoute}/bg_image.png`} alt="Line Pattern" className="line-pattern-image-3" />
                    </div>


             

            </div>
            <div className="section3-line-img">
                        <img src={`${imgRoute}/bg_image.png`} alt="Line Pattern"  />
                    </div>
        </>
    )
}
