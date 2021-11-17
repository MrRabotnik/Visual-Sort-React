const MergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    let len = array.length;
    let middleItemIndex = Math.floor(len / 2);
    let arr_left = array.slice(0, middleItemIndex);
    let arr_right = array.slice(middleItemIndex);

    return merge(MergeSort(arr_left), MergeSort(arr_right))
}

function merge(arr_left, arr_right) {
    let sortedArray = [];

    while (arr_left.length && arr_right.length) {
        let leftEl = arr_left[0].rndNum;
        let rightEl = arr_right[0].rndNum;

        if (leftEl < rightEl) {
            sortedArray.push(arr_left.shift(0))

        } else {
            sortedArray.push(arr_right.shift([0]))

        }
    }

    return [...sortedArray, ...arr_left, ...arr_right];

}

export default MergeSort;