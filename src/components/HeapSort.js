import SwapElements from "./SwapElements";

const HeapSort = async (arr, sorting, updateArray, bgColors, timer, time) => {
    let array = arr
    let arrayLength = array.length;

    while (arrayLength >= 2) {
        for (let i = Math.floor(arrayLength / 2 - 1); i >= 0; i--) {
            let parentNode = array[i].rndNum;
            let leftChildNode = array[2 * i + 1] ? 2 * i + 1 === arrayLength ? 0 : array[2 * i + 1].rndNum : 0;
            let rightChildNode = array[2 * i + 2] ? 2 * i + 2 === arrayLength ? 0 : array[2 * i + 2].rndNum : 0;

            itemColoringForHeapSort(i, 2 * i + 1, bgColors.checkingColor, bgColors.checkingColor, array);
            updateArray(array)
            if (2 * i + 2 !== arrayLength) {
                array[2 * i + 2].bgColor = bgColors.checkingColor;
                await timer(time);
                updateArray(array)
            }

            if (leftChildNode > rightChildNode && leftChildNode > parentNode) {
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.staticColor, bgColors.staticColor, array);
                updateArray(array)
                if (2 * i + 2 !== arrayLength) {
                    array[2 * i + 2].bgColor = bgColors.staticColor;
                    await timer(time);
                    updateArray(array)
                }
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.wrongColor, bgColors.wrongColor, array);
                await timer(time);
                updateArray(array)
                array = SwapElements(array, i, 2 * i + 1);
                updateArray(array)
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.correctedColor, bgColors.correctedColor, array);
                await timer(time);
                updateArray(array)
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.staticColor, bgColors.staticColor, array);
                await timer(time);
                updateArray(array)

            } else if (rightChildNode >= leftChildNode && rightChildNode > parentNode) {
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.staticColor, bgColors.staticColor, array);
                updateArray(array)
                if (2 * i + 2 !== arrayLength) {
                    array[2 * i + 2].bgColor = bgColors.staticColor;
                    await timer(time);
                    updateArray(array)
                }
                itemColoringForHeapSort(i, 2 * i + 2, bgColors.wrongColor, bgColors.wrongColor, array);
                await timer(time);
                updateArray(array)
                array = SwapElements(array, i, 2 * i + 2);
                updateArray(array)
                itemColoringForHeapSort(i, 2 * i + 2, bgColors.correctedColor, bgColors.correctedColor, array);
                await timer(time);
                updateArray(array)
                itemColoringForHeapSort(i, 2 * i + 2, bgColors.staticColor, bgColors.staticColor, array);
                await timer(time);
                updateArray(array)
            } else {
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.correctedColor, bgColors.correctedColor, array);
                updateArray(array)
                if (2 * i + 2 !== arrayLength) {
                    array[2 * i + 2].bgColor = bgColors.correctedColor;
                    await timer(time);
                    updateArray(array)
                }
                itemColoringForHeapSort(i, 2 * i + 1, bgColors.staticColor, bgColors.staticColor, array);
                updateArray(array)
                if (2 * i + 2 !== arrayLength) {
                    array[2 * i + 2].bgColor = bgColors.staticColor;
                    await timer(time);
                    updateArray(array)
                }
            }
        }

        itemColoringForHeapSort(0, arrayLength - 1, bgColors.wrongColor, bgColors.wrongColor, array);
        updateArray(array)
        await timer(time);

        array = SwapElements(array, 0, arrayLength - 1)
        updateArray(array)

        itemColoringForHeapSort(0, arrayLength - 1, bgColors.correctedColor, bgColors.correctedColor, array);
        updateArray(array)
        await timer(time);

        if (arrayLength === 2) {
            itemColoringForHeapSort(0, arrayLength - 1, bgColors.allCorrectColor, bgColors.allCorrectColor, array);
            updateArray(array)
            await timer(time);
        } else {
            itemColoringForHeapSort(0, arrayLength - 1, bgColors.staticColor, bgColors.allCorrectColor, array);
            updateArray(array)
            await timer(time);
        }
        
        arrayLength--;
    }

    array.forEach(el => {
        el.bgColor = bgColors.allCorrectColor
    });

    updateArray(array);
    sorting = false;
}

function itemColoringForHeapSort(index, index2, color, color2, array) {
    array[index].bgColor = color;
    array[index2].bgColor = color2;
}

export default HeapSort;