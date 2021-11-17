import ArrayElement from "../ArrayElement/ArrayElement";
import "./body.scss";

function Body({ array, width, theme, setTheme }) {
    return (
        <section id="sorting_array_section" className={theme}>
            <div id="sorting_array_container" className={theme}>
                {array.map((el, index) => {
                    if(array.length <= 30){
                        return <ArrayElement key={index} num={el.rndNum} height={el.height} width={width} theme={theme} />
                    }else{
                        return <ArrayElement key={index} num={""} height={el.height} width={width} theme={theme} />
                    }
                })}
            </div>
            <div id="change_sorting_speed">
                <h3>Control Speed</h3>
                <input type="range" name="" id="sorting_speed" min="1" max="500" step="1" defaultValue="30" />
            </div>

            <div className="creat_array_input_container">
                <h3>Enter Custom Values</h3>
                <input type="text" id="enter_values_input" placeholder="12,15,17,20,25,..." defaultValue="37,49,150,60,25" />
            </div>

            <div className="themes_container">
                <div onClick={() => {setTheme("theme_1")}} id="theme_1" className="themes"><h4>Terminal</h4></div>
                <div onClick={() => {setTheme("theme_2")}} id="theme_2" className="themes"><h4>Windows</h4></div>
                <div onClick={() => {setTheme("theme_3")}} id="theme_3" className="themes"><h4>First Test</h4></div>
                <div onClick={() => {setTheme("theme_2")}} id="theme_4" className="themes"><h4>Second Test</h4></div>
            </div>
        </section>
    );
}

export default Body;