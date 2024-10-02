import React from "react";
import Banner from "./index";
import {nanoid} from "nanoid";

const bannerVariants = ["success","warning","error","neutral"];
const bannerTitles = ["Congratulations!","Attention","There is a problem with your application","Update available"];

export default function BannerExample({type}) {

    return (
        <>
            <h2 className="component-section-label">Examples - {type === "multi" ? "Multi" : "Single"} Line</h2>
            {bannerVariants.map((variant,index) =>
                // Complaining about non unique keys when just a fragment
                <React.Fragment key={nanoid()}>
                    <h3 className="component-label">{variant}</h3>
                    <div className="banner-container">
                        <Banner variant={variant} type={type}>
                            <Banner.Header
                                variant={variant}
                            >
                                {bannerTitles[index]}
                            </Banner.Header>
                            {type === "multi" &&
                            <Banner.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
                            </Banner.Text>}
                        </Banner>
                    </div>
                </React.Fragment>
            )}
            <Banner.Useage type={type}/>
        </>
    );

};
