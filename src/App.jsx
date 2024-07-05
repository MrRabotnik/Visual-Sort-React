import React, { useState, useEffect, useRef, useMemo } from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import BubbleSort from "./Sorts/BubbleSort";
import MergeSort from "./Sorts/MergeSort";
import HeapSort from "./Sorts/HeapSort";
import SelectionSort from "./Sorts/SelectionSort";
import InsertionSort from "./Sorts/InsertionSort";
import QuickSort from "./Sorts/QuickSort";
import RadixSort from "./Sorts/RadixSort";
import CountingSort from "./Sorts/CountingSort";
import BucketSort from "./Sorts/BucketSort";
import ShellSort from "./Sorts/ShellSort";
import CombSort from "./Sorts/CombSort";
import GnomeSort from "./Sorts/GnomeSort";
import PancakeSort from "./Sorts/PancakeSort";
import TimSort from "./Sorts/TimSort";
import CycleSort from "./Sorts/CycleSort";

const App = () => {
    const sortingSpeedMax = 500;
    const array_max_number_limit = 181;
    const array_min_number_limit = 20;
    const dom_item_height_multiplier = 90 / (array_max_number_limit + 20);

    const sortingAlgorithms = {
        BubbleSort,
        MergeSort,
        HeapSort,
        SelectionSort,
        InsertionSort,
        QuickSort,
        RadixSort,
        CountingSort,
        BucketSort,
        ShellSort,
        CombSort,
        GnomeSort,
        PancakeSort,
        TimSort,
        CycleSort,
    };

    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(30);
    const [elementWidth, setElementWidth] = useState(0);
    const bgColors = useMemo(() => {
        return {
            staticColor: "#5959ad",
            checkingColor: "orange",
            wrongColor: "crimson",
            allCorrectColor: "green",
            correctedColor: "yellowgreen",
        };
    }, []);
    const [time, setTime] = useState(100);
    const timeRef = useRef(time); // Use useRef to keep track of time

    useEffect(() => {
        let arr = [];
        for (let i = arraySize; i > 0; i--) {
            let rndNum = Math.floor(Math.random() * array_max_number_limit) + array_min_number_limit;
            arr.push({
                rndNum,
                height: dom_item_height_multiplier * rndNum + "%",
                bgColor: bgColors.staticColor,
            });
        }
        setElementWidth(100 / arraySize + "%");
        setArray(arr);
    }, [arraySize, bgColors.staticColor, dom_item_height_multiplier]);

    useEffect(() => {
        timeRef.current = time;
    }, [time]);

    const generateArray = () => {
        let arr = [];
        for (let i = arraySize; i > 0; i--) {
            let rndNum = Math.floor(Math.random() * array_max_number_limit) + array_min_number_limit;
            arr.push({
                rndNum,
                height: dom_item_height_multiplier * rndNum + "%",
                bgColor: bgColors.staticColor,
            });
        }
        setElementWidth(100 / arraySize + "%");
        setArray(arr);
    };

    const timer = (ms) => new Promise((res) => setTimeout(res, ms));

    const updateArray = (arr) => {
        setArray([...arr]);
    };

    const changeSpeed = (speed) => {
        setTime(sortingSpeedMax - speed);
    };

    return (
        <>
            <Header
                setSize={setArraySize}
                createArray={generateArray}
                sortingAlgorithms={sortingAlgorithms}
                array={array}
                updateArray={updateArray}
                bgColors={bgColors}
                timer={timer}
                time={timeRef}
            />
            <Body
                array={array}
                width={elementWidth}
                changeSpeed={changeSpeed}
            />
        </>
    );
};

export default App;
