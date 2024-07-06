import { playBeepSound } from "../utils/playBeep";
import SwapElements from "../utils/SwapElements";

const InsertionSort = async (array, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    let arraySize = array.length;
    for (let i = 1; i < arraySize; i++) {
        if (shouldStopSortingRef.current) return;
        let currentTarget = i;
        itemColoringForInsertionSort(
            currentTarget - 1,
            currentTarget,
            bgColors.checkingColor,
            bgColors.checkingColor,
            array
        );
        updateArray(array);
        await timer(timeRef.current);
        if (array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
            while (array[currentTarget - 1] && array[currentTarget].rndNum < array[currentTarget - 1].rndNum) {
                itemColoringForInsertionSort(
                    currentTarget - 1,
                    currentTarget,
                    bgColors.wrongColor,
                    bgColors.wrongColor,
                    array
                );
                updateArray(array);
                await timer(timeRef.current);
                array = SwapElements(array, currentTarget - 1, currentTarget);

                playBeepSound(currentTarget);

                updateArray(array);
                itemColoringForInsertionSort(
                    currentTarget - 1,
                    currentTarget,
                    bgColors.correctedColor,
                    bgColors.correctedColor,
                    array
                );
                updateArray(array);
                await timer(timeRef.current);
                itemColoringForInsertionSort(
                    currentTarget - 1,
                    currentTarget,
                    bgColors.staticColor,
                    bgColors.staticColor,
                    array
                );
                updateArray(array);
                await timer(timeRef.current);
                currentTarget--;
            }
        } else {
            itemColoringForInsertionSort(
                currentTarget - 1,
                currentTarget,
                bgColors.correctedColor,
                bgColors.correctedColor,
                array
            );
            updateArray(array);
            await timer(timeRef.current);
            itemColoringForInsertionSort(
                currentTarget - 1,
                currentTarget,
                bgColors.staticColor,
                bgColors.staticColor,
                array
            );
            updateArray(array);
            await timer(timeRef.current);
        }
    }

    array.forEach((el) => {
        el.bgColor = bgColors.allCorrectColor;
    });
    updateArray(array);
};

function itemColoringForInsertionSort(index, index2, color, color2, array) {
    array[index].bgColor = color;
    array[index2].bgColor = color2;
}

export default InsertionSort;
