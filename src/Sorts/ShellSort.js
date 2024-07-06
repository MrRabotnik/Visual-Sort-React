import { playBeepSound } from "../utils/playBeep";

const ShellSort = async (array, updateArray, bgColors, timer, timeRef) => {
    let n = array.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = array[i];
            let j;
            for (j = i; j >= gap && array[j - gap].rndNum > temp.rndNum; j -= gap) {
                playBeepSound(j);
                array[j] = array[j - gap];
                array[j].bgColor = bgColors.checkingColor;
                updateArray([...array]);
                await timer(timeRef.current);
            }
            array[j] = temp;
            array[j].bgColor = bgColors.correctedColor;
            updateArray([...array]);
            await timer(timeRef.current);

            array[j].bgColor = bgColors.staticColor;
            updateArray([...array]);
            await timer(timeRef.current);
        }
    }
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};
export default ShellSort;
