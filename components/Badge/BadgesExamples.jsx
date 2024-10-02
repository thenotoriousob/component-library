import React from 'react';
import Badge from './Badge';
import BadgeUseage from './BadgeUseage';

const badgeColors = ["gray", "red", "yellow", "green", "blue", "indigo", "purple", "pink"];

export default function BadgesExamples() {

    return (
        <>
            <h2 className="component-section-label">Examples</h2>
            <div className="badge-container">
                <h3 className="component-label">Square</h3>
                {badgeColors.map(color => 
                    <Badge
                        key={color}
                        color={color}
                    >
                        {color}
                    </Badge>
                )}
            </div>
            <div className="badge-container">
                <h3 className="component-label">Pill</h3>
                {badgeColors.map(color => 
                    <Badge
                        key={color}
                        color={color}
                        variant="pill"
                    >
                        {color}
                    </Badge>
                )}
            </div>
            <BadgeUseage />
        </>
    );

};
