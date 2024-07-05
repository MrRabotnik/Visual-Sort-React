// const BucketSort = async (array, updateArray, bgColors, timer, timeRef) => {
//     const n = array.length;
//     const maxVal = Math.max(...array.map((el) => el.rndNum));
//     const bucketSize = 10; // Number of buckets, adjust as needed

//     // Initialize buckets
//     const buckets = Array.from({ length: bucketSize }, () => []);

//     // Distribute elements into buckets
//     array.forEach((element) => {
//         const bucketIndex = Math.floor((element.rndNum / maxVal) * (bucketSize - 1));
//         buckets[bucketIndex].push(element);
//     });

//     // Sort each bucket using a stable sorting algorithm (e.g., Insertion Sort)
//     for (let i = 0; i < bucketSize; i++) {
//         if (buckets[i].length > 1) {
//             buckets[i] = await InsertionSort(buckets[i], updateArray, bgColors, timer, timeRef);
//         }
//     }

//     // Concatenate sorted buckets into the final sorted array
//     let sortedArray = buckets.reduce((acc, bucket) => acc.concat(bucket), []);

//     // Update colors for visualization
//     sortedArray.forEach((element) => {
//         element.bgColor = bgColors.allCorrectColor;
//     });
//     updateArray([...sortedArray]);

//     return sortedArray;
// };

// const InsertionSort = async (array, updateArray, bgColors, timer, timeRef) => {
//     const n = array.length;
//     for (let i = 1; i < n; i++) {
//         let current = array[i];
//         let j = i - 1;

//         while (j >= 0 && array[j].rndNum > current.rndNum) {
//             array[j + 1] = array[j];
//             j--;
//         }
//         array[j + 1] = current;

//         // Update visualization colors and wait for timer
//         updateArray([...array]);
//         current.bgColor = bgColors.checkingColor;
//         await timer(timeRef.current);
//         updateArray([...array]);
//         current.bgColor = bgColors.correctedColor;
//         await timer(timeRef.current);
//         updateArray([...array]);
//         current.bgColor = bgColors.staticColor;
//         await timer(timeRef.current);
//     }
//     return array;
// };

// export default BucketSort;

const BucketSort = (array) => {
    const n = array.length;
    if (n === 0) {
        return array;
    }

    // Determine min and max values in the array
    let minVal = array[0].rndNum;
    let maxVal = array[0].rndNum;
    for (let i = 1; i < n; i++) {
        if (array[i].rndNum < minVal) {
            minVal = array[i].rndNum;
        } else if (array[i].rndNum > maxVal) {
            maxVal = array[i].rndNum;
        }
    }

    // Create buckets based on range and distribute elements
    const bucketSize = 10; // Number of buckets
    const buckets = new Array(bucketSize);
    for (let i = 0; i < bucketSize; i++) {
        buckets[i] = [];
    }

    // Distribute elements into buckets
    for (let i = 0; i < n; i++) {
        const bucketIndex = Math.floor(((array[i].rndNum - minVal) / (maxVal - minVal + 1)) * bucketSize);
        buckets[bucketIndex].push(array[i]);
    }

    // Sort each bucket (using any stable sorting algorithm)
    for (let i = 0; i < bucketSize; i++) {
        buckets[i].sort((a, b) => a.rndNum - b.rndNum);
    }

    // Concatenate sorted buckets into the final sorted array
    let sortedArray = [];
    for (let i = 0; i < bucketSize; i++) {
        sortedArray = sortedArray.concat(buckets[i]);
    }

    return sortedArray;
};

export default BucketSort;
