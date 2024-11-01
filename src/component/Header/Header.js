import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';
import ASSET_PATHS from '../../constant';

export default function Header() {

    const [show, setShow] = useState(false)

    const imgRoute = ASSET_PATHS.IMG_URL


    return (
        <>
            <div className='header'>
                <div className='navbar'>
                    <div className='logo'>
                        <Link to="/">

                            <img src={`${imgRoute}/logo.svg`}></img>

                        </Link>

                    </div>

                    <div className='nav-links'>
                        {/* <i
                            className="fa fa-bars"
                            aria-hidden="true"
                            onClick={() => setShow(!show)}
                        /> */}

                        <i
                            className={`fa ${show ? 'fa-times' : 'fa-bars'}`} // Toggle icons
                            aria-hidden="true"
                            onClick={() => setShow(!show)}
                        />


                        <ul className={`links ${show ? 'show' : ''}`}>
                            <li><Link to="/" onClick={() => setShow(false)}>Home Page</Link></li>
                            <li><Link to="/" onClick={() => setShow(false)}>Services Offered</Link></li>
                            <li><Link to="/" onClick={() => setShow(false)}>Case Studies</Link></li>
                            <li><Link to="/" onClick={() => setShow(false)}>About Us</Link></li>
                            <li><Link to="/" onClick={() => setShow(false)}><button className='white-btn'>Sign Up</button></Link></li>
                            <li><Link to="/" onClick={() => setShow(false)}><button className='green-btn'>Learn More</button></Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}
