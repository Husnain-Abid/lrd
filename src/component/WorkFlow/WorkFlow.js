import React from 'react';
import './WorkFlow.css';
import ASSET_PATHS from '../../constant';

export default function Workflow() {
    const imgRoute = ASSET_PATHS.IMG_URL;

    const steps = [
        { icon: "gif-1.gif", title: "Consultation" },
        { icon: "gif-2.gif", title: "Analysis & Diagnosis" },
        { icon: "gif-3.gif", title: "Solutions" },
        { icon: "gif-4.gif", title: "Action" }
    ];

    return (
        <div className="workflow">
            <h2>Advisory <span>Workflow</span></h2>
            <div className="workflow-line"></div>
            <div className="workflow-steps">
                {steps.map((step, index) => (
                    <div className="workflow-step" key={index}>
                        <div className="icon-circle">
                            <img src={`${imgRoute}/${step.icon}`} alt={`${step.title} icon`} />
                        </div>
                        <p>{step.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
