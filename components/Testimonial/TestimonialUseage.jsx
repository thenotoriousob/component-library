import React from "react";
import Useage from '../Useage/Useage';

export default function CardUseage({type = "default"}) {
    return (
        <Useage title="Useage">
            <pre>{'import Testimonial from "./components/Testimonial/Testimonial";'}</pre>

            {type === "withimage" ?
            <>
              <pre>{'<Testimonial image="mayAndersons.png" footername="May Andersons" footerposition="Workstation, CTO">'}</pre>
              <pre>{'    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.'}</pre>
              <pre>{'</Testimonial>'}</pre>
            </>

            :

            <>
              <pre>{'<Testimonial footername="May Andersons" footerposition="Workstation, CTO">'}</pre>
              <pre>{'    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”'}</pre>
              <pre>{'</Testimonial>'}</pre>
            </>
            }
        </Useage>
    );
};
