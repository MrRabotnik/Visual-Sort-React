import React from "react";
import "./ArrayElement.scss";

function ArrayElement({ num, height, width, theme, bgColor }) {
    return (
        <div
            className={`visual_array_item ${theme}`}
            style={{ height, width, background: bgColor }}
        >
            {num}
        </div>
    );
}

export default ArrayElement;
