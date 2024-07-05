const MergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return merge(MergeSort(leftArray), MergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex].rndNum < rightArray[rightIndex].rndNum) {
            sortedArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return sortedArray.concat(leftArray.slice(leftIndex), rightArray.slice(rightIndex));
};

export default MergeSort;
