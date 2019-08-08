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
