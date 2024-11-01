import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import ASSET_PATHS from '../../constant';

export default function Footer() {

    const imgRoute = ASSET_PATHS.IMG_URL

    return (
        <>

            <div className='footer'>

                <div className='footer-subscribe'>

                    <div className='box-1'>
                        <h2>Subscribe to Updates</h2>
                        <p>Stay informed with our latest news and insights.</p>
                    </div>

                    <div className='box-2'>
                        <form >
                            <input type="text" placeholder='Your Email Here' />

                            <button >Join</button>


                        </form>

                        <p>We respect your privacy and protect your information. <span> Privacy Policy</span> </p>

                    </div>

                </div>


                <div className='foot-nav'>

                    <div className='links'>
                        <div className="logo">
                        <img src={`${imgRoute}/logo_dark.svg`}></img>
                        </div>
                    </div>

                    <div className='links'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Services</li>
                            <li>Case Studies</li>
                            <li>Contact Us</li>
                            <li>Blog Posts</li>
                        </ul>
                    </div>

                    <div className='links'>
                        <h4>Resources</h4>
                        <ul>
                            <li>FAQs</li>
                            <li>Testimonials</li>
                            <li>Investment Tips</li>
                            <li>News Updates</li>
                            <li>Client Support</li>
                        </ul>
                    </div>

                    <div className='links'>
                        <h4>Connect With Us</h4>
                        <ul>
                            <li>Follow Us</li>
                            <li>LinkedIn Profile</li>
                            <li>Twitter Feed</li>
                            <li>Facebook Page</li>
                            <li>Instagram Gallery</li>
                        </ul>
                    </div>

                    <div className='links'>
                        <h4>Get In Touch</h4>
                        <ul>
                            <li>Email Us</li>
                            <li>OCall Us</li>
                            <li>Visit Us</li>
                            <li>Chat Now</li>
                            <li>AJoin Our Team</li>
                        </ul>
                    </div>

                    <div className='links'>
                        <h4>Stay Connected</h4>
                        <ul>
                            <li>Link to Resources</li>
                            <li>Link to Blog</li>
                            <li>Link to Events</li>
                            <li>Link to Webinars</li>
                            <li>Link to Guides</li>
                        </ul>
                    </div>


                </div>

                <hr />

                <div className='terms'>

                    <div className='privacy'>
                        <p>© 2024 Your Company Name. All rights reserved.</p>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookies Settings</li>
                        </ul>


                    </div>

                    <div className='icons'>
                        <div className='icon'>
                            <img src={`${imgRoute}/social1.png`} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={`${imgRoute}/social2.png`} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={`${imgRoute}/social3.png`} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={`${imgRoute}/social4.png`} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={`${imgRoute}/social5.png`} alt="" />
                        </div>
                        <div className='icon'>
                            <img src={`${imgRoute}/social6.png`} alt="" />
                        </div>
                    </div>

                </div>



            </div>



        </>
    )
}
