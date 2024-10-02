import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipHeader({ children }) {

    const {theme} = useContext(TooltipContext);

    return (
        <h3 className={`tooltip-label tooltip-label-${theme}`}>{children}</h3>
    );

};
