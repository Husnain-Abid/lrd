import React from 'react'
import './Section5.css';
import ASSET_PATHS from '../../constant';

export default function Section5() {

    const imgRoute = ASSET_PATHS.IMG_URL

    const cardData = [
        {
            imgSrc: "s_icon_51.png",
            title: "Tailored Solutions",
            description: "We create customized financial plans that align with your specific needs and objectives."
        },
        {
            imgSrc: "s_icon_52.png",
            title: "Expert Guidance",
            description: "Our experienced consultants are here to support you every step of the way."
        }
    ];





    return (
        <>

            <div className='section-5'>
                <div className='box-2'>
                <img src={`${imgRoute}/section4.png`}></img>

                </div>

                <div className='box-1'>
                <h1>
                        <span>
                        Unlock </span> Your Financial Potential with <span>
                        Expert Consulting Services
                        </span> Tailored for You

                    </h1>


                    <p>
                    Our financial consulting services provide personalized strategies to help you achieve your financial goals. We analyze your unique situation and offer expert guidance for optimal investment decisions.                    </p>

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
            </div>

        </>
    )
}
