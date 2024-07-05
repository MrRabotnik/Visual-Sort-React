import SwapElements from "../utils/SwapElements";

const SelectionSort = async (array, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let shouldSwapIndex = 0;
    let currentRunMinimumIndex = 0;
    let arraySize = array.length;

    while (shouldSwapIndex !== arraySize) {
        for (let i = shouldSwapIndex + 1; i < arraySize; i++) {
            if (shouldStopSortingRef.current) return;

            itemColoringForSelectionSort(i, bgColors.checkingColor, array);
            await timer(timeRef.current);
            updateArray(array);
            if (array[i].rndNum < array[currentRunMinimumIndex].rndNum) {
                if (currentRunMinimumIndex !== shouldSwapIndex) {
                    itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
                    updateArray(array);
                }
                currentRunMinimumIndex = i;
                itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.checkingColor, array);
                await timer(timeRef.current);
                updateArray(array);
            } else {
                itemColoringForSelectionSort(i, bgColors.correctedColor, array);
                await timer(timeRef.current);
                updateArray(array);
                itemColoringForSelectionSort(i, bgColors.staticColor, array);
                await timer(timeRef.current);
                updateArray(array);
            }
        }

        itemColoringForSelectionSort(shouldSwapIndex, bgColors.staticColor, array);
        updateArray(array);
        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
        updateArray(array);
        await timer(timeRef.current);

        array = SwapElements(array, shouldSwapIndex, currentRunMinimumIndex);
        updateArray(array);

        itemColoringForSelectionSort(shouldSwapIndex, bgColors.correctedColor, array);
        updateArray(array);
        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.correctedColor, array);
        updateArray(array);
        await timer(timeRef.current);

        itemColoringForSelectionSort(currentRunMinimumIndex, bgColors.staticColor, array);
        updateArray(array);
        itemColoringForSelectionSort(shouldSwapIndex, bgColors.allCorrectedColor, array);
        updateArray(array);
        await timer(timeRef.current);

        shouldSwapIndex++;
        currentRunMinimumIndex = shouldSwapIndex;
    }

    array.forEach((el) => {
        el.bgColor = bgColors.allCorrectColor;
    });

    updateArray(array);
};

function itemColoringForSelectionSort(index, color, array) {
    array[index].bgColor = color;
}

export default SelectionSort;
