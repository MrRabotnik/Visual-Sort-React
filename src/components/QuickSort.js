import SwapElements from "./SwapElements";

const QuickSort = (array, left, right, sorting, updateArray) => {

    let index;
    if (array.length > 1) {
        index = partition(array, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            QuickSort(array, left, index - 1);
        }
        if (index <= right) { //more elements on the right side of the pivot
            QuickSort(array, index, right);
        }
    }
    return array;
}

function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)].rndNum, //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (array[i].rndNum < pivot) {
            i++;
        }
        while (array[j].rndNum > pivot) {
            j--;
        }
        if (i <= j) {
            array = SwapElements(array, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

export default QuickSort;