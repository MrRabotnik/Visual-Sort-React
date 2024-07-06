import { playBeepSound } from "../utils/playBeep";

const PancakeSort = async (array, updateArray, bgColors, timer, timeRef, shouldStopSortingRef) => {
    const flip = async (arr, i) => {
        let start = 0;
        while (start < i) {
            if (shouldStopSortingRef.current) return;

            playBeepSound(start);

            // Color the elements being flipped
            itemColoringForPancakeSort(start, i, bgColors.checkingColor, bgColors.checkingColor, arr);
            updateArray([...arr]);
            await timer(timeRef.current);

            // Swap elements
            [arr[start], arr[i]] = [arr[i], arr[start]];

            // Update the color after swapping
            itemColoringForPancakeSort(start, i, bgColors.correctedColor, bgColors.correctedColor, arr);
            updateArray([...arr]);
            await timer(timeRef.current);

            itemColoringForPancakeSort(start, i, bgColors.staticColor, bgColors.staticColor, arr);
            updateArray([...arr]);
            await timer(timeRef.current);

            start++;
            i--;
        }
        // Reset colors to static after the flip
        for (let j = 0; j <= start; j++) {
            arr[j].bgColor = bgColors.staticColor;
        }
        updateArray([...arr]);
        await timer(timeRef.current);
    };

    let n = array.length;
    for (let currSize = n; currSize > 1; --currSize) {
        let mi = 0;
        for (let i = 1; i < currSize; ++i) {
            if (shouldStopSortingRef.current) return;

            // Color the elements being compared
            itemColoringForPancakeSort(mi, i, bgColors.checkingColor, bgColors.checkingColor, array);
            updateArray([...array]);
            await timer(timeRef.current);

            playBeepSound(i);

            if (array[i].rndNum > array[mi].rndNum) {
                // Reset the previous max element's color
                array[mi].bgColor = bgColors.staticColor;
                mi = i;
            } else {
                array[i].bgColor = bgColors.staticColor;
            }

            // Update the color of the current max element
            array[mi].bgColor = bgColors.correctedColor;
            updateArray([...array]);
            await timer(timeRef.current);
        }

        if (mi !== currSize - 1) {
            // First flip to bring the max element to the front
            await flip(array, mi);

            // Second flip to move the max element to its correct position
            await flip(array, currSize - 1);
        }

        // Set the sorted part to allCorrectColor
        for (let j = currSize - 1; j < n; j++) {
            array[j].bgColor = bgColors.allCorrectColor;
        }
        updateArray([...array]);
        await timer(timeRef.current);
    }

    // Set the entire array to allCorrectColor
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};

async function itemColoringForPancakeSort(i, j, c1, c2, array) {
    array[i].bgColor = c1;
    array[j].bgColor = c2;
}

export default PancakeSort;
