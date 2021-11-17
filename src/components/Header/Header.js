import "./header.scss";

function Header({theme, createArray, setSize}) {
    return (
        <header className={theme}>
            <div id="generate_new_array" className={theme} onClick={() => {createArray()}}>
                <h3>Generate New Array</h3>
            </div>  

            <div id="change_array_size_and_speed" className={theme}>
                <h3>Change Array Size</h3>
                <input type="range" name="" id="array_range" min="4" max="400" step="1" defaultValue="30"  onChange={e => {setSize(e.target.value)}}/>
            </div>

            <div id="sorting_algorithms" className={theme}>
                <h3>Select Sorting Algorithm</h3>
                <select name="sorting_type" id="sorting_algorithm_select" className={theme}>
                    <option key="1" defaultValue="bubble">Bubble Sort</option>
                    <option key="2" defaultValue="merge">Merge Sort </option>
                    <option key="3" defaultValue="heap">Heap Sort</option>
                    <option key="4" defaultValue="selection">Selection Sort</option>
                    <option key="5" defaultValue="insertion">Insertion Sort</option>
                    <option key="6" defaultValue="quick">Quick Sort</option>
                </select>
            </div>

            <div id="start_sort" className={theme}>
                <h3>Sort!</h3>
            </div>
        </header>
    );
}

export default Header;