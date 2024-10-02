import React from 'react';

export default function BannerHeader({variant, children}) {
    return (
        <>
            <img className="banner-icon" src={`../../icons/${variant}.svg`}></img>
            <h3 className="banner-title">{children}</h3>
        </>
    );
};