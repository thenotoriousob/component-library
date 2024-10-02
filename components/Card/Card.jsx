import React from "react";
import { RiUploadCloud2Line } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function Card({icon = <RiUploadCloud2Line />, iconColor = "#FFFFFF", iconBackgroundColor = "#3F75FE", children}) {
    return (
        <div className="card">
            <div className="card-details-container">
                {children}
            </div>
            {/* Context required to change the color of the icon */}
            <IconContext.Provider value={{ color: iconColor, className: "global-class-name" }}>
                <div className="icon-container" style={{backgroundColor: iconBackgroundColor}}>
                    {icon}
                </div>
            </IconContext.Provider>
        </div>
    );
};
