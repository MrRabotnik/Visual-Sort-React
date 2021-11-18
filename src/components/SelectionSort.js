import SwapElements from "./SwapElements";

const SelectionSort = (array, sorting, updateArray, bgColors) => {
    let shouldSwapIndex = 0;
    let currentRunMinimumIndex = 0
    let arraySize = array.length

    while (shouldSwapIndex !== arraySize) {
        for (let i = shouldSwapIndex + 1; i < arraySize; i++) {
            if (array[i].rndNum < array[currentRunMinimumIndex].rndNum) {
                if (currentRunMinimumIndex !== shouldSwapIndex) {

                }
                currentRunMinimumIndex = i
            } else {

            }
        }
        array = SwapElements(array, shouldSwapIndex, currentRunMinimumIndex)
        updateArray(array)

        shouldSwapIndex++;
        currentRunMinimumIndex = shouldSwapIndex;

    }

    sorting = false;
}

export default SelectionSort;