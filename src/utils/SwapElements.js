const SwapElements = (array, index1, index2) => {
    let arrItem = array[index2];
    array[index2] = array[index1];
    array[index1] = arrItem;
    return array;
};

export default SwapElements;
