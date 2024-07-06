import { playBeepSound } from "../utils/playBeep";

const RUN = 32;

const insertionSort = async (arr, left, right, updateArray, bgColors, timer, timeRef) => {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        updateArray([...arr]);
        await timer(timeRef.current);

        while (j >= left && arr[j].rndNum > temp.rndNum) {
            playBeepSound(j);

            arr[j + 1] = arr[j];
            arr[j].bgColor = bgColors.checkingColor;
            arr[j + 1].bgColor = bgColors.checkingColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            arr[j].bgColor = bgColors.staticColor;
            arr[j + 1].bgColor = bgColors.staticColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            j--;
        }
        arr[j + 1] = temp;
        arr[j + 1].bgColor = bgColors.correctedColor;
        updateArray([...arr]);
        await timer(timeRef.current);

        // Reset colors after comparison
        for (let k = left; k <= right; k++) {
            if (k !== j + 1) arr[k].bgColor = bgColors.staticColor;
        }
        updateArray([...arr]);
    }
};

const merge = async (arr, l, m, r, updateArray, bgColors, timer, timeRef) => {
    let len1 = m - l + 1,
        len2 = r - m;
    let left = new Array(len1);
    let right = new Array(len2);

    for (let x = 0; x < len1; x++) left[x] = arr[l + x];
    for (let x = 0; x < len2; x++) right[x] = arr[m + 1 + x];

    let i = 0;
    let j = 0;
    let k = l;

    while (i < len1 && j < len2) {
        if (left[i].rndNum <= right[j].rndNum) {
            arr[k] = left[i];
            left[i].bgColor = bgColors.correctedColor;
            i++;
        } else {
            arr[k] = right[j];
            right[j].bgColor = bgColors.correctedColor;
            j++;
        }
        updateArray([...arr]);
        await timer(timeRef.current);
        k++;
    }

    while (i < len1) {
        playBeepSound(i);
        arr[k] = left[i];
        left[i].bgColor = bgColors.correctedColor;
        i++;
        k++;
        updateArray([...arr]);
        await timer(timeRef.current);
    }

    while (j < len2) {
        playBeepSound(j);
        arr[k] = right[j];
        right[j].bgColor = bgColors.correctedColor;
        j++;
        k++;
        updateArray([...arr]);
        await timer(timeRef.current);
    }

    // Reset colors after merging
    for (let x = l; x <= r; x++) {
        arr[x].bgColor = bgColors.staticColor;
    }
    updateArray([...arr]);
};

const TimSort = async (arr, updateArray, bgColors, timer, timeRef) => {
    let n = arr.length;

    for (let i = 0; i < n; i += RUN) {
        await insertionSort(arr, i, Math.min(i + RUN - 1, n - 1), updateArray, bgColors, timer, timeRef);
    }

    for (let size = RUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min(left + 2 * size - 1, n - 1);

            if (mid < right) {
                await merge(arr, left, mid, right, updateArray, bgColors, timer, timeRef);
            }
        }
    }

    arr.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...arr]);
};

export default TimSort;
