import React from "react";
import { createPortal } from 'react-dom';

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({isHovered, target, theme, children}) {

    if(!isHovered) return null;

    const tooltipStyle = {};

    if (target) {
        tooltipStyle.bottom = `${ target.clientHeight + 10 }px`
        // Get half the width, then take away 25px for how much the speech arrow
        // is indented, + 5px for half the width of the arrow and that should
        // be the half way point of the div
        tooltipStyle.left = `${ (target.clientWidth / 2) - 30 }px`
    }

    return createPortal(
        <TooltipContext.Provider value={{theme}}>
            <div
                className={`tooltip tooltip-${theme}`}
                style={tooltipStyle}
                id="tooltip"
                role="tooltip"
            >
                <img src={`../../icons/email-${theme}.svg`} />
                {children}
            </div>
        </TooltipContext.Provider>
        , document.getElementById("tooltip")
    );

};
