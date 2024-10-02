import React from 'react';

export default function Useage({title = "Useage", children}) {

    return (
        <>
            <h2 className="component-section-label">{title}</h2>
            <div className="useage-container">
                {children}
            </div>
        </>
    )

}