const CombSort = async (array, updateArray, bgColors, timer, timeRef) => {
    let n = array.length;
    let gap = n;
    let swapped = true;

    while (gap !== 1 || swapped) {
        gap = Math.floor(gap / 1.3);
        if (gap < 1) gap = 1;

        swapped = false;
        for (let i = 0; i < n - gap; i++) {
            if (array[i].rndNum > array[i + gap].rndNum) {
                array[i].bgColor = bgColors.wrongColor;
                array[i + gap].bgColor = bgColors.wrongColor;
                updateArray([...array]);
                await timer(timeRef.current);

                [array[i], array[i + gap]] = [array[i + gap], array[i]];

                array[i].bgColor = bgColors.correctedColor;
                array[i + gap].bgColor = bgColors.correctedColor;
                updateArray([...array]);
                await timer(timeRef.current);

                swapped = true;
            }
            array[i].bgColor = bgColors.staticColor;
            array[i + gap].bgColor = bgColors.staticColor;
        }
        updateArray([...array]);
    }
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};
export default CombSort;
