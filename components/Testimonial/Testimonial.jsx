import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import TestimonialFooter from './TestimonialFooter';

export default function Testimonial({image, footername, footerposition, children}) {

    return (
        <>
            {image ?
            <div className="testimonial-with-img">
                <img className="testimonial-img" src={`../../icons/${image}`}></img>
                <div className="testimonial-details">
                    <FaQuoteLeft />
                    <p>{children}</p>
                    <TestimonialFooter name={footername} position={footerposition}/>
                </div>
            </div>
            :
            <div className="testimonial-without-img">
                <img className="testimonial-icon" src="../../icons/workcation.png"></img>
                <div className="testimonial-details no-image">
                    <p>{children}</p>
                    <TestimonialFooter name={footername} position={footerposition}/>
                </div>
                <img className="dot-image" src="../../icons/dot-pattern.png" />
            </div>}
        </>
    );
    
};