import React from "react";
import classnames from "classnames";

export default function Banner({variant = "success", children, type}) {

    const typeClass = type === "multi" && `banner-multi`;
    const variantClass = variant && `banner-${variant}`;
    const allClasses = classnames("banner", typeClass, variantClass);

    return (
        <div className={allClasses}>
            {children}
        </div>
    )

}