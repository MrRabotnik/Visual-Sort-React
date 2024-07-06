import React from "react";
import ArrayElement from "../ArrayElement/ArrayElement";
import "./Body.scss";

function Body({ array, width, changeSpeed }) {
    return (
        <section id="sorting_array_section">
            <div id="sorting_array_container">
                {array.map((el, index) => (
                    <ArrayElement
                        key={index}
                        num={array.length <= 30 ? el.rndNum : ""}
                        height={el.height}
                        width={width}
                        bgColor={el.bgColor}
                    />
                ))}
            </div>

            <div id="change_sorting_speed">
                <h3>Control Speed</h3>
                <input
                    type="range"
                    id="sorting_speed"
                    min="1"
                    max="500"
                    step="1"
                    defaultValue="450"
                    onChange={(e) => changeSpeed(e.target.value)}
                />
            </div>

            {/* <div className="create_array_input_container">
                <h3>Enter Custom Values</h3>
                <input
                    type="text"
                    id="enter_values_input"
                    placeholder="12,15,17,20,25,..."
                    defaultValue="37,49,150,60,25"
                />
            </div> */}
        </section>
    );
}

export default Body;
