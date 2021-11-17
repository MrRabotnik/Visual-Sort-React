import { useState } from "react";
import "./header.scss";

function Header({ theme, createArray, setSize, sortingAlgorithms, array, sorting, updateArray }) {

    const [sortingAlgorithm, setSortingAlgorithm] = useState("bubble");

    function sort() {
        if (sorting) return
        
        sorting = true
        if (sortingAlgorithm === "bubble") {
            sortingAlgorithms.BubbleSort(array, sorting, updateArray)
        } else if (sortingAlgorithm === "merge") {
            alert("Work on progress!")
        } else if (sortingAlgorithm === "heap") {
            alert("Work on progress!")
        } else if (sortingAlgorithm === "quick") {
            alert("Work on progress!")
        } else if (sortingAlgorithm === "selection") {
            alert("Work on progress!")
        } else if (sortingAlgorithm === "insertion") {
            alert("Work on progress!")
        }
    }

    return (
        <header className={theme}>
            <div id="generate_new_array" className={theme} onClick={() => { createArray() }}>
                <h3>Generate New Array</h3>
            </div>

            <div id="change_array_size_and_speed" className={theme}>
                <h3>Change Array Size</h3>
                <input type="range" name="" id="array_range" min="4" max="400" step="1" defaultValue="30" onChange={e => { setSize(e.target.value) }} />
            </div>

            <div id="sorting_algorithms" className={theme}>
                <h3>Select Sorting Algorithm</h3>
                <select value={sortingAlgorithm} name="sorting_type" id="sorting_algorithm_select" onChange={e => { setSortingAlgorithm(e.target.value) }} className={theme}>
                    <option key="1" value="bubble">Bubble Sort</option>
                    <option key="2" value="merge">Merge Sort </option>
                    <option key="3" value="heap">Heap Sort</option>
                    <option key="4" value="selection">Selection Sort</option>
                    <option key="5" value="insertion">Insertion Sort</option>
                    <option key="6" value="quick">Quick Sort</option>
                </select>
            </div>

            <div id="start_sort" className={theme} onClick={() => { sort() }}>
                <h3>Sort!</h3>
            </div>
        </header>
    );
}

export default Header;