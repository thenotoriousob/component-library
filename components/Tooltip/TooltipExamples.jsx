import React, { useState } from "react";
import Tooltip from "./Tooltip";
import TooltipHeader from "./TooltipHeader";
import TooltipText from "./TooltipText";
import TooltipUseage from './TooltipUseage';

export default function ToastExamples() {

    const [ isHovered, setIsHovered] = useState(false);
    const [ parent, setParent] = useState(null);
    const [ theme, setTheme ] = useState("black");

    function handleChange(e) {
        setTheme(e.target.value)
    }

    return (
        <>
            <h2 className="component-section-label">Examples</h2>
            <select id="tooltip-select" className="tooltip-select" onChange={e => handleChange(e)}>
                  <option value="black">Black</option>
                  <option value="white">White</option>
                  <option value="blue">Blue</option>
                  <option value="lightblue">Light Blue</option>
                  <option value="purple">Purple</option>
                  <option value="lightpurple">Light Purple</option>
                  <option value="green">Green</option>
                  <option value="lightgreen">Light Green</option>
              </select>
              <div className={`tooltipitem tooltipitem-${theme}`}
                  // Mouse events
                  onMouseEnter={(e) => {setIsHovered(true); setParent(e.target)}}
                  onMouseLeave={() => {setIsHovered(false); setParent(null)}}
                  // Keyboard events
                  onFocus={(e) => {setIsHovered(true); setParent(e.target)}}
                  onBlur={() => {setIsHovered(false); setParent(null)}}
                  aria-describedby="tooltip"
                  tabIndex={0}
              >
                  Hover here
                  <div id="tooltip"></div>
              </div>

              <Tooltip
                    isHovered={isHovered}
                    target={parent}
                    theme={theme}
              >
                  <TooltipHeader>Tooltip Header</TooltipHeader>
                  <TooltipText>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipText>
              </Tooltip>

              <TooltipUseage />

        </>
    );

};
