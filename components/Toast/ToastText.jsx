import { useContext } from "react";
import { ToastContext } from "./Toast";

export default function ToasttipText({children}) {

    const { theme } = useContext(ToastContext);

    return (
        <p className={`toast-text toast-text-${theme}`}>{children}</p>
    );

};