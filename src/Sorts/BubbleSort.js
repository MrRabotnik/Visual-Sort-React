import SwapElements from "../utils/SwapElements";

const BubbleSort = async (array, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let bubbleSorted = false;
    let allTrue = false;
    let sortedCount = 1;

    while (!bubbleSorted) {
        for (let i = 0; i < array.length - sortedCount; i++) {
            if (shouldStopSortingRef.current) return;
            itemColoringForBubbleSort(i, bgColors.checkingColor, bgColors.checkingColor, array);
            updateArray([...array]);
            await timer(timeRef.current);

            if (array[i].rndNum > array[i + 1].rndNum) {
                itemColoringForBubbleSort(i, bgColors.wrongColor, bgColors.wrongColor, array);
                updateArray([...array]);
                await timer(timeRef.current);

                allTrue = false;
                array = SwapElements(array, i, i + 1);

                itemColoringForBubbleSort(i, bgColors.correctedColor, bgColors.correctedColor, array);
                updateArray([...array]);
                await timer(timeRef.current);
            } else {
                itemColoringForBubbleSort(i, bgColors.correctedColor, bgColors.correctedColor, array);
                updateArray([...array]);
                await timer(timeRef.current);
            }

            if (i === array.length - sortedCount - 1) {
                itemColoringForBubbleSort(i, bgColors.staticColor, bgColors.allCorrectColor, array);
                updateArray([...array]);
                await timer(timeRef.current);
            } else {
                itemColoringForBubbleSort(i, bgColors.staticColor, bgColors.staticColor, array);
                updateArray([...array]);
                await timer(timeRef.current);
            }
        }

        if (allTrue) {
            bubbleSorted = true;
        }

        allTrue = true;
        sortedCount++;
    }

    array.forEach((el) => {
        el.bgColor = bgColors.allCorrectColor;
    });

    updateArray([...array]);

    sortedCount = 1;
    bubbleSorted = false;
};

function itemColoringForBubbleSort(index, color, color2, array) {
    array[index].bgColor = color;
    array[index + 1].bgColor = color2;
}

export default BubbleSort;
