import SwapElements from "./SwapElements";

const InsertionSort = (array, sorting, updateArray) => {
    let arraySize = array.length
    for (let i = 1; i < arraySize; i++) {
        let currentTarget = i;
        if (array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
            while (array[currentTarget - 1] && array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
                array = SwapElements(array, currentTarget - 1, currentTarget)
                updateArray(array)
                currentTarget--;
            }
        } else {

        }
    }

    sorting = false;
}

export default InsertionSort;