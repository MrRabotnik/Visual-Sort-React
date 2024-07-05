import SwapElements from "../utils/SwapElements";

const SelectionSort = async (array, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let arraySize = array.length;

    for (let i = 0; i < arraySize - 1; i++) {
        let minIndex = i;

        // Set the color for the first element to be swapped with min
        array[i].bgColor = bgColors.checkingColor;
        updateArray([...array]);
        await timer(timeRef.current);

        for (let j = i + 1; j < arraySize; j++) {
            if (shouldStopSortingRef.current) return;

            // Color the elements being compared
            await itemColoringForSelectionSort(
                minIndex,
                j,
                bgColors.checkingColor,
                bgColors.checkingColor,
                array,
                updateArray,
                timer,
                timeRef
            );

            if (array[j].rndNum < array[minIndex].rndNum) {
                // Reset the color of the previous minimum element
                await itemColoringForSelectionSort(
                    minIndex,
                    j,
                    bgColors.wrongColor,
                    bgColors.wrongColor,
                    array,
                    updateArray,
                    timer,
                    timeRef
                );

                await itemColoringForSelectionSort(
                    minIndex,
                    j,
                    bgColors.staticColor,
                    bgColors.checkingColor,
                    array,
                    updateArray,
                    timer,
                    timeRef
                );
                minIndex = j;
            } else {
                await itemColoringForSelectionSort(
                    minIndex,
                    j,
                    bgColors.correctedColor,
                    bgColors.correctedColor,
                    array,
                    updateArray,
                    timer,
                    timeRef
                );

                await itemColoringForSelectionSort(
                    minIndex,
                    j,
                    bgColors.checkingColor,
                    bgColors.staticColor,
                    array,
                    updateArray,
                    timer,
                    timeRef
                );
            }
        }

        if (minIndex !== i) {
            array = SwapElements(array, i, minIndex);

            await itemColoringForSelectionSort(
                i,
                minIndex,
                bgColors.correctedColor,
                bgColors.correctedColor,
                array,
                updateArray,
                timer,
                timeRef
            );

            await itemColoringForSelectionSort(
                i,
                minIndex,
                bgColors.allCorrectColor,
                bgColors.staticColor,
                array,
                updateArray,
                timer,
                timeRef
            );
        }

        array[i].bgColor = bgColors.allCorrectColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    // Set the color for the last element
    array[arraySize - 1].bgColor = bgColors.allCorrectColor;
    updateArray([...array]);
    await timer(timeRef.current);
};

async function itemColoringForSelectionSort(i, j, c1, c2, array, updateArray, timer, timeRef) {
    array[i].bgColor = c1;
    array[j].bgColor = c2;
    updateArray([...array]);
    await timer(timeRef.current);
}

export default SelectionSort;
