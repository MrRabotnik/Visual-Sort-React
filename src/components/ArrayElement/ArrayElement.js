import "./arrayElement.scss";

function ArrayElement({ num, height, width, theme, bgColor }) {
    return (
        <div className={`visual_array_item ${theme}`} style={{ height: height, width: width, background: bgColor }}>
            {num}
        </div>
    );
}

export default ArrayElement;