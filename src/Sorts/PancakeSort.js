const PancakeSort = async (array, updateArray, bgColors, timer, timeRef) => {
    const flip = async (arr, i) => {
        let start = 0;
        while (start < i) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            start++;
            i--;
        }
        updateArray([...arr]);
        await timer(timeRef.current);
    };

    let n = array.length;
    for (let currSize = n; currSize > 1; --currSize) {
        let mi = 0;
        for (let i = 0; i < currSize; ++i) {
            if (array[i].rndNum > array[mi].rndNum) {
                mi = i;
            }
        }

        if (mi !== currSize - 1) {
            await flip(array, mi);
            await flip(array, currSize - 1);
        }
    }
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};
export default PancakeSort;
