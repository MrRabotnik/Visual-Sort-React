import SwapElements from "./SwapElements";

const HeapSort = (arr, sorting, updateArray) => {
    let array = arr
    let arrayLength = array.length;

    while (arrayLength >= 2) { // Looping Till we are left with 2 items in heapifying array
        for (let i = Math.floor(arrayLength / 2 - 1); i >= 0; i--) { // Lopping till
            let parentNode = array[i].rndNum;
            let leftChildNode = array[2 * i + 1] ? 2 * i + 1 === arrayLength ? 0 : array[2 * i + 1].rndNum : 0;
            let rightChildNode = array[2 * i + 2] ? 2 * i + 2 === arrayLength ? 0 : array[2 * i + 2].rndNum : 0;

            if (2 * i + 2 !== arrayLength) {
                /**/
            }

            if (leftChildNode > rightChildNode && leftChildNode > parentNode) {
                if (2 * i + 2 !== arrayLength) {
                    /**/
                }
                array = SwapElements(array, i, 2 * i + 1)
                updateArray(array)

            } else if (rightChildNode >= leftChildNode && rightChildNode > parentNode) {
                if (2 * i + 2 !== arrayLength) {
                    /**/
                }
                array = SwapElements(array, i, 2 * i + 2)
                updateArray(array)

            } else {
                if (2 * i + 2 !== arrayLength) {
                    /**/ 
                }
                if (2 * i + 2 !== arrayLength) {
                    /**/
                }
            }
        }
        if (arrayLength === 2) {

        } else {
            
        }
        array = SwapElements(array, 0, arrayLength - 1)
        updateArray(array)
        arrayLength--;
    }

    updateArray(array)
    sorting = false;
}

export default HeapSort;