const BucketSort = async (array, updateArray, bgColors, timer, timeRef) => {
    const n = array.length;
    const maxVal = Math.max(...array.map((el) => el.rndNum));
    const bucketSize = 10; // Number of buckets, adjust as needed

    // Initialize buckets
    const buckets = Array.from({ length: bucketSize }, () => []);

    // Distribute elements into buckets
    for (let i = 0; i < n; i++) {
        const element = array[i];
        const bucketIndex = Math.floor((element.rndNum / maxVal) * (bucketSize - 1));
        buckets[bucketIndex].push(element);

        // Visualize the placement into a bucket
        array[i].bgColor = bgColors.checkingColor;
        updateArray([...array]);
        await timer(timeRef.current);

        array[i].bgColor = bgColors.staticColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }

    // Sort each bucket using a stable sorting algorithm (e.g., Insertion Sort)
    for (let i = 0; i < bucketSize; i++) {
        if (buckets[i].length > 1) {
            await InsertionSort(buckets[i], array, updateArray, bgColors, timer, timeRef);
        }
    }

    // Copy sorted elements back to the original array
    let sortedIndex = 0;
    for (let i = 0; i < bucketSize; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            const element = buckets[i][j];
            const originalIndex = array.findIndex((el) => el === element);
            array[originalIndex] = element;
            array[sortedIndex] = element;
            array[sortedIndex].bgColor = bgColors.correctedColor;
            updateArray([...array]);
            await timer(timeRef.current);
            sortedIndex++;
        }
    }

    // Set final colors
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};

const InsertionSort = async (bucket, array, updateArray, bgColors, timer, timeRef) => {
    const n = bucket.length;
    for (let i = 1; i < n; i++) {
        let current = bucket[i];
        let j = i - 1;

        // Visualize the current element being sorted
        const originalIndex = array.findIndex((el) => el === current);
        array[originalIndex].bgColor = bgColors.checkingColor;
        updateArray([...array]);
        await timer(timeRef.current);

        while (j >= 0 && bucket[j].rndNum > current.rndNum) {
            bucket[j + 1] = bucket[j];
            const num = j;

            // Visualize the swapping
            const swapIndex = array.findIndex((el, index) => el === bucket[num + 1] && index <= originalIndex);

            array[swapIndex].bgColor = bgColors.checkingColor;
            updateArray([...array]);
            await timer(timeRef.current);

            array[swapIndex].bgColor = bgColors.wrongColor;
            updateArray([...array]);
            await timer(timeRef.current);

            array[swapIndex].bgColor = bgColors.staticColor;
            updateArray([...array]);
            await timer(timeRef.current);

            j--;
        }
        bucket[j + 1] = current;

        // Update visualization colors
        array[originalIndex].bgColor = bgColors.correctedColor;
        updateArray([...array]);
        await timer(timeRef.current);
        array[originalIndex].bgColor = bgColors.staticColor;
        updateArray([...array]);
        await timer(timeRef.current);
    }
    return bucket;
};

export default BucketSort;
