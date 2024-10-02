import React from 'react';
import Useage from '../Useage/Useage';

export default function ToastUseage() {

    return (
        <Useage>
            <pre>{'import Toast from "./components/Toast/index";'}</pre>
            <pre>{'<Toast show={true/false} variant="success">'}</pre>
            <pre>{'    <Toast.Header>Success</Toast.Header>'}</pre>
            <pre>{'    <Toast.Text>Your work has been saved</Toast.Text>'}</pre>
            <pre>{'</Toast>'}</pre>
        </Useage>
    )

}