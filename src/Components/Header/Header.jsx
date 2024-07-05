import { useRef, useState } from "react";
import "./Header.scss";

function Header({ theme, createArray, setSize, sortingAlgorithms, array, updateArray, bgColors, timer, time }) {
    const [sortingAlgorithm, setSortingAlgorithm] = useState("bubble");
    const [isSorting, setIsSorting] = useState(false);
    const [shouldStopSorting, setShouldStopSorting] = useState(false);
    const shouldStopSortingRef = useRef(shouldStopSorting);

    const sort = async () => {
        if (isSorting) {
            setIsSorting(false);
            setShouldStopSorting(true);
            shouldStopSortingRef.current = true;
            return;
        }

        setIsSorting(true);
        setShouldStopSorting(false);
        shouldStopSortingRef.current = false;

        startSorting();
    };

    const startSorting = async () => {
        if (sortingAlgorithm === "bubble") {
            await sortingAlgorithms.BubbleSort(array, updateArray, bgColors, timer, time, shouldStopSortingRef);
        } else if (sortingAlgorithm === "merge") {
            const sortedArray = await sortingAlgorithms.MergeSort(
                array,
                updateArray,
                bgColors,
                timer,
                time,
                shouldStopSortingRef
            );
            sortedArray.forEach((el) => {
                el.bgColor = bgColors.allCorrectColor;
            });
            updateArray([...sortedArray]);
        } else if (sortingAlgorithm === "heap") {
            await sortingAlgorithms.HeapSort(array, updateArray, bgColors, timer, time, shouldStopSortingRef);
        } else if (sortingAlgorithm === "quick") {
            const sortedArray = await sortingAlgorithms.QuickSort(
                array,
                0,
                array.length - 1,
                updateArray,
                bgColors,
                timer,
                time,
                shouldStopSortingRef
            );
            sortedArray.forEach((el) => {
                el.bgColor = bgColors.allCorrectColor;
            });
            updateArray([...sortedArray]);
        } else if (sortingAlgorithm === "selection") {
            await sortingAlgorithms.SelectionSort(array, updateArray, bgColors, timer, time, shouldStopSortingRef);
        } else if (sortingAlgorithm === "insertion") {
            await sortingAlgorithms.InsertionSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "radix") {
            await sortingAlgorithms.RadixSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "counting") {
            await sortingAlgorithms.CountingSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "bucket") {
            const sortedArray = await sortingAlgorithms.BucketSort(
                array,
                updateArray,
                bgColors,
                timer,
                time,
                shouldStopSorting
            );
            sortedArray.forEach((el) => {
                el.bgColor = bgColors.allCorrectColor;
            });
            updateArray([...sortedArray]);
        } else if (sortingAlgorithm === "shell") {
            await sortingAlgorithms.ShellSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "comb") {
            await sortingAlgorithms.CombSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "gnome") {
            await sortingAlgorithms.GnomeSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "pancake") {
            await sortingAlgorithms.PancakeSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "tim") {
            await sortingAlgorithms.TimSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        } else if (sortingAlgorithm === "cycle") {
            await sortingAlgorithms.CycleSort(array, updateArray, bgColors, timer, time, shouldStopSorting);
        }

        setIsSorting(false);
    };

    return (
        <header className={theme}>
            <div
                id="generate_new_array"
                className={theme}
                onClick={createArray}
            >
                <h3>Generate New Array</h3>
            </div>

            <div
                id="change_array_size_and_speed"
                className={theme}
            >
                <h3>Change Array Size</h3>
                <input
                    type="range"
                    disabled={isSorting}
                    id="array_range"
                    min="10"
                    max="200"
                    step="1"
                    defaultValue="30"
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>

            <div
                id="sorting_algorithms"
                className={theme}
            >
                <h3>Select Sorting Algorithm</h3>
                <select
                    value={sortingAlgorithm}
                    id="sorting_algorithm_select"
                    onChange={(e) => setSortingAlgorithm(e.target.value)}
                    className={theme}
                >
                    <option
                        key="1"
                        value="bubble"
                    >
                        Bubble Sort
                    </option>
                    <option
                        key="2"
                        value="merge"
                    >
                        Merge Sort
                    </option>
                    <option
                        key="3"
                        value="heap"
                    >
                        Heap Sort
                    </option>
                    <option
                        key="4"
                        value="selection"
                    >
                        Selection Sort
                    </option>
                    <option
                        key="5"
                        value="insertion"
                    >
                        Insertion Sort
                    </option>
                    <option
                        key="6"
                        value="quick"
                    >
                        Quick Sort
                    </option>
                    <option
                        key="7"
                        value="radix"
                    >
                        Radix Sort
                    </option>
                    <option
                        key="8"
                        value="counting"
                    >
                        Counting Sort
                    </option>
                    <option
                        key="9"
                        value="bucket"
                    >
                        Bucket Sort
                    </option>
                    <option
                        key="10"
                        value="shell"
                    >
                        Shell Sort
                    </option>
                    <option
                        key="11"
                        value="comb"
                    >
                        Comb Sort
                    </option>
                    <option
                        key="12"
                        value="gnome"
                    >
                        Gnome Sort
                    </option>
                    <option
                        key="13"
                        value="pancake"
                    >
                        Pancake Sort
                    </option>
                    <option
                        key="14"
                        value="tim"
                    >
                        Tim Sort
                    </option>
                    <option
                        key="15"
                        value="cycle"
                    >
                        Cycle Sort
                    </option>
                </select>
            </div>

            <div
                id="start_sort"
                className={theme}
                onClick={sort}
            >
                <h3>{!isSorting ? "Sort!" : "Stop"}</h3>
            </div>
        </header>
    );
}

export default Header;
