import SwapElements from "./SwapElements";

const SelectionSort = async (array, sorting, updateArray, bgColors, timer, time) => {
    let shouldSwapIndex = 0;
    let currentRunMinimumIndex = 0
    let arraySize = array.length

    while (shouldSwapIndex !== arraySize) {
        for (let i = shouldSwapIndex + 1; i < arraySize; i++) {
            itemColoringForSelectionSort(i, bgColors.checkingColor, array);
            await timer(time);
            updateArray(array);
            if (array[i].rndNum < array[currentRunMinimumIndex].rndNum) {
                if (currentRunMinimumIndex !== shouldSwapIndex) {
                    itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
                    updateArray(array);
                }
                currentRunMinimumIndex = i
                itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.checkingColor, array);
                await timer(time);
                updateArray(array);
            } else {
                itemColoringForSelectionSort(i, bgColors.correctedColor, array);
                await timer(time);
                updateArray(array);
                itemColoringForSelectionSort(i, bgColors.staticColor, array);
                await timer(time);
                updateArray(array);
            }
        }

        itemColoringForSelectionSort(shouldSwapIndex, bgColors.staticColor, array);
        updateArray(array);
        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
        updateArray(array);
        await timer(time);

        array = SwapElements(array, shouldSwapIndex, currentRunMinimumIndex)
        updateArray(array)

        itemColoringForSelectionSort(shouldSwapIndex, bgColors.correctedColor, array);
        updateArray(array);
        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.correctedColor, array);
        updateArray(array);
        await timer(time);

        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
        updateArray(array);
        itemColoringForSelectionSort(shouldSwapIndex, bgColors.allCorrectedColor, array);
        updateArray(array);
        await timer(time);

        shouldSwapIndex++;
        currentRunMinimumIndex = shouldSwapIndex;

    }

    array.forEach(el => {
        el.bgColor = bgColors.allCorrectColor
    });

    updateArray(array);
    
    sorting = false;
}

function itemColoringForSelectionSort(index, color, array) {
    array[index].bgColor = color;
}

export default SelectionSort;