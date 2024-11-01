import React from 'react';
import './OfficeService.css';
import ASSET_PATHS from '../../constant';

export default function OfficeService() {
    const imgRoute = ASSET_PATHS.IMG_URL;


    return (
        <div className="office-service">
            <div className='heading'>

                <h1>Family Office <span> Service </span> </h1>

            </div>

            <div className='arc-container'>
                <img src={`${imgRoute}/office.png`} className="desktop-image" alt="Office" />
                <img src={`${imgRoute}/res_office.png`} className="mobile-image" alt="Office Mobile" />
            </div>


        </div>
    );
}
