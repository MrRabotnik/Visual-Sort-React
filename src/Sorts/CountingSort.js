import { playBeepSound } from "../utils/playBeep";

const CountingSort = async (array, updateArray, bgColors, timer, timeRef) => {
    let max = Math.max(...array.map((el) => el.rndNum));
    let min = Math.min(...array.map((el) => el.rndNum));
    let count = new Array(max - min + 1).fill(0);

    // Step 1: Count frequencies and colorize the array
    for (let i = 0; i < array.length; i++) {
        count[array[i].rndNum - min]++;
        array[i].bgColor = bgColors.checkingColor;
        updateArray([...array]);
        await timer(timeRef.current);

        playBeepSound(i);
    }

    // Step 2: Accumulate frequencies and update colors
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Step 3: Place elements in sorted order and colorize transitions
    let output = new Array(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
        let index = count[array[i].rndNum - min] - 1;
        output[index] = array[i];
        playBeepSound(i);

        // Colorize current element being placed
        array[i].bgColor = bgColors.correctedColor;
        updateArray([...array]);
        await timer(timeRef.current);

        // Decrement count and update color to staticColor
        count[array[i].rndNum - min]--;
        array[i].bgColor = bgColors.staticColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    // Step 4: Copy sorted elements back to original array and finalize colors
    for (let i = 0; i < array.length; i++) {
        array[i] = output[i];
        array[i].bgColor = bgColors.allCorrectColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    return array;
};

export default CountingSort;
