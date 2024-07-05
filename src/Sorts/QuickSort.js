import SwapElements from "../utils/SwapElements";

const QuickSort = async (array, left, right, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let index;
    if (array.length > 1) {
        index = await partition(array, left, right, updateArray, bgColors, timer, timeRef);
        if (left < index - 1) {
            await QuickSort(array, left, index - 1, updateArray, bgColors, timer, timeRef);
        }
        if (index <= right) {
            await QuickSort(array, index, right, updateArray, bgColors, timer, timeRef);
        }
    }

    return array;
};

const partition = async (array, left, right, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let pivot = array[Math.floor((right + left) / 2)].rndNum;
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i].rndNum < pivot) {
            itemColoringForQuickSort(i, bgColors.checkingColor, array);
            updateArray([...array]);
            await timer(timeRef);
            itemColoringForQuickSort(i, bgColors.staticColor, array);
            updateArray([...array]);
            i++;
        }
        while (array[j].rndNum > pivot) {
            itemColoringForQuickSort(j, bgColors.checkingColor, array);
            updateArray([...array]);
            await timer(timeRef);
            itemColoringForQuickSort(j, bgColors.staticColor, array);
            updateArray([...array]);
            j--;
        }
        if (i <= j) {
            array = SwapElements(array, i, j);
            itemColoringForQuickSort(i, bgColors.wrongColor, array);
            itemColoringForQuickSort(j, bgColors.wrongColor, array);
            updateArray([...array]);
            await timer(timeRef);
            itemColoringForQuickSort(i, bgColors.correctedColor, array);
            itemColoringForQuickSort(j, bgColors.correctedColor, array);
            updateArray([...array]);
            await timer(timeRef);
            itemColoringForQuickSort(i, bgColors.staticColor, array);
            itemColoringForQuickSort(j, bgColors.staticColor, array);
            updateArray([...array]);
            await timer(timeRef);
            i++;
            j--;
        }
    }
    return i;
};

function itemColoringForQuickSort(index, color, array) {
    array[index].bgColor = color;
}

export default QuickSort;
