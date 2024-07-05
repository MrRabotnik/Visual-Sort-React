const CycleSort = async (arr, updateArray, bgColors, timer, timeRef) => {
    let n = arr.length;

    for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
        let item = arr[cycleStart];

        let pos = cycleStart;
        for (let i = cycleStart + 1; i < n; i++) {
            if (arr[i].rndNum < item.rndNum) {
                pos++;
            }
        }

        if (pos === cycleStart) {
            continue;
        }

        while (item.rndNum === arr[pos].rndNum) {
            pos += 1;
        }

        if (pos !== cycleStart) {
            let temp = item;
            item = arr[pos];
            arr[pos] = temp;

            arr[cycleStart].bgColor = bgColors.wrongColor;
            arr[pos].bgColor = bgColors.wrongColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            arr[cycleStart].bgColor = bgColors.correctedColor;
            arr[pos].bgColor = bgColors.correctedColor;
            updateArray([...arr]);
            await timer(timeRef.current);
        }

        while (pos !== cycleStart) {
            pos = cycleStart;

            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i].rndNum < item.rndNum) {
                    pos += 1;
                }
            }

            while (item.rndNum === arr[pos].rndNum) {
                pos += 1;
            }

            if (item !== arr[pos]) {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;

                arr[cycleStart].bgColor = bgColors.wrongColor;
                arr[pos].bgColor = bgColors.wrongColor;
                updateArray([...arr]);
                await timer(timeRef.current);

                arr[cycleStart].bgColor = bgColors.correctedColor;
                arr[pos].bgColor = bgColors.correctedColor;
                updateArray([...arr]);
                await timer(timeRef.current);
            }
        }
    }

    arr.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...arr]);
};

export default CycleSort;
