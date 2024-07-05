const RadixSort = async (array, updateArray, bgColors, timer, timeRef) => {
    const getMax = () => {
        let max = array[0].rndNum;
        for (let i = 1; i < array.length; i++) {
            if (array[i].rndNum > max) {
                max = array[i].rndNum;
            }
        }
        return max;
    };

    const countingSort = async (array, n, exp) => {
        let output = [];
        let count = new Array(10).fill(0);

        for (let i = 0; i < n; i++) {
            count[Math.floor(array[i].rndNum / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = n - 1; i >= 0; i--) {
            let index = Math.floor(array[i].rndNum / exp) % 10;
            array[i].bgColor = bgColors.checkingColor;
            updateArray([...array]);
            await timer(timeRef.current);
            output[count[index] - 1] = array[i];
            count[index]--;
        }

        for (let i = 0; i < n; i++) {
            array[i] = output[i];
            array[i].bgColor = bgColors.correctedColor;
            updateArray([...array]);
            await timer(timeRef.current);
        }
    };

    const radixSort = async () => {
        let max = getMax();

        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            await countingSort(array, array.length, exp);
        }
    };

    await radixSort();
    return array;
};

export default RadixSort;
