import { useContext } from "react";
import { ToastContext } from "./Toast";
import successLogo from "../../icons/success.svg";
import warningLogo from "../../icons/warning.svg";
import informationLogo from "../../icons/neutral.svg";
import errorLogo from "../../icons/error.svg";

export default function ToastHeader({ children }) {

    const {variant} = useContext(ToastContext);
    const logo = {
        success: successLogo,
        warning: warningLogo,
        information: informationLogo,
        error: errorLogo
    };

    return (
        <>
            <img className="toast-icon" src={logo[variant]}></img>
            <h3 className="toast-title">{children}</h3>
        </>
    );

};