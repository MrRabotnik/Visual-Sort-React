const CountingSort = async (array, updateArray, bgColors, timer, timeRef) => {
    let max = Math.max(...array.map((el) => el.rndNum));
    let min = Math.min(...array.map((el) => el.rndNum));
    let count = new Array(max - min + 1).fill(0);

    for (let i = 0; i < array.length; i++) {
        count[array[i].rndNum - min]++;
        array[i].bgColor = bgColors.checkingColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    let output = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
        let index = count[array[i].rndNum - min] - 1;
        output[index] = array[i];
        count[array[i].rndNum - min]--;
        array[i].bgColor = bgColors.correctedColor;
        updateArray([...array]);
        await timer(timeRef.current);

        array[i].bgColor = bgColors.staticColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        array[i].bgColor = bgColors.allCorrectedColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    return array;
};

export default CountingSort;
