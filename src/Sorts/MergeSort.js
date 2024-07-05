const MergeSort = async (array, updateArray, bgColors, timer, timeRef) => {
    // Helper function to perform merge sort
    const mergeSortHelper = async (array, start, end) => {
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);

        // Recursively sort the left and right halves
        await mergeSortHelper(array, start, mid);
        await mergeSortHelper(array, mid + 1, end);

        // Merge the sorted halves
        await merge(array, start, mid, end);
    };

    // Function to merge two sorted subarrays into one sorted array
    const merge = async (array, start, mid, end) => {
        // Create temporary arrays to hold left and right subarrays
        const leftArray = array.slice(start, mid + 1);
        const rightArray = array.slice(mid + 1, end + 1);

        let leftIndex = 0,
            rightIndex = 0,
            mergeIndex = start;

        // Merge left and right arrays into array[start...end]
        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            if (leftArray[leftIndex].rndNum <= rightArray[rightIndex].rndNum) {
                array[mergeIndex++] = leftArray[leftIndex];
                leftArray[leftIndex].bgColor = bgColors.checkingColor;
                updateArray([...array]);
                await timer(timeRef.current);

                leftArray[leftIndex].bgColor = bgColors.correctedColor;
                updateArray([...array]);
                await timer(timeRef.current);
                leftIndex++;
            } else {
                array[mergeIndex++] = rightArray[rightIndex];
                rightArray[rightIndex].bgColor = bgColors.checkingColor;
                updateArray([...array]);
                await timer(timeRef.current);

                rightArray[rightIndex].bgColor = bgColors.correctedColor;
                updateArray([...array]);
                await timer(timeRef.current);
                rightIndex++;
            }
        }

        // Copy remaining elements of leftArray, if any
        while (leftIndex < leftArray.length) {
            array[mergeIndex] = leftArray[leftIndex];
            array[mergeIndex].bgColor = bgColors.checkingColor;
            updateArray([...array]);
            await timer(timeRef.current);
            leftIndex++;
            mergeIndex++;
        }

        // Copy remaining elements of rightArray, if any
        while (rightIndex < rightArray.length) {
            array[mergeIndex] = rightArray[rightIndex];
            array[mergeIndex].bgColor = bgColors.checkingColor;
            updateArray([...array]);
            await timer(timeRef.current);
            rightIndex++;
            mergeIndex++;
        }

        // Highlight the sorted portion
        for (let i = start; i <= end; i++) {
            array[i].bgColor = bgColors.staticColor;
        }
        updateArray([...array]);
        await timer(timeRef.current);
    };

    // Initialize merge sort with full array range
    await mergeSortHelper(array, 0, array.length - 1);

    // Set all elements to final color
    array.forEach((el) => (el.bgColor = bgColors.allCorrectColor));
    updateArray([...array]);
};

export default MergeSort;
