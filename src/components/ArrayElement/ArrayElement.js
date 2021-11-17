import "./arrayElement.scss";

function ArrayElement({ num, height, width, theme }) {
    return (
        <div className={`visual_array_item ${theme}`} style={{ height: height, width: width }}>
            {num}
        </div>
    );
}

export default ArrayElement;