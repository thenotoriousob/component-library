import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipText({children}) {

    const { theme } = useContext(TooltipContext);

    return (
        <p className={`tooltip-text tooltip-text-${theme}`}>{children}</p>
    );

};
