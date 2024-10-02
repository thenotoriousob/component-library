import React from 'react';
import Testimonial from './index';

export default function TestimonialExamples() {

    return (
        <>
            <h2 className="component-section-label">Example - with image</h2>
            <div className="testimonial-with-image-example">
                <Testimonial
                    image="mayAndersons.png"
                    footername="May Andersons"
                    footerposition="Workstation, CTO"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
                </Testimonial>
            </div>

            <Testimonial.Useage type="withimage"/>

            <h2 className="component-section-label">Example - without image</h2>
            <div className="testimonial-without-image-example">
                <Testimonial
                    footername="May Andersons"
                    footerposition="Workstation, CTO"
                >
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </Testimonial>
            </div>

            <Testimonial.Useage />
        </>
    );
    
};
