const CycleSort = async (arr, updateArray, bgColors, timer, timeRef) => {
    let n = arr.length;

    for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;

        // Find position where we put the current item
        for (let i = cycleStart + 1; i < n; i++) {
            if (arr[i].rndNum < item.rndNum) {
                arr[i].bgColor = bgColors.checkingColor;
                updateArray([...arr]);
                await timer(timeRef.current);

                arr[i].bgColor = bgColors.staticColor;
                updateArray([...arr]);
                await timer(timeRef.current);
                pos++;
            }
        }

        // If item is already in correct position, skip
        if (pos === cycleStart) {
            continue;
        }

        // Skip duplicates
        while (item.rndNum === arr[pos].rndNum) {
            arr[pos].bgColor = bgColors.checkingColor;
            updateArray([...arr]);
            timer(timeRef.current);

            arr[pos].bgColor = bgColors.staticColor;
            updateArray([...arr]);
            await timer(timeRef.current);
            pos++;
        }

        // Swap the items
        if (pos !== cycleStart) {
            let temp = item;
            item = arr[pos];
            arr[pos] = temp;

            arr[cycleStart].bgColor = bgColors.checkingColor;
            arr[pos].bgColor = bgColors.checkingColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            // Highlight the swap
            arr[cycleStart].bgColor = bgColors.wrongColor;
            arr[pos].bgColor = bgColors.wrongColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            arr[cycleStart].bgColor = bgColors.correctedColor;
            arr[pos].bgColor = bgColors.correctedColor;
            updateArray([...arr]);
            await timer(timeRef.current);

            arr[cycleStart].bgColor = bgColors.staticColor;
            arr[pos].bgColor = bgColors.staticColor;
            updateArray([...arr]);
            await timer(timeRef.current);
        }

        // Move items to their correct position
        while (pos !== cycleStart) {
            pos = cycleStart;

            // Find position where we put the current item
            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i].rndNum < item.rndNum) {
                    pos++;
                    arr[i].bgColor = bgColors.checkingColor;
                    updateArray([...arr]);
                    timer(timeRef.current);

                    arr[i].bgColor = bgColors.staticColor;
                    updateArray([...arr]);
                    await timer(timeRef.current);
                }
            }

            // Skip duplicates
            while (item.rndNum === arr[pos].rndNum) {
                pos++;
            }

            // Swap the items
            if (item !== arr[pos]) {
                let temp = item;
                item = arr[pos];
                arr[pos] = temp;

                // Highlight the swap
                arr[cycleStart].bgColor = bgColors.checkingColor;
                arr[pos].bgColor = bgColors.checkingColor;
                updateArray([...arr]);
                await timer(timeRef.current);

                arr[cycleStart].bgColor = bgColors.wrongColor;
                arr[pos].bgColor = bgColors.wrongColor;
                updateArray([...arr]);
                await timer(timeRef.current);

                arr[cycleStart].bgColor = bgColors.correctedColor;
                arr[pos].bgColor = bgColors.correctedColor;
                updateArray([...arr]);
                await timer(timeRef.current);

                arr[cycleStart].bgColor = bgColors.staticColor;
                arr[pos].bgColor = bgColors.allCorrectColor;
                updateArray([...arr]);
                await timer(timeRef.current);
            }
        }
    }

    // Set all elements to correct color after sorting
    arr.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...arr]);
};

export default CycleSort;
