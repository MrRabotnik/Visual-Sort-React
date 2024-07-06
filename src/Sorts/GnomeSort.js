import { playBeepSound } from "../utils/playBeep";

const GnomeSort = async (array, updateArray, bgColors, timer, timeRef) => {
    let n = array.length;
    let index = 0;

    while (index < n) {
        if (index === 0) {
            index++;
        }
        if (array[index].rndNum >= array[index - 1].rndNum) {
            index++;
        } else {
            array[index].bgColor = bgColors.checkingColor;
            array[index - 1].bgColor = bgColors.checkingColor;
            updateArray([...array]);
            await timer(timeRef.current);

            array[index].bgColor = bgColors.wrongColor;
            array[index - 1].bgColor = bgColors.wrongColor;
            updateArray([...array]);
            await timer(timeRef.current);

            [array[index], array[index - 1]] = [array[index - 1], array[index]];

            playBeepSound(index);

            array[index].bgColor = bgColors.correctedColor;
            array[index - 1].bgColor = bgColors.correctedColor;
            updateArray([...array]);
            await timer(timeRef.current);

            array[index].bgColor = bgColors.staticColor;
            array[index - 1].bgColor = bgColors.staticColor;
            updateArray([...array]);
            await timer(timeRef.current);

            index--;
        }
    }
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};
export default GnomeSort;
