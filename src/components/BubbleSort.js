let bubbleSorted = false;
let allTrue = false;

const BubbleSort = (array, sorting, updateArray) => {
    let sortedCount = 1;

    while (!bubbleSorted) {
        for (let i = 0; i < array.length - sortedCount; i++) {

            if (array[i].rndNum > array[i + 1].rndNum) {
                allTrue = false;
                let arrItem = array[i + 1]
                array[i + 1] = array[i];
                array[i] = arrItem
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