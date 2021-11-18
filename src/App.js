import React, { Component } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import BubbleSort from "./components/BubbleSort";
import MergeSort from "./components/MergeSort"
import HeapSort from "./components/HeapSort"
import SelectionSort from "./components/SelectionSort"
import InsertionSort from "./components/InsertionSort"
import QuickSort from "./components/QuickSort"

class App extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            arraySize: 30,
            elementWidth: 0,
            sorting: false,
            theme: "theme_2",
            bgColors: {
                staticColor: "#5959ad",
                checkingColor: "orange",
                wrongColor: "crimson",
                allCorrectColor: "green",
                correctedColor: "yellowgreen"
            },
            time: 30,
        };
    }

    sortingSpeedMax = 500;
    array_max_number_limit = 181;
    array_min_number_limit = 20;
    dom_item_height_multiplier = 90 / (this.array_max_number_limit + 20);
    sortingAlgorithms = {
        BubbleSort,
        MergeSort,
        HeapSort,
        SelectionSort,
        InsertionSort,
        QuickSort
    };

    timer = ms => new Promise(res => setTimeout(res, ms));

    componentDidMount() {
        this.createArray();
    }

    createArray = () => {
        let arr = [];
        for (let i = this.state.arraySize; i > 0; i--) {
            let rndNum =
                Math.floor(Math.random() * this.array_max_number_limit) +
                this.array_min_number_limit;
            arr.push({
                rndNum,
                height: this.definingItemsHeight(rndNum),
                bgColor: this.state.bgColors.staticColor
            });
        }

        this.setState({
            elementWidth: this.definingItemsWidth(),
            array: arr,
        });
    };

    definingItemsWidth() {
        return 100 / this.state.arraySize + "%";
    }

    definingItemsHeight(randNum) {
        return this.dom_item_height_multiplier * +randNum + "%";
    }

    updateArray = arr => {
        this.setState({ array: arr });
    };

    setTheme = (theme) => {
        this.setState({ theme: theme });
    };

    setSize = (size) => {
        this.setState({
            arraySize: size,
            elementWidth: this.definingItemsWidth(),
        }, () => {
            this.createArray();
        });
    };

    changeSpeed = async (speed) => {
        this.setState({ time: this.sortingSpeedMax - speed })
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    theme={this.state.theme}
                    createArray={this.createArray}
                    setSize={this.setSize}
                    sortingAlgorithms={this.sortingAlgorithms}
                    array={this.state.array}
                    sorting={this.state.sorting}
                    updateArray={this.updateArray}
                    bgColors={this.state.bgColors}
                    timer={this.timer}
                    time={this.state.time}
                />
                <Body
                    array={this.state.array}
                    width={this.state.elementWidth}
                    theme={this.state.theme}
                    setTheme={this.setTheme}
                    sorting={this.state.sorting}
                    changeSpeed={this.changeSpeed}
                />
            </React.Fragment>
        );
    }
}

export default App;
