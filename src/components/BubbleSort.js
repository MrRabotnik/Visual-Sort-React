import SwapElements from "./SwapElements";

let bubbleSorted = false;
let allTrue = false;

const BubbleSort = (array, sorting, updateArray) => {
    let sortedCount = 1;

    while (!bubbleSorted) {
        for (let i = 0; i < array.length - sortedCount; i++) {

            if (array[i].rndNum > array[i + 1].rndNum) {
                allTrue = false;
                array = SwapElements(array, i, i + 1)
                updateArray(array)
            }
        }
        if (allTrue) {
            bubbleSorted = true;
        }

        allTrue = true;
        sortedCount++
    }

    sortedCount = 1;
    bubbleSorted = false;
    sorting = false;
}

export default BubbleSort;