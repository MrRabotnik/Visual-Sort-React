import SwapElements from "./SwapElements";

const InsertionSort = async (array, sorting, updateArray, bgColors, timer, time) => {
    let arraySize = array.length
    for (let i = 1; i < arraySize; i++) {
        let currentTarget = i;
        itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.checkingColor, bgColors.checkingColor, array);
        updateArray(array);
        await timer(time);
        if (array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
            while (array[currentTarget - 1] && array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
                itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.wrongColor, bgColors.wrongColor, array);
                updateArray(array);
                await timer(time);
                array = SwapElements(array, currentTarget - 1, currentTarget)
                updateArray(array)
                itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.correctedColor, bgColors.correctedColor, array);
                updateArray(array);
                await timer(time);
                itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.staticColor, bgColors.staticColor, array);
                updateArray(array);
                await timer(time);
                currentTarget--;
            }
        } else {
            itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.correctedColor, bgColors.correctedColor, array);
            updateArray(array);
            await timer(time);
            itemColoringForInsertionSort(currentTarget - 1, currentTarget, bgColors.staticColor, bgColors.staticColor, array);
            updateArray(array);
            await timer(time);
        }
    }
    
    array.forEach(el => {
        el.bgColor = bgColors.allCorrectColor
    });
    updateArray(array)
    sorting = false;
}

function itemColoringForInsertionSort(index, index2, color, color2, array) {
    array[index].bgColor = color;
    array[index2].bgColor = color2;
}

export default InsertionSort;