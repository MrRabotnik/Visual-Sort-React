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
            arraySize: 7,
            elementWidth: 0,
            sortingSpeedMax: 0,
            sorting: false,
            time: this.sortingSpeedMax - "speed",
            theme: "theme_2",
            bgColor: {
                staticColor : "#5959ad",
                checkingColor : "orange",
                wrongColor : "crimson",
                allCorrectColor : "green",
                correctedColor : "yellowgreen"
            },
        };
    }

    
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
        this.setState({array: arr});
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
                    appThis={this}
                    updateArray={this.updateArray}
                />
                <Body
                    array={this.state.array}
                    width={this.state.elementWidth}
                    theme={this.state.theme}
                    setTheme={this.setTheme}
                    // sortingAlgorithms={this.sortingAlgorithms}
                    sorting={this.state.sorting}
                />
            </React.Fragment>
        );
    }
}

export default App;
