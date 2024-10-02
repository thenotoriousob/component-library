import React from 'react';

export default function CardTitle({children, color = "#111827"}) {

    return (
        <h2 className="card-title" style={{color: color}}>{children}</h2>
    );
};
