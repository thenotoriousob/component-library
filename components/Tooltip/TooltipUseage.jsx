import React from 'react';
import Useage from '../Useage/Useage';

export default function TooltipUseage() {

    return (
        <Useage>
            <pre>{'import Tooltip from "./components/Tooltip/Tooltip";'}</pre>
            <pre>{'<Tooltip isHovered={true/false} target={hoveredelement} theme="green">'}</pre>
            <pre>{'    <TooltipHeader>Tooltip Header</TooltipHeader>'}</pre>
            <pre>{'    <TooltipText>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipText>'}</pre>
            <pre>{'</Tooltip>'}</pre>
        </Useage>
    );
       
};
