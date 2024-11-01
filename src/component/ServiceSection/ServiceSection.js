import React from 'react'
import './ServiceSection.css';
import ASSET_PATHS from '../../constant';

export default function ServiceSection() {

    const imgRoute = ASSET_PATHS.IMG_URL

    const cardData = [
        {
            card_img: "service1.png",
            title: "Investment Portfolio and Asset Management",
            content: "Trusted financial advisor and market strategist to grow your wealth."
        },
        {
            card_img: "service2.png",
            title: "All in one: Accountant, Tax, Lawyer and Legal Advisor",
            content: "Establish experts that works in your favour to protect your wealth."
        },
        {
            card_img: "service3.png",
            title: "Real Estate Finding to Maximize Your Investments",
            content: "Discover prime properties that align with your goals."
        }
    ];


    return (
        <>


            <div className='service-section'>

                <div className="line-pattern-container">
                    <img src={`${imgRoute}/bg_image.png`} alt="Line Pattern" className="line-pattern-image" />
                </div>


                <div className='services'>
                    <h6>Services</h6>
                    <h2> Explore Our <span> Comprehensive Service </span> Offerings </h2>
                    <p>We provide a range of tailored financial solutions designed to meet your unique needs. From brokerage accounts to property finding, our services are here to guide you.</p>
                </div>

                <div className='cards'>
                    {cardData.map((card, index) => (
                        <div className='card' key={index}>
                            <div className='img'>
                                <img src={`${imgRoute}/${card.card_img}`} alt="" />

                            </div>

                            <h4>{card.title}</h4>
                            <p>{card.content}</p>
                        </div>
                    ))}
                </div>

                <div className='btn'>
                    <button className='green-btn'>Learn More</button>
                    <button className='white-btn'>
                        Sign Up <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>



                <div className="line-pattern-container-2">
                    <img src={`${imgRoute}/bg_image.png`} alt="Line Pattern" className="line-pattern-image-2" />
                </div>


            </div>


        </>
    )
}
