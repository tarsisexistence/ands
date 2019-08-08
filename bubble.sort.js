/**
 * Bubble sort algorithm
 * Complexity: O(N^2)
 */
function bubbleSort(input) {
    const array = [...input];
    let { length: lastStable } = array;
    let isSwapped;

    while (lastStable !== 0) {
        isSwapped = false;

        for (let i = 0; i < lastStable; i += 1) {
            if (array[i] > array[i + 1]) {
                isSwapped = true;
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }

        if (isSwapped === false) {
            return array;
        }

        lastStable -= 1;
    }

    return array;
}


/**
 * inverted version
 * <----
 */
function bubbleSort2(input) {
    const array = [...input];
    let hasSwapped = false;

    for (let i = 0; i < array.length; i += 1) {
        hasSwapped = false;

        for (let j = array.length - 1; j > i; j -= 1) {
            if (array[j] < array[j - 1]) {
                hasSwapped = true;
                const temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }

        if (hasSwapped === false) {
            return array;
        }
    }


    return array;
}
