import React, { useState } from "react";
import Toast from "./index";
import {nanoid} from "nanoid";

const toastVariants = ["success","warning","error","information"];
const toastText = ["Your work has been saved","A network error was detected","Please re-save your work again","Please read updated information"];

export default function ToastExamples() {

    const [showToast, setShowToast] = useState({
        success: false,
        warning: false,
        error: false,
        information: false
    });

    function handleClick(e) {
        setShowToast(prevState => ({...prevState, [e.target.dataset.toast]: true}));

        setTimeout(() => setShowToast(prevState => ({...prevState, [e.target.dataset.toast]: false})), 2000);
    }

    return (
        <>
            <h2 className="component-section-label">Examples</h2>
            <div id="toast"></div>
            <div className="toast-examples-container">
            {toastVariants.map((variant, index) =>
                // Complaining about non unique keys
                <React.Fragment key={nanoid()}>
                    <button
                      data-toast={variant}
                      className={`toast-btn toast-btn-${variant}`}
                      onClick={handleClick}
                    >
                        Show {variant} Toast
                    </button>
                    
                    <Toast
                        show={showToast[variant]}
                        variant={variant}
                    >
                        <Toast.Header>{variant}</Toast.Header>
                        <Toast.Text>{toastText[index]}</Toast.Text>
                    </Toast>
                </React.Fragment>
            )}
            </div>

            <Toast.Useage />
        </>
    );

};