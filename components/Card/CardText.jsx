import React from "react";

export default function CardText({children, color = "#6B7280"}) {
    return (
        <p className="card-text" style={{color: color}}>{children}</p>
    );
};
