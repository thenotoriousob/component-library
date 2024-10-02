import React from "react";
import classnames from "classnames";

export default function Badge({color, variant = "square", children}) {

    const colorClass = color && `badge-${color}`;
    const variantClass = variant && `badge-${variant}`;
    const allClasses = classnames("badge", colorClass, variantClass);

    return (
        <div className={allClasses}>
            {children}
        </div>
    );

};