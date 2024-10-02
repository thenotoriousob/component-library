import React, { createContext } from "react";
import { createPortal } from "react-dom";

const ToastContext = createContext();

export { ToastContext };

export default function Toast( { show, children, variant }) {

    if(!show) {
        return null;
    }

    return createPortal(
        <ToastContext.Provider value={{variant}}>
            <div className={`toast show toast-${variant}`}>
                {children}
            </div>
        </ToastContext.Provider>
        ,document.getElementById("toast")
    );

};
