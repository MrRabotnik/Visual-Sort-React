import SwapElements from "./SwapElements";

const BubbleSort = async (array, sorting, updateArray, bgColors, timer, time) => {
    let bubbleSorted = false;
    let allTrue = false;
    let sortedCount = 1;

    while (!bubbleSorted) {
        for (let i = 0; i < array.length - sortedCount; i++) {

            itemColoringForBubbleSort(i, bgColors.checkingColor, bgColors.checkingColor, array)
            updateArray(array)
            await timer(time);


            if (array[i].rndNum > array[i + 1].rndNum) {

                itemColoringForBubbleSort(i, bgColors.wrongColor, bgColors.wrongColor, array)
                updateArray(array)
                await timer(time);

                allTrue = false;
                array = SwapElements(array, i, i + 1)

                itemColoringForBubbleSort(i, bgColors.correctedColor, bgColors.correctedColor, array)
                updateArray(array)
                await timer(time);
            } else {
                itemColoringForBubbleSort(i, bgColors.correctedColor, bgColors.correctedColor, array)
                updateArray(array)
                await timer(time);
            }

            if (i === array.length - sortedCount - 1) {
                itemColoringForBubbleSort(i, bgColors.staticColor, bgColors.allCorrectColor, array)
                updateArray(array)
                await timer(time);
            } else {
                itemColoringForBubbleSort(i, bgColors.staticColor, bgColors.staticColor, array)
                updateArray(array)
                await timer(time);
            }
        }
        if (allTrue) {
            bubbleSorted = true;
        }

        allTrue = true;
        sortedCount++
    }

    array.forEach(el => {
        el.bgColor = bgColors.allCorrectColor
    });

    updateArray(array)

    sortedCount = 1;
    bubbleSorted = false;
    sorting = false;
}

function itemColoringForBubbleSort(index, color, color2, array) {
    array[index].bgColor = color;
    array[index + 1].bgColor = color2;
}

export default BubbleSort;