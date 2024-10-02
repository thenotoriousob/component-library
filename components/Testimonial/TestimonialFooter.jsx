import React from "react";

export default function TestimonialFooter({name, position}) {
    return (
        <div className="footer">
            <p className="footer-name">{name}</p>
            <p className="footer-position">{position}</p>
        </div>
    );
}